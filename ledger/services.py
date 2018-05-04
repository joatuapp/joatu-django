from django.db.models.signals import post_save

from .models import Transaction, TransactionIsOffer, Operations, ProfileWallet, TransactionIsDemand
from demands.models import Demand


def transaction_created(sender, update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        if instance.transaction_type == 'OF':
            TransactionIsOffer.objects.create(transaction=instance, offer=instance.transaction_id)
        elif instance.transaction_type == 'DE':
            a = Demand.objects.get(pk=instance.transaction_id)
            TransactionIsDemand.objects.create(transaction=instance, demand=a)
        else:
            pass
        wallet_from = ProfileWallet.objects.get(profile=instance.profile_from)
        wallet_from.wallet -= instance.amount
        wallet_from.save()
        wallet_to = ProfileWallet.objects.get(profile=instance.profile_to)
        wallet_to.wallet += instance.amount
        wallet_to.save()
        Operations.objects.create(
            profile=instance.profile_from,
            transaction=instance,
            debit=instance.amount,
            balance=wallet_from.wallet,
        )
        Operations.objects.create(
            profile=instance.profile_to,
            transaction=instance,
            credit=instance.amount,
            balance=wallet_to.wallet,
        )


post_save.connect(transaction_created, sender=Transaction)
