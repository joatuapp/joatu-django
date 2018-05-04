from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.generics import ListAPIView

from ledger.models import Operations
from .serializers import OperationsSerializer


class OperationsViewSet(ReadOnlyModelViewSet):
    queryset = Operations.objects.all().order_by('id')
    serializer_class = OperationsSerializer


class ListGlobalOperationsView(ListAPIView):
    queryset = Operations.objects.all().order_by('start')
    serializer_class = OperationsSerializer

    def get_queryset(self):
        operations = Operations.objects.all()
        return operations


class ListUserOperationsView(ListAPIView):
    queryset = Operations.objects.all().order_by('start')
    serializer_class = OperationsSerializer

    def get_queryset(self):
        user = Profile.objects.get(user=self.request.user)
        operations = Operations.objects.filter(profile=user)
        return operations
