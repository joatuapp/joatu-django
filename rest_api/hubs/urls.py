from django.urls import include, re_path

from rest_framework.routers import DefaultRouter

from .views import HubViewSet


router = DefaultRouter()
router.register('hubs', HubViewSet)

urlpatterns = [
    re_path('^', include(router.urls)),
]