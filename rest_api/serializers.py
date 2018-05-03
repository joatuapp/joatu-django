from rest_framework import serializers
from profiles.models import Profile, ProfileHub, ProfileWallet
from offers.models import Offer, Offer_Hub
from demands.models import Demand, Demand_Hub
from projects.models import *
from ledger.models import Operations
from hubs.models import Hub


##################################################OFFER##########################################################################
class OfferShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Offer
        fields = (
        'url', 'id', 'title', 'seller', 'is_CAPS', 'is_BARTER', 'is_GIVE', 'price_CAPS', 'created', 'updated',)


class Offer_HubSerializer(serializers.HyperlinkedModelSerializer):
    offer = OfferShortSerializer()

    class Meta:
        model = Offer_Hub
        fields = ('offer', 'distance_km', 'lat', 'lng')


class OfferSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Offer
        fields = ('__all__')
        read_only_fields = ('seller',)


##################################################DEMAND##########################################################################

class DemandShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Demand
        fields = (
        'url', 'id', 'title', 'requester', 'is_CAPS', 'is_BARTER', 'is_GIVE', 'price_CAPS', 'created', 'updated',)


class Demand_HubSerializer(serializers.HyperlinkedModelSerializer):
    demand = DemandShortSerializer()

    class Meta:
        model = Project_Hub
        fields = ('demand', 'distance_km', 'lat', 'lng')


class DemandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Demand
        fields = ('__all__')
        read_only_fields = ('requester',)


##################################################PROJECT##########################################################################


class ProjectVolunteersRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project_Volunteers_Registration
        fields = ('url', 'profile', 'project_volunteers', 'project_volunteers_ref')

    def create(self, validated_data):
        project_volunteers = Project_Volunteers.objects.get(pk=validated_data['project_volunteers_ref'])
        registration = Project_Volunteers_Registration.objects.create(
            project_volunteers=project_volunteers,
            **validated_data
        )
        count = Project_Volunteers_Registration.objects.filter(
            project_volunteers=project_volunteers
        ).count()
        project_volunteers.registered = count
        project_volunteers.save()
        return registration


class ProjectVolunteersSerializer(serializers.HyperlinkedModelSerializer):
    volunteers_registration = ProjectVolunteersRegistrationSerializer(many=True, read_only=True)

    class Meta:
        model = Project_Volunteers
        fields = ('url', 'id', 'project', 'role', 'description', 'seats', 'registered', 'minimum_registration',
                  'volunteers_registration')
        read_only_fields = ('registered', 'project', 'id')


class ProjectAttendeesRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project_Attendees_Registration
        fields = ('url', 'profile', 'project_attendees', 'project_attendees_ref')

    def create(self, validated_data):
        project_attendees = Project_Attendees.objects.get(pk=validated_data['project_attendees_ref'])
        registration = Project_Attendees_Registration.objects.create(project_attendees=project_attendees,
                                                                     **validated_data)
        count = Project_Attendees_Registration.objects.filter(project_attendees=project_attendees).count()
        project_attendees.registered = count
        project_attendees.save()
        return registration


class ProjectAttendeesSerializer(serializers.HyperlinkedModelSerializer):
    attendees_registration = ProjectAttendeesRegistrationSerializer(many=True, read_only=True)

    class Meta:
        model = Project_Attendees
        fields = ('url', 'id', 'project', 'seats', 'registered', 'attendees_registration', 'minimum_registration')
        read_only_fields = ('registered', 'project',)


class ProjectAnswerDiscussionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project_Answer_Discussion
        fields = ('url', 'id', 'discussion_ref', 'discussion', 'text', 'profile', 'created', 'updated')
        read_only_fields = ('discussion', 'profile')

    def create(self, validated_data):
        project_discussion = Project_Discussion.objects.get(pk=validated_data['discussion_ref'])
        answer = Project_Answer_Discussion.objects.create(discussion=project_discussion, **validated_data)
        return answer


class ProjectDiscussionSerializer(serializers.HyperlinkedModelSerializer):
    answer_discussion_project = ProjectAnswerDiscussionSerializer(many=True, read_only=True)

    class Meta:
        model = Project_Discussion
        fields = ('url', 'id', 'project', 'project_ref', 'title', 'text', 'profile', 'created', 'updated',
                  'answer_discussion_project')
        read_only_fields = ('profile', 'project', 'id')

    def create(self, validated_data):
        project = Project.objects.get(pk=validated_data['project_ref'])
        new_discussion = Project_Discussion.objects.create(project=project, **validated_data)
        return new_discussion


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    attendees = ProjectAttendeesSerializer()
    volunteers = ProjectVolunteersSerializer(many=True)
    discussion_project = serializers.HyperlinkedRelatedField(many=True, view_name='project_discussion-detail',
                                                             read_only=True)

    class Meta:
        model = Project
        fields = ('url', 'id', 'name', 'start', 'end', 'description', 'category', 'sub_category', 'number', 'street',
                  'postal_code', 'city', 'organizer', 'created', 'updated', 'project_type', 'attendees', 'volunteers',
                  'discussion_project')
        read_only_fields = ('organizer', 'id')

    def create(self, validated_data):
        attendees_data = validated_data.pop('attendees')
        volunteers_data = validated_data.pop('volunteers')
        new_project = Project.objects.create(**validated_data)
        if validated_data['project_type'] == 'CO':
            Project_Attendees.objects.create(project=new_project, **attendees_data)
        elif validated_data['project_type'] == 'CP':
            for volunteer_data in volunteers_data:
                Project_Volunteers.objects.create(project=new_project, **volunteer_data)
        else:
            Project_Attendees.objects.create(project=new_project, **attendees_data)
            for volunteer_data in volunteers_data:
                Project_Volunteers.objects.create(project=new_project, **volunteer_data)
        return new_project


class ProjectShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ('url', 'id', 'name', 'start', 'created', 'updated',)


class Project_HubSerializer(serializers.HyperlinkedModelSerializer):
    project = ProjectSerializer()

    class Meta:
        model = Project_Hub
        fields = ('project', 'distance_km', 'lat', 'lng')


##################################################HUB##########################################################################
class HubSerializer(serializers.HyperlinkedModelSerializer):
    projects = Project_HubSerializer(many=True, read_only=True)
    demands = Demand_HubSerializer(many=True, read_only=True)
    offers = Offer_HubSerializer(many=True, read_only=True)

    class Meta:
        model = Hub
        fields = ('url', 'hub_name', 'number', 'street', 'postal_code', 'city', 'projects', 'demands', 'offers')


##################################################OPERATIONS##########################################################################
class OperationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Operations
        fields = ('__all__')


##################################################PROFILE##########################################################################
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
        fields = ('url', 'display_name', 'city', 'country', 'profile_wallet', 'profile_offers', 'profile_demands',
                  'profile_projects', 'user_volunteer', 'user_attendee', 'profile_hub')


class CreateProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'display_name',
            'birth_date',
            'postal_code',
            'city',
            'country',
        ]


class UpdateProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'user',
            'display_name',
            'birth_date',
            'street',
            'postal_code',
            'city',
            'country',
        ]
        read_only_fields = [
            'user',
        ]
