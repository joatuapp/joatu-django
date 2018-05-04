from django.urls import path
from django.views.generic import TemplateView
app_name = 'demands'
urlpatterns = [
    path('create/', TemplateView.as_view(template_name="create_demand.html"), name='create'),
    path('update/', TemplateView.as_view(template_name="update_demand.html"), name='update'),
    path('detail/<int:pk>/', TemplateView.as_view(template_name="detail_demand.html"), name='detail'),
    path('list/', TemplateView.as_view(template_name="list_demands.html"), name='list'),
]