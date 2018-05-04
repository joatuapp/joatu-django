from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view


router = DefaultRouter()

schema_view = get_schema_view(title='Pastebin API')

urlpatterns = [
    path('schema/', schema_view),
    re_path('^', include('rest_api.demands.urls')),
    re_path('^', include('rest_api.hubs.urls')),
    re_path('^', include('rest_api.ledger.urls')),
    re_path('^', include('rest_api.offers.urls')),
    re_path('^', include('rest_api.profiles.urls')),
    re_path('^', include('rest_api.projects.urls')),
]
