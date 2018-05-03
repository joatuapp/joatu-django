"""joatu URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView, RedirectView





urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('accounts.urls', namespace='accounts')),
    path('rest_api/', include('rest_api.urls')),
    path('', TemplateView.as_view(template_name="homepage.html"), name='homepage'),
    path('create_profile/',TemplateView.as_view(template_name="profiles/create_profile.html"), name='create_profile'),
    path('edit_profile/',TemplateView.as_view(template_name="settings/edit_profile.html"), name='edit_profile'),
    path('settings/',TemplateView.as_view(template_name="settings/settings.html"), name='settings'),
    path('create_project/',TemplateView.as_view(template_name="create_page/create_project.html"), name='create_project'),
    path('create_offer/',TemplateView.as_view(template_name="create_page/create_offer.html"), name='create_offer'),
    path('create_demand/',TemplateView.as_view(template_name="create_page/create_demand.html"), name='create_demand'),
    path('update_project/',TemplateView.as_view(template_name="update_page/update_project.html"), name='update_project'),
    path('update_offer/',TemplateView.as_view(template_name="update_page/update_offer.html"), name='update_offer'),
    path('update_demand/',TemplateView.as_view(template_name="update_page/update_demand.html"), name='update_demand'),
    path('detail_project/',TemplateView.as_view(template_name="detail_page/detail_project.html"), name='detail_project_template'),
    path('detail_project/<int:pk>/',TemplateView.as_view(template_name="detail_page/detail_project.html"), name='detail_project'),
    path('detail_offer/<int:pk>/',TemplateView.as_view(template_name="detail_page/detail_offer.html"), name='detail_offer'),
    path('detail_demand/<int:pk>/',TemplateView.as_view(template_name="detail_page/detail_demand.html"), name='detail_demand'),
    path('list_projects/',TemplateView.as_view(template_name="list_page/list_projects.html"), name='list_projects'),
    path('list_offers/',TemplateView.as_view(template_name="list_page/list_offers.html"), name='list_offers'),
    path('list_demands/',TemplateView.as_view(template_name="list_page/list_demands.html"), name='list_demands'),

]