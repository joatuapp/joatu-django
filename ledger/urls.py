from django.urls import path
from . import views
from ledger.views import ListGlobalOperationsView,ListUserOperationsView



app_name = 'ledger'

urlpatterns=[
    path('operations_global/', ListGlobalOperationsView.as_view(), name='globaloperations'),
    path('operations_user/', ListUserOperationsView.as_view(), name='useroperations'),
]