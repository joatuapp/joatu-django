from math import pi, acos, cos, sin
from decimal import Decimal

import requests
import urllib.parse

from django.conf import settings


def coordinates_calculation(number, street, postal_code, city, country=''):
    api_key = settings.GOOGLE_API_KEY
    main_api = "https://maps.googleapis.com/maps/api/geocode/json?"
    address = number + ' ' + street + ' ' + postal_code + ' ' + city + ' ' + country
    address = address.strip()
    url = main_api + urllib.parse.urlencode({'address': address}) + '&key=' + api_key
    json_data = requests.get(url).json()
    if not json_data['results']:
        return -1, -1
    lat = Decimal(json_data['results'][0]['geometry']['location']['lat'])
    lng = Decimal(json_data['results'][0]['geometry']['location']['lng'])
    return lat, lng


def distance_calculation(offer, hub):
    project_lat_conv = offer.lat * Decimal(pi) / 180
    project_lng_conv = offer.lng * Decimal(pi) / 180
    hub_lat_conv = hub.lat * Decimal(pi) / 180
    hub_lng_conv = hub.lng * Decimal(pi) / 180
    r = 6371
    d = r * acos(
        cos(project_lat_conv) * cos(hub_lat_conv) * cos(hub_lng_conv - project_lng_conv) +
        sin(project_lat_conv) * sin(hub_lat_conv)
    )
    distance_km = round(Decimal(d), 3)
    return distance_km
