from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets
from accounts.models import User


class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
