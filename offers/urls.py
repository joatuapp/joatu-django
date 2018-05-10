from django.urls import path
from django.views.generic import TemplateView

app_name = 'offers'
urlpatterns = [
    path('update/', TemplateView.as_view(template_name="update_offer.html"), name='update'),
    path('list/', TemplateView.as_view(template_name="list_offers.html"), name='list'),
    path('create/', TemplateView.as_view(template_name="create_offer.html"), name='create'),
    path('detail/<int:pk>/', TemplateView.as_view(template_name="detail_offer.html"), name='detail'),
]
