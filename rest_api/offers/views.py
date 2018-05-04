from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from offers.models import Offer
from profiles.models import Profile
from .serializers import OfferSerializer
from ..permissions import OfferIsOwnerOrReadOnly


class OfferViewSet(ModelViewSet):

    queryset = Offer.objects.all().order_by('-created')
    serializer_class = OfferSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, OfferIsOwnerOrReadOnly,)

    def create(self, request, *args, **kwargs):
        try:
            # instance = request.data
            # lat_cal, lng_cal = offer__demand_coordinates_calculation(
            #     instance.__getitem__('number'),
            #     instance.__getitem__('street'),
            #     instance.__getitem__('postal_code'),
            #     instance.__getitem__('city')
            # )
            response = super(OfferViewSet, self).create(request, *args, **kwargs)
            return response
        except Exception as e:
            print(e)
            return

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(seller=profile)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        owner = False
        profile = Profile.objects.get(user=self.request.user)
        if instance.seller == profile:
            owner = True
        response = {"user_Is_Owner": owner}
        response.update(serializer.data)
        return Response(response)
