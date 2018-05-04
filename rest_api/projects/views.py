from django_filters import rest_framework as filters

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.status import HTTP_204_NO_CONTENT

from .serializers import (
    ProjectSerializer,
    ProjectVolunteersSerializer,
    ProjectVolunteersRegistrationSerializer,
    ProjectAttendeesSerializer,
    ProjectAttendeesRegistrationSerializer,
    ProjectDiscussionSerializer,
    ProjectAnswerDiscussionSerializer,
)
from ..permissions import ProjectIsOwnerOrReadOnly
from profiles.models import Profile
from projects.models import (
    Project,
    ProjectVolunteers,
    ProjectVolunteersRegistration,
    ProjectAttendees,
    ProjectAttendeesRegistration,
    ProjectDiscussion,
    ProjectAnswerDiscussion,
)


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all().order_by('name')
    serializer_class = ProjectSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('organizer', 'name')
    permission_classes = (IsAuthenticatedOrReadOnly,
                          ProjectIsOwnerOrReadOnly,)

    def get_context_data(self, *args, **kwargs):
        ctx = super(ProjectViewSet, self).get_context_data(*args, **kwargs)
        profile = Profile.objects.get(user=self.request.user)
        ctx["user_id"] = profile.pk
        print(ctx)
        return ctx

    def create(self, request, *args, **kwargs):
        response = super(ProjectViewSet, self).create(request, *args, **kwargs)
        return response

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(organizer=profile)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        owner = False
        profile = Profile.objects.get(user=self.request.user)
        if instance.organizer == profile:
            owner = True
        response = {"user_Is_Owner": owner}
        response.update(serializer.data)
        return Response(response)


class ProjectVolunteersViewSet(ModelViewSet):
    queryset = ProjectVolunteers.objects.all().order_by('id')
    serializer_class = ProjectVolunteersSerializer


class ProjectVolunteersRegistrationViewSet(ModelViewSet):
    queryset = ProjectVolunteersRegistration.objects.all().order_by('id')
    serializer_class = ProjectVolunteersRegistrationSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            project_volunteers = ProjectVolunteers.objects.get(pk=instance.project_volunteers_ref)
            self.perform_destroy(instance)
            count = ProjectVolunteersRegistration.objects.filter(project_volunteers=project_volunteers).count()
            project_volunteers.registered = count
            project_volunteers.save()

        except Exception as e:
            print(e)
            pass
        return Response(status=HTTP_204_NO_CONTENT)


class ProjectAttendeesViewSet(ModelViewSet):
    queryset = ProjectAttendees.objects.all().order_by('id')
    serializer_class = ProjectAttendeesSerializer

    def create(self, request, *args, **kwargs):
        response = super(ProjectAttendeesViewSet, self).create(request, *args, **kwargs)
        return response


class ProjectAttendeesRegistrationViewSet(ModelViewSet):
    queryset = ProjectAttendeesRegistration.objects.all().order_by('id')
    serializer_class = ProjectAttendeesRegistrationSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            project_attendees = ProjectAttendees.objects.get(pk=instance.project_attendees_ref)
            self.perform_destroy(instance)
            count = ProjectAttendeesRegistration.objects.filter(project_attendees=project_attendees).count()
            project_attendees.registered = count
            project_attendees.save()
        except Exception as e:
            print(e)
            pass
        return Response(status=HTTP_204_NO_CONTENT)


class ProjectDiscussionViewSet(ModelViewSet):
    queryset = ProjectDiscussion.objects.all().order_by('id')
    serializer_class = ProjectDiscussionSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)


class ProjectAnswerDiscussionViewSet(ModelViewSet):
    queryset = ProjectAnswerDiscussion.objects.all().order_by('id')
    serializer_class = ProjectAnswerDiscussionSerializer

    def create(self, request, *args, **kwargs):
        response = super(ProjectAnswerDiscussionViewSet, self).create(request, *args, **kwargs)
        return response

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)
