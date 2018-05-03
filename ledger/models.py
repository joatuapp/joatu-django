from django.db import models
from profiles.models import Profile, ProfileWallet
from projects.models import Project
from demands.models import Demand
from offers.models import Offer
from django.db.models.signals import post_save

# Create your models here.



class Transaction(models.Model):
    profile_from = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=False, null=True, related_name='from_user')

    profile_to = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=False, null=True, related_name='to_user')

    amount = models.DecimalField(max_digits=15, decimal_places=2)
    date= models.DateTimeField(auto_now_add=True)
    TYPE_OF_TRANSACTION=(
        ('OF', 'Offer'),
        ('DE', 'Demand'),
        ('CR', 'Creation'))
    transaction_type = models.CharField(max_length=2, choices=TYPE_OF_TRANSACTION,)
    transaction_id = models.PositiveIntegerField(blank=False, null=False)

class Transaction_isOffer(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    offer=models.ForeignKey(Offer, on_delete=models.SET_NULL, null=True)

class Transaction_isDemand(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    demand=models.ForeignKey(Demand, on_delete=models.SET_NULL, null=True)
    
class Transaction_isCreation(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)

class Operations(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField(auto_now_add=True)
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    debit = models.PositiveIntegerField(blank=True, null=True)
    credit = models.PositiveIntegerField(blank=True, null=True)
    balance = models.PositiveIntegerField(blank=True, null=True)




def Transaction_created(sender,update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        if instance.transaction_type == 'OF':
            Transaction_isOffer.objects.create(transaction = instance, offer=instance.transaction_id)
        elif instance.transaction_type == 'DE':
            a= Demand.objects.get(pk=instance.transaction_id)
            Transaction_isDemand.objects.create(transaction = instance, demand=a)
        else :
            pass
        wallet_from = ProfileWallet.objects.get(profile = instance.profile_from)
        wallet_from.wallet -= instance.amount
        wallet_from.save()
        wallet_to = ProfileWallet.objects.get(profile = instance.profile_to)
        wallet_to.wallet += instance.amount
        wallet_to.save()
        Operations.objects.create(profile=instance.profile_from, transaction=instance, debit=instance.amount, balance=wallet_from.wallet)
        Operations.objects.create(profile=instance.profile_to, transaction=instance, credit=instance.amount, balance=wallet_to.wallet)


post_save.connect(Transaction_created, sender=Transaction)

