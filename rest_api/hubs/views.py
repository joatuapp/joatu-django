from rest_framework.viewsets import ReadOnlyModelViewSet

from hubs.models import Hub
from .serializers import HubSerializer


class HubViewSet(ReadOnlyModelViewSet):

    queryset = Hub.objects.all()
    serializer_class = HubSerializer
