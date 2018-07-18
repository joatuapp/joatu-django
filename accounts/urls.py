from django.urls import path
from . import views
from django.views.generic import TemplateView

from django.contrib.auth.views import (
    login,
    logout,
    password_reset, 
    password_reset_confirm
)

app_name = 'accounts'

urlpatterns = [
    path('index/', TemplateView.as_view(template_name="accounts/index.html")),
    path('reset_password/', TemplateView.as_view(template_name="accounts/reset_password.html"), name="reset_start"),
    path('reset_password/confirm/<uidb64>/<token>/', TemplateView.as_view(template_name="accounts/reset_password_confirm.html"), name="reset_confirm"),
    path('reset_password/success/', TemplateView.as_view(template_name="accounts/reset_success.html"), name="reset_success"),
    path('logout/', logout, name="logout"),
]
