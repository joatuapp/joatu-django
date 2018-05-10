from django.urls import include, re_path

from rest_framework.routers import DefaultRouter

from .views import OperationsViewSet

router = DefaultRouter()
router.register('operations', OperationsViewSet)

urlpatterns = [
    re_path('^', include(router.urls)),
]
