from django.urls import include, re_path

from rest_framework.routers import DefaultRouter

from .views import (
    ProjectViewSet,
    ProjectVolunteersViewSet,
    ProjectVolunteersRegistrationViewSet,
    ProjectAttendeesViewSet,
    ProjectAttendeesRegistrationViewSet,
    ProjectDiscussionViewSet,
    ProjectAnswerDiscussionViewSet,
)

router = DefaultRouter()

router.register('projects', ProjectViewSet)
router.register('projects_volunteers', ProjectVolunteersViewSet)
router.register('projects_volunteers_registration', ProjectVolunteersRegistrationViewSet)
router.register('projects_attendees', ProjectAttendeesViewSet)
router.register('projects_attendees_registration', ProjectAttendeesRegistrationViewSet)
router.register('projects_discussion', ProjectDiscussionViewSet)
router.register('projects_answer_discussion', ProjectAnswerDiscussionViewSet)

urlpatterns = [
    re_path('^', include(router.urls)),
]
