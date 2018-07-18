from django.urls import include, re_path

from rest_framework.routers import DefaultRouter

from .views import (
    UserViewSet
)

router = DefaultRouter()

router.register('user', UserViewSet)
urlpatterns = [
    re_path('^', include(router.urls)),
]
