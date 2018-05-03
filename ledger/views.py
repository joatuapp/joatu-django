from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView
from ledger.models import Operations
from profiles.models import Profile
from ledger.serializers import OperationsSerializers
# Create your views here.
class ListGlobalOperationsView(ListAPIView):
    queryset=Operations.objects.all().order_by('start')
    serializer_class=OperationsSerializers

    def get_queryset(self):
        operations = Operations.objects.all()
        return operations

class ListUserOperationsView(ListAPIView):
    queryset=Operations.objects.all().order_by('start')
    serializer_class=OperationsSerializers

    def get_queryset(self):
        user = Profile.objects.get(user= self.request.user)
        operations = Operations.objects.filter(profile=user)
        return operations

