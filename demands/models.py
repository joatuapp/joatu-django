from django.db import models
from profiles.models import Profile, ProfileHub
from hubs.models import Hub, HubGeolocation
from django.db.models.signals import post_save
from demands.extras.coordinates import coordinates_calculation
from demands.extras.distance import distance_calculation

# Create your models here.
class Demand(models.Model):
    title = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=False)
    number = models.CharField(max_length=10, blank=True)
    street = models.CharField(max_length=200, blank=False)
    postal_code = models.CharField(max_length=10, blank=False)
    city = models.CharField(max_length=50, blank=False)
    requester =models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_demands')
    is_CAPS = models.BooleanField(default=True)
    is_BARTER = models.BooleanField(default=True)
    is_GIVE = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    price_CAPS = models.PositiveIntegerField(null=True)
    price_barter = models.CharField(max_length = 200, null=True)


def Demand_created_or_updated(sender,update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        lat_cal, lng_cal = coordinates_calculation(instance.number, instance.street, instance.postal_code, instance.city)
        Demand_Hub.objects.create(demand = instance, lat=lat_cal, lng= lng_cal)
        demand_geo =  Demand_Hub.objects.get(demand = instance)
        hubSelected = ProfileHub.objects.get(profile=instance.requester).hub
        hub_geo = HubGeolocation.objects.get(hub=hubSelected)
        distanceCalculation = distance_calculation(demand_geo,hub_geo)
        demand_geo.hub=hubSelected
        demand_geo.distance_km=distanceCalculation
        demand_geo.save()

post_save.connect(Demand_created_or_updated, sender=Demand)




class Demand_Hub(models.Model):
    demand = models.OneToOneField(Demand, on_delete=models.CASCADE)
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE, null= True, related_name='demands')
    distance_km = models.DecimalField(max_digits=10, decimal_places=3, blank=False, null=True)
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    # Lng = longinitude of the user
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)