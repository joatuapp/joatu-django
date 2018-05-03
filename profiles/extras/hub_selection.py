from math import pi, acos, cos, sin
from hubs.models import HubGeolocation
from decimal import Decimal

def distance_calculation(user_lat, user_lng, hubs): 
    control = False
    distance_km= None
    for i in hubs:
        user_lat_conv = user_lat * Decimal(pi) / 180
        user_lng_conv = user_lng * Decimal(pi) / 180
        hub_lat_conv = i.hubgeolocation.lat * Decimal(pi) /180
        hub_lng_conv = i.hubgeolocation.lng * Decimal(pi) / 180
        R = 6371
        d = R * acos(cos(user_lat_conv)*cos(hub_lat_conv)*cos(hub_lng_conv-user_lng_conv)+sin(user_lat_conv)*sin(hub_lat_conv))
        if control==False or d < distance_km:
            distance_km = round(Decimal(d),3)
            hub_selected = i
            control = True
    return hub_selected, distance_km