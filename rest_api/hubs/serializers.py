from rest_framework import serializers

from hubs.models import Hub
from ..projects.serializers import ProjectHubSerializer
from ..offers.serializers import OfferHubSerializer
from ..demands.serializers import DemandHubSerializer


class HubSerializer(serializers.HyperlinkedModelSerializer):
    projects = ProjectHubSerializer(many=True, read_only=True)
    demands = DemandHubSerializer(many=True, read_only=True)
    offers = OfferHubSerializer(many=True, read_only=True)

    class Meta:
        model = Hub
        fields = (
            'url',
            'hub_name',
            'number',
            'street',
            'postal_code',
            'city',
            'projects',
            'demands',
            'offers',
        )
