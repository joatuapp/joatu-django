from django.urls import path
from django.views.generic import TemplateView


app_name = 'projects'
urlpatterns = [
    path('create/', TemplateView.as_view(template_name="create_project.html"), name='create'),
    path('update/', TemplateView.as_view(template_name="update_project.html"), name='update'),
    path('detail/', TemplateView.as_view(template_name="detail_project.html"), name='detail-template'),
    path('detail/<int:pk>/', TemplateView.as_view(template_name="detail_project.html"), name='detail'),
    path('list/', TemplateView.as_view(template_name="list_projects.html"), name='list'),
]
