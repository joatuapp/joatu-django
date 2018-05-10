from django.urls import include, re_path

from rest_framework.routers import DefaultRouter

from .views import DemandViewSet

router = DefaultRouter()

router.register('demands', DemandViewSet)

urlpatterns = [
    re_path('^', include(router.urls)),
]
