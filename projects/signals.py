from django.db.models.signals import post_save
from django.db.models import ObjectDoesNotExist

from .models import Project, ProjectStatus, ProjectIsValidated, ProjectHub
from profiles.models import ProfileHub
from hubs.models import HubGeolocation
from utils.utils import coordinates_calculation, distance_calculation


def project_created_or_updated(sender, update_fields, **kwargs):
    instance = kwargs['instance']
    if kwargs['created']:
        ProjectStatus.objects.create(project=instance)
        ProjectIsValidated.objects.create(project=instance)
        lat_cal, lng_cal = coordinates_calculation(
            instance.number,
            instance.street,
            instance.postal_code,
            instance.city
        )
        ProjectHub.objects.create(project=instance, lat=lat_cal, lng=lng_cal)
        try:
            project_geo = ProjectHub.objects.get(project=instance)
            hub_selected = ProfileHub.objects.get(profile=instance.organizer).hub
            hub_geo = HubGeolocation.objects.get(hub=hub_selected)
            distance = distance_calculation(project_geo, hub_geo)
            project_geo.hub = hub_selected
            project_geo.distance_km = distance
            project_geo.save()
        except ObjectDoesNotExist:
            pass


post_save.connect(project_created_or_updated, sender=Project)
