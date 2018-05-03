from django.db import models
from django.db.models.signals import post_save
from hubs.extras.coordinates import coordinates_calculation


class Hub(models.Model):
    hub_name = models.CharField(max_length=20, blank=False, null=False)
    number = models.CharField(max_length=10, blank=True)
    street = models.CharField(max_length=200, blank=False)
    postal_code = models.CharField(max_length=10, blank=False)
    city = models.CharField(max_length=50, blank=False)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50, blank=False)

    ## description of the user
    description = models.CharField(max_length=1000)
    ## site web
    website = models.URLField(blank=True)
    ## Email
    email = models.EmailField(blank=True)
    def __str__(self):
        display =  self.hub_name + ' - '  + self.city
        return display

class HubGeolocation(models.Model):
    hub = models.OneToOneField(Hub, on_delete=models.CASCADE)
    # Lat = latitude of the user 
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    # Lng = longinitude of the user
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)

def Hub_created_or_updated(sender,update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        lat_cal, lng_cal = coordinates_calculation(instance.number, instance.street, instance.postal_code, instance.city, instance.country)
        HubGeolocation.objects.create(hub = instance, lat=lat_cal, lng= lng_cal)
    else:
        #if 'postal_code' in update_fields or 'city' in update_fields or 'country' in update_fields:
        lat_cal, lng_cal = coordinates_calculation(instance.number, instance.street, instance.postal_code, instance.city, instance.country)
        a = HubGeolocation.objects.filter(hub= instance)
        if a.exists():
            a.update(lat=lat_cal, lng= lng_cal)
        else:
            ProfileGeolocation.objects.create(hub= instance, lat=lat_cal, lng= lng_cal)


post_save.connect(Hub_created_or_updated, sender=Hub)


class HubDiscussion(models.Model):
    hub=models.ForeignKey(Hub, on_delete=models.CASCADE)
    text = models.CharField(max_length=1500, null=False, blank=False)
    profile = models.ForeignKey('profiles.Profile', on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)