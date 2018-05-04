from django.db.models.signals import post_save

from .models import Demand, DemandHub
from profiles.models import ProfileHub
from hubs.models import HubGeolocation
from utils.utils import coordinates_calculation, distance_calculation


def demand_created_or_updated(sender, update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        lat_cal, lng_cal = coordinates_calculation(
            instance.number,
            instance.street,
            instance.postal_code,
            instance.city
        )
        DemandHub.objects.create(demand=instance, lat=lat_cal, lng=lng_cal)
        demand_geo = DemandHub.objects.get(demand=instance)
        hub_selected = ProfileHub.objects.get(profile=instance.requester).hub
        hub_geo = HubGeolocation.objects.get(hub=hub_selected)
        distance = distance_calculation(demand_geo, hub_geo)
        demand_geo.hub = hub_selected
        demand_geo.distance_km = distance
        demand_geo.save()


post_save.connect(demand_created_or_updated, sender=Demand)
