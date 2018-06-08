from django.shortcuts import get_object_or_404, redirect, reverse

from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView
from rest_framework.viewsets import ReadOnlyModelViewSet

from profiles.models import Profile, ProfileGeolocation
from accounts.models import User
from .serializers import CreateProfileSerializers, UpdateProfileSerializers, ProfileSerializer, UserSerializer
from utils.utils import coordinates_calculation

from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework.authtoken.models import Token


@api_view(["POST"])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")

    user = authenticate(email=email, password=password)
    if not user:
        return Response({"error": "Login failed"}, status=HTTP_401_UNAUTHORIZED)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key})


@api_view(["POST"])
def register(request):
    email = request.data.get("email")
    password = 'test@123'

    user = User.objects.get(email=email)
    print(user)
    if not user:
        User.objects.create_user(email, password)
        user = authenticate(email=email, password=password)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key})


class CreateUser(CreateAPIView):
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        instance = request.data
        kwargs.setdefault('is_staff', False)
        kwargs.setdefault('is_superuser', False)
        User.objects.create_user(instance.__getitem__('email'), instance.__getitem__('password'), kwargs)
        return Response({'redirect': reverse('homepage')})


class CreateProfileView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = CreateProfileSerializers

    def create(self, request, *args, **kwargs):
        try:
            instance = request.data
            super(CreateProfileView, self).create(request, *args, **kwargs)
            lat_cal, lng_cal = coordinates_calculation(
                '',
                instance.__getitem__('postal_code'),
                instance.__getitem__('city'),
                instance.__getitem__('country')
            )
            profile = Profile.objects.get(user=self.request.user)
            ProfileGeolocation.objects.create(profile=profile, lat=lat_cal, lng=lng_cal)
            return Response({'redirect': reverse('homepage')})
        except Exception as e:
            err = e.__dict__.get('detail')
            if not err:
                return Response({'redirect': reverse('homepage')})
            err = {k: ' '.join(err[k]) for k in err.keys()}
            err.update({'err': True})
            return Response(err)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EditProfileView(RetrieveUpdateAPIView):
    serializer_class = UpdateProfileSerializers
    queryset = Profile.objects.all()

    def get_queryset(self):
        user = self.request.user
        qs = Profile.objects.all()
        user_profile = qs.filter(user=user)
        return user_profile

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, user=self.request.user)
        return obj

    def update(self, request, *args, **kwargs):
        try:
            instance = request.data
            lat_cal, lng_cal = coordinates_calculation(
                number='',
                street=instance.get('street', ''),
                postal_code=instance.get('postal_code', ''),
                city=instance.get('city', ''),
                country=instance.get('country', '')
            )
            response = super(EditProfileView, self).update(request, *args, **kwargs)
            if lat_cal == -1 and lng_cal == -1:
                return response
            profile = Profile.objects.get(user=self.request.user)
            geo = ProfileGeolocation.objects.get(profile=profile)
            geo.lat = lat_cal
            geo.lng = lng_cal
            geo.save()
            return response
        except Exception as e:
            print(e)
            return

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class ProfileViewSet(ReadOnlyModelViewSet):
    queryset = Profile.objects.all().order_by('id')
    serializer_class = ProfileSerializer
