from django.contrib import admin
from hubs.models import Hub, HubGeolocation
# Register your models here.
admin.site.register(Hub)

admin.site.register(HubGeolocation)