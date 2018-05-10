from django.db import models
from profiles.models import Profile, ProfileWallet
from projects.models import Project
from demands.models import Demand
from offers.models import Offer


class Transaction(models.Model):
    profile_from = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=False, null=True,
                                     related_name='from_user')

    profile_to = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=False, null=True, related_name='to_user')

    amount = models.DecimalField(max_digits=15, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    TYPE_OF_TRANSACTION = (
        ('OF', 'Offer'),
        ('DE', 'Demand'),
        ('CR', 'Creation'))
    transaction_type = models.CharField(max_length=2, choices=TYPE_OF_TRANSACTION, )
    transaction_id = models.PositiveIntegerField(blank=False, null=False)


class TransactionIsOffer(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    offer = models.ForeignKey(Offer, on_delete=models.SET_NULL, null=True)


class TransactionIsDemand(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    demand = models.ForeignKey(Demand, on_delete=models.SET_NULL, null=True)


class TransactionIsCreation(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)


class Operations(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField(auto_now_add=True)
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)
    debit = models.PositiveIntegerField(blank=True, null=True)
    credit = models.PositiveIntegerField(blank=True, null=True)
    balance = models.PositiveIntegerField(blank=True, null=True)

