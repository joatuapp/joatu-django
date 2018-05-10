from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from demands.models import Demand
from profiles.models import Profile
from ..permissions import DemandIsOwnerOrReadOnly
from .serializers import DemandSerializer


class DemandViewSet(viewsets.ModelViewSet):

    queryset = Demand.objects.all().order_by('title')
    serializer_class = DemandSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, DemandIsOwnerOrReadOnly,)

    def create(self, request, *args, **kwargs):
        try:
            # instance = request.data
            # lat_cal, lng_cal = offer__demand_coordinates_calculation(
            #     instance.__getitem__('number'),
            #     instance.__getitem__('street'),
            #     instance.__getitem__('postal_code'),
            #     instance.__getitem__('city')
            # )
            response = super(DemandViewSet, self).create(request, *args, **kwargs)
            return response
        except Exception as e:
            print(e)
            return

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(requester=profile)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        owner = False
        profile = Profile.objects.get(user=self.request.user)
        if instance.requester == profile:
            owner = True
        response = {"user_Is_Owner": owner}
        response.update(serializer.data)
        return Response(response)
