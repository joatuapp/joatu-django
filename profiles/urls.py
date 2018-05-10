from django.urls import path
from django.views.generic import TemplateView

app_name = 'profiles'

urlpatterns = [
    path('', TemplateView.as_view(template_name="profiles/index.html"), name='index'),
    path('create/', TemplateView.as_view(template_name="create_profile.html"), name='create'),
    path('update/', TemplateView.as_view(template_name="edit_profile.html"), name='update'),
]
