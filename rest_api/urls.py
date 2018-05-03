
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_api import views
from rest_framework.schemas import get_schema_view

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register('offers', views.OfferViewSet)
router.register('profiles', views.ProfileViewSet)
router.register('demands', views.DemandViewSet)
router.register('projects', views.ProjectViewSet)
router.register('projects_volunteers', views.ProjectVolunteersViewSet)
router.register('projects_volunteers_registration', views.ProjectVolunteersRegistrationViewSet)
router.register('projects_attendees', views.ProjectAttendeesViewSet)
router.register('projects_attendees_registration', views.ProjectAttendeesRegistrationViewSet)
router.register('projects_discussion', views.ProjectDiscussionViewSet)
router.register('projects_answer_discussion', views.ProjectAnswerDiscussionViewSet)
router.register('hubs', views.HubViewSet)
router.register('operations', views.OperationsViewSet)

schema_view = get_schema_view(title='Pastebin API')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('create_profile/', views.CreateProfileView.as_view()),
    path('update_profile/', views.EditProfileView.as_view()),
    path('schema/', schema_view),
]