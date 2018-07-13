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
from django.urls import path, re_path, include
from django.views.generic import TemplateView, RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api-auth/', include('rest_framework.urls')),

    re_path(r'^demands/', include('demands.urls', namespace='demands')),
    re_path(r'^profiles/', include('profiles.urls', namespace='profiles')),
    re_path(r'^projects/', include('projects.urls', namespace='projects')),
    re_path(r'^offers/', include('offers.urls', namespace='offers')),

    path('accounts/', include('accounts.urls', namespace='accounts')),
    re_path(r'^api/', include('rest_api.urls')),
    path('', RedirectView.as_view(url='/projects/list/', permanent=False), name='homepage'), #redirect homepage to list projects
    #path('', TemplateView.as_view(template_name="homepage.html"), name='homepage'),
    path('settings/', TemplateView.as_view(template_name="settings/settings.html"), name='settings'),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
