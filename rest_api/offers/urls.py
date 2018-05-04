from django.urls import include, re_path

from rest_framework.routers import DefaultRouter

from .views import OfferViewSet

router = DefaultRouter()
router.register('offers', OfferViewSet)

urlpatterns = [
    re_path('^', include(router.urls)),
]