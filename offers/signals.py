from django.db.models.signals import post_save

from utils.utils import coordinates_calculation, distance_calculation
from profiles.models import ProfileHub
from hubs.models import HubGeolocation
from .models import OfferHub, Offer


def offer_created_or_updated(sender, update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        lat_cal, lng_cal = coordinates_calculation(instance.number, instance.street, instance.postal_code,
                                                   instance.city)
        OfferHub.objects.create(offer=instance, lat=lat_cal, lng=lng_cal)
        offer_geo = OfferHub.objects.get(offer=instance)
        hub_selected = ProfileHub.objects.get(profile=instance.seller).hub
        hub_geo = HubGeolocation.objects.get(hub=hub_selected)
        distance = distance_calculation(offer_geo, hub_geo)
        offer_geo.hub = hub_selected
        offer_geo.distance_km = distance
        offer_geo.save()


post_save.connect(offer_created_or_updated, sender=Offer)
