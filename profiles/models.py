from django.db import models
from accounts.models import User
from hubs.models import Hub


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=20, blank=False, null=False)
    birth_date = models.DateField(blank=True, null=True)
    street = models.CharField(max_length=50, blank=True)
    postal_code = models.CharField(max_length=20, blank=False, null=False)
    city = models.CharField(max_length=50, blank=False, null=False)
    country = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        display = self.display_name + ' - ' + self.user.email
        return display


class ProfileGeolocation(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)


class ProfileHub(models.Model):
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE, null=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True, related_name='profile_hub')
    distance_km = models.DecimalField(max_digits=10, decimal_places=3, blank=False, null=True)


class ProfileWallet(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.SET_NULL, null=True, related_name='profile_wallet')
    wallet = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
