from django.urls import path
from . import views
from accounts.views import login_view
from django.contrib.auth.views import (
    login, 
    logout,
    password_reset,
    password_reset_done,
    password_reset_confirm,
    password_reset_complete,
    )

app_name = 'accounts'

urlpatterns=[
    ## le template_name permet d'utiliser son propre template sur des views prédifini)
    path('index/', views.index, name="index"),
    path('login/', login_view, name = 'login' ),
    path('logout/', logout, name="logout" ),
    path('edit/', views.edit_account, name="edit_account"),
    path('change_password/', views.change_password, name="change_password"),
    path('reset_password/', password_reset,{'template_name':'accounts/reset_password.html', 'post_reset_redirect':'accounts:password_reset_done','email_template_name':'accounts/reset_password_email.html'}, name="reset_password"),
    path('reset_password/done/', password_reset_done,{'template_name':'accounts/reset_password_done.html'}, name="password_reset_done"),
    path('reset_password/confirm/<uidb64>/<token>/', password_reset_confirm,{'post_reset_redirect':'accounts:password_reset_complete', 'template_name':'accounts/reset_password_confirm.html'}, name="password_reset_confirm"),
    path('reset_password/complete', password_reset_complete, {'template_name':'accounts/reset_password_complete.html'} ,name="password_reset_complete"),
]