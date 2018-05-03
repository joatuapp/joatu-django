from rest_framework import serializers
from ledger.models import Operations

class OperationsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Operations
        fields= [
            'profile',
            'date',
            'transaction',
            'debit',
            'credit',
            'balance',
            ]