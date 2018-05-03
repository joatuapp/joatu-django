from django.db import models
from accounts.models import User
from hubs.models import Hub
from profiles.extras.coordinates import coordinates_calculation
from profiles.extras.hub_selection import distance_calculation

from django.db.models.signals import post_save
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=20, blank=False, null=False)
    birth_date = models.DateField(blank=False, null=False)
    street = models.CharField(max_length=50, blank=True)
    postal_code = models.CharField(max_length=20, blank=False, null=False)
    city=models.CharField(max_length=50, blank=False, null=False)
    country = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        display =  self.display_name + ' - '  + self.user.email
        return display


def Profile_created(sender,update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        ProfileWallet.objects.create(profile=instance)

post_save.connect(Profile_created, sender=Profile)


class ProfileGeolocation(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    # Lat = latitude of the user 
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    # Lng = longinitude of the user
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)

def ProfileGeolocation_created_or_updated(sender,update_fields, **kwargs):
    print('1')
    instance = kwargs['instance']
    user= Profile.objects.get(pk=instance.profile.pk)
    hubList=Hub.objects.filter(city__unaccent__icontains=user.city)
    if kwargs['created']:
        hub_result, dist= distance_calculation(instance.lat, instance.lng, hubList)
        ProfileHub.objects.create(profile = instance.profile, hub= hub_result, distance_km = dist)
    else:
        #if 'postal_code' in update_fields or 'city' in update_fields or 'country' in update_fields:
        hub_result, dist= distance_calculation(instance.lat, instance.lng, hubList)       
        a = ProfileHub.objects.filter(profile= instance.profile.pk)
        if a.exists():
            a.update(hub=hub_result, distance_km = dist)
        else:
            ProfileHub.objects.create(profile = instance.profile, hub= hub_result, distance_km = dist)

post_save.connect(ProfileGeolocation_created_or_updated, sender=ProfileGeolocation)


class ProfileHub(models.Model):
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE, null= True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, null = True, related_name='profile_hub' )
    distance_km = models.DecimalField(max_digits=10, decimal_places=3, blank=False, null=True)

class ProfileWallet(models.Model):
    profile=models.OneToOneField(Profile, on_delete=models.SET_NULL, null=True, related_name='profile_wallet')
    wallet = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)


