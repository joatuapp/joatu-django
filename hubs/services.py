from django.db.models.signals import post_save

from utils.utils import coordinates_calculation
from profiles.models import ProfileGeolocation
from .models import HubGeolocation, Hub


def hub_created_or_updated(sender, update_fields, **kwargs):
    instance = kwargs['instance']
    lat_cal, lng_cal = coordinates_calculation(
        instance.number,
        instance.street,
        instance.postal_code,
        instance.city,
        instance.country
    )
    if kwargs['created']:
        HubGeolocation.objects.create(hub=instance, lat=lat_cal, lng=lng_cal)
    else:
        a = HubGeolocation.objects.filter(hub=instance)
        if a.exists():
            a.update(lat=lat_cal, lng=lng_cal)
        else:
            ProfileGeolocation.objects.create(hub=instance, lat=lat_cal, lng=lng_cal)


post_save.connect(hub_created_or_updated, sender=Hub)
