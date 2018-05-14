from rest_framework import serializers

from demands.models import Demand
from projects.models import ProjectHub


class DemandShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Demand
        fields = (
            'url',
            'id',
            'title',
            'requester',
            'is_CAPS',
            'is_BARTER',
            'is_GIVE',
            'price_CAPS',
            'created',
            'updated',
        )


class DemandHubSerializer(serializers.HyperlinkedModelSerializer):
    demand = DemandShortSerializer()

    class Meta:
        model = ProjectHub
        fields = ('demand', 'distance_km', 'lat', 'lng')


class DemandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Demand
        fields = (
            'url',
            'id',
            'title',
            'description',
            'number',
            'street',
            'postal_code',
            'city',
            'is_CAPS',
            'is_BARTER',
            'is_GIVE',
            'requester',
            'created',
            'updated',
            'price_CAPS',
            'price_barter',
            'requester',)
        read_only_fields = ('requester',)
