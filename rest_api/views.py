from rest_framework import generics
from profiles.models import Profile, ProfileHub, ProfileGeolocation
from offers.models import *
from demands.models import *
from projects.models import Project
from hubs.models import Hub
from ledger.models import Operations
from .serializers import *
from rest_framework import permissions
from .permissions import *
from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView
from rest_framework import viewsets
from django_filters import rest_framework as filters
from rest_framework import mixins, status
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from rest_framework.response import Response
from .extras.coordinates import coordinates_calculation, offer__demand_coordinates_calculation


class OfferViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Offer.objects.all().order_by('-created')
    serializer_class = OfferSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          OfferIsOwnerOrReadOnly,)

    def create(self, request, *args, **kwargs):
        try:
            instance = request.data
            lat_cal, lng_cal = offer__demand_coordinates_calculation(instance.__getitem__('number'),
                                                                     instance.__getitem__('street'),
                                                                     instance.__getitem__('postal_code'),
                                                                     instance.__getitem__('city'))
            response = super(OfferViewSet, self).create(request, *args, **kwargs)
            return response
        except:
            print('error')
            return

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(seller=profile)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        owner = False
        profile = Profile.objects.get(user=self.request.user)
        if instance.seller == profile:  ## check if the user doing the request is the owner of the offer
            owner = True
        response = {"user_Is_Owner": owner}
        response.update(serializer.data)
        return Response(response)


class DemandViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Demand.objects.all().order_by('title')
    serializer_class = DemandSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          DemandIsOwnerOrReadOnly,)

    def create(self, request, *args, **kwargs):
        try:
            instance = request.data
            lat_cal, lng_cal = offer__demand_coordinates_calculation(instance.__getitem__('number'),
                                                                     instance.__getitem__('street'),
                                                                     instance.__getitem__('postal_code'),
                                                                     instance.__getitem__('city'))
            response = super(DemandViewSet, self).create(request, *args, **kwargs)
            return response
        except:
            print('error')
            return

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(requester=profile)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        owner = False
        profile = Profile.objects.get(user=self.request.user)
        if instance.requester == profile:  ## check if the user doing the request is the owner of the demand
            owner = True
        response = {"user_Is_Owner": owner}
        response.update(serializer.data)
        return Response(response)


class ProjectViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project.objects.all().order_by('name')
    serializer_class = ProjectSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('organizer', 'name')
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
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
        if instance.organizer == profile:  ## check if the user doing the request is the owner of the offer
            owner = True
        response = {"user_Is_Owner": owner}
        response.update(serializer.data)
        return Response(response)


class ProjectVolunteersViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project_Volunteers.objects.all().order_by('id')
    serializer_class = ProjectVolunteersSerializer


class ProjectVolunteersRegistrationViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project_Volunteers_Registration.objects.all().order_by('id')
    serializer_class = ProjectVolunteersRegistrationSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            project_volunteers = Project_Volunteers.objects.get(pk=instance.project_volunteers_ref)
            self.perform_destroy(instance)
            count = Project_Volunteers_Registration.objects.filter(project_volunteers=project_volunteers).count()
            project_volunteers.registered = count
            project_volunteers.save()

        except:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectAttendeesViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project_Attendees.objects.all().order_by('id')
    serializer_class = ProjectAttendeesSerializer

    def create(self, request, *args, **kwargs):
        response = super(ProjectAttendeesViewSet, self).create(request, *args, **kwargs)
        return response


class ProjectAttendeesRegistrationViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project_Attendees_Registration.objects.all().order_by('id')
    serializer_class = ProjectAttendeesRegistrationSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            project_attendees = Project_Attendees.objects.get(pk=instance.project_attendees_ref)
            self.perform_destroy(instance)
            count = Project_Attendees_Registration.objects.filter(project_attendees=project_attendees).count()
            project_attendees.registered = count
            project_attendees.save()

        except:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectDiscussionViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project_Discussion.objects.all().order_by('id')
    serializer_class = ProjectDiscussionSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)


class ProjectAnswerDiscussionViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Project_Answer_Discussion.objects.all().order_by('id')
    serializer_class = ProjectAnswerDiscussionSerializer

    def create(self, request, *args, **kwargs):
        response = super(ProjectAnswerDiscussionViewSet, self).create(request, *args, **kwargs)
        return response

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(profile=profile)


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Profile.objects.all().order_by('id')
    serializer_class = ProfileSerializer


class HubViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Hub.objects.all()
    serializer_class = HubSerializer


class OperationsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = Operations.objects.all().order_by('id')
    serializer_class = OperationsSerializer


class CreateProfileView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = CreateProfileSerializers

    def create(self, request, *args, **kwargs):
        try:
            instance = request.data
            response = super(CreateProfileView, self).create(request, *args, **kwargs)
            lat_cal, lng_cal = coordinates_calculation('', instance.__getitem__('postal_code'),
                                                       instance.__getitem__('city'), instance.__getitem__('country'))
            profile = Profile.objects.get(user=self.request.user)
            ProfileGeolocation.objects.create(profile=profile, lat=lat_cal, lng=lng_cal)
            return redirect('homepage')
        except:
            print('error')
            return

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EditProfileView(RetrieveUpdateAPIView):
    serializer_class = UpdateProfileSerializers
    queryset = Profile.objects.all()

    def get_queryset(self):
        user = self.request.user
        qs = Profile.objects.all()
        userprofile = qs.filter(user=user)
        return userprofile

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, user=self.request.user)
        return obj

    def update(self, request, *args, **kwargs):
        try:
            instance = request.data
            print(instance)
            lat_cal, lng_cal = coordinates_calculation('', instance.__getitem__('postal_code'),
                                                       instance.__getitem__('city'), instance.__getitem__('country'))
            response = super(EditProfileView, self).update(request, *args, **kwargs)
            profile = Profile.objects.get(user=self.request.user)
            geo = ProfileGeolocation.objects.get(profile=profile)
            geo.lat = lat_cal
            geo.lng = lng_cal
            geo.save()
            return response
        except:
            return

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
