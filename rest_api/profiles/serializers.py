from rest_framework import serializers
from profiles.models import Profile, ProfileHub, ProfileWallet
from ..projects.serializers import ProjectVolunteersRegistrationSerializer, ProjectAttendeesRegistrationSerializer


class CreateProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = (
            'display_name',
            'birth_date',
            'postal_code',
            'city',
            'country',
        )


class UpdateProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = (
            'user',
            'display_name',
            'birth_date',
            'postal_code',
            'city',
            'country',
        )
        read_only_fields = (
            'user',
        )


class ProfileHubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProfileHub
        fields = ('profile', 'hub',)


class ProfileWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileWallet
        fields = ('wallet',)


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    profile_offers = serializers.HyperlinkedRelatedField(many=True, view_name='offer-detail', read_only=True)
    profile_demands = serializers.HyperlinkedRelatedField(many=True, view_name='demand-detail', read_only=True)
    profile_projects = serializers.HyperlinkedRelatedField(many=True, view_name='project-detail', read_only=True)
    user_volunteer = ProjectVolunteersRegistrationSerializer(many=True)
    user_attendee = ProjectAttendeesRegistrationSerializer(many=True)
    profile_hub = ProfileHubSerializer(many=True, read_only=True)
    profile_wallet = ProfileWalletSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = (
            'url',
            'display_name',
            'city', 'country',
            'profile_wallet',
            'profile_offers',
            'profile_demands',
            'profile_projects',
            'user_volunteer',
            'user_attendee',
            'profile_hub',
        )
