from django.db import models


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
        display = self.hub_name + ' - ' + self.city
        return display


class HubGeolocation(models.Model):
    hub = models.OneToOneField(Hub, on_delete=models.CASCADE)
    # Lat = latitude of the user
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    # Lng = longinitude of the user
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)


class HubDiscussion(models.Model):
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE)
    text = models.CharField(max_length=1500, null=False, blank=False)
    profile = models.ForeignKey('profiles.Profile', on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
