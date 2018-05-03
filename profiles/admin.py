from django.contrib import admin
from profiles.models import Profile, ProfileWallet, ProfileGeolocation, ProfileHub

# Register your models here.
admin.site.register(Profile)
admin.site.register(ProfileWallet)
admin.site.register(ProfileGeolocation)
admin.site.register(ProfileHub)