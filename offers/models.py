from django.db import models
from profiles.models import Profile, ProfileHub
from hubs.models import Hub, HubGeolocation
from django.db.models.signals import post_save
from offers.extras.coordinates import coordinates_calculation
from offers.extras.distance import distance_calculation


# Create your models here.
class Offer(models.Model):
    title = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=False)
    number = models.CharField(max_length=10, blank=True)
    street = models.CharField(max_length=200, blank=False)
    postal_code = models.CharField(max_length=10, blank=False)
    city = models.CharField(max_length=50, blank=False)
    seller=models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_offers')
    is_CAPS = models.BooleanField(default=True)
    is_BARTER = models.BooleanField(default=True)
    is_GIVE = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    price_CAPS = models.PositiveIntegerField(null=True, blank=True)
    price_barter = models.CharField(max_length = 200, null=True, blank=True)


def Offer_created_or_updated(sender,update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        lat_cal, lng_cal = coordinates_calculation(instance.number, instance.street, instance.postal_code, instance.city)
        Offer_Hub.objects.create(offer = instance, lat=lat_cal, lng= lng_cal)
        offer_geo =  Offer_Hub.objects.get(offer= instance)
        hubSelected = ProfileHub.objects.get(profile=instance.seller).hub
        hub_geo = HubGeolocation.objects.get(hub=hubSelected)
        distanceCalculation = distance_calculation(offer_geo,hub_geo)
        offer_geo.hub=hubSelected
        offer_geo.distance_km=distanceCalculation
        offer_geo.save()

post_save.connect(Offer_created_or_updated, sender=Offer)



    
class Offer_Hub(models.Model):
    offer = models.OneToOneField(Offer, on_delete=models.CASCADE)
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE, null= True, related_name='offers')
    distance_km = models.DecimalField(max_digits=10, decimal_places=3, blank=False, null=True)
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    # Lng = longinitude of the user
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)


