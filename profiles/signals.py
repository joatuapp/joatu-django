from math import pi, acos, cos, sin
from decimal import Decimal

from django.db.models.signals import post_save

from hubs.models import Hub
from .models import Profile, ProfileHub, ProfileGeolocation, ProfileWallet


def _distance_calculation(user_lat, user_lng, hubs):
    control = False
    distance_km = None
    hub_selected = None
    for i in hubs:
        user_lat_conv = user_lat * Decimal(pi) / 180
        user_lng_conv = user_lng * Decimal(pi) / 180
        hub_lat_conv = i.hubgeolocation.lat * Decimal(pi) / 180
        hub_lng_conv = i.hubgeolocation.lng * Decimal(pi) / 180
        r = 6371
        d = r * acos(
            cos(user_lat_conv) * cos(hub_lat_conv) * cos(hub_lng_conv - user_lng_conv) +
            sin(user_lat_conv) * sin(hub_lat_conv)
        )
        if control is False or d < distance_km:
            distance_km = round(Decimal(d), 3)
            hub_selected = i
            control = True
    return hub_selected, distance_km


def profile_created(sender, update_fields, **kwargs):

    instance = kwargs['instance']
    if kwargs['created']:
        ProfileWallet.objects.create(profile=instance)


post_save.connect(profile_created, sender=Profile)


def profile_geolocation_created_or_updated(sender, update_fields, **kwargs):
    instance = kwargs['instance']
    user = Profile.objects.get(pk=instance.profile.pk)
    hub_list = Hub.objects.filter(city__unaccent__icontains=user.city)
    if kwargs['created']:
        hub_result, dist = _distance_calculation(instance.lat, instance.lng, hub_list)
        ProfileHub.objects.create(profile=instance.profile, hub=hub_result, distance_km=dist)
    else:
        # if 'postal_code' in update_fields or 'city' in update_fields or 'country' in update_fields:
        hub_result, dist = _distance_calculation(instance.lat, instance.lng, hub_list)
        a = ProfileHub.objects.filter(profile=instance.profile.pk)
        if a.exists():
            a.update(hub=hub_result, distance_km=dist)
        else:
            ProfileHub.objects.create(profile=instance.profile, hub=hub_result, distance_km=dist)


post_save.connect(profile_geolocation_created_or_updated, sender=ProfileGeolocation)
