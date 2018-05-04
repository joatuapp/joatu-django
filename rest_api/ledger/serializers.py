from rest_framework import serializers

from ledger.models import Operations


class OperationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Operations
        fields = '__all__'


