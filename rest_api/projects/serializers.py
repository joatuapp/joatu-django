from rest_framework import serializers

from projects.models import (
    Project,
    ProjectVolunteers,
    ProjectVolunteersRegistration,
    ProjectAttendees,
    ProjectAttendeesRegistration,
    ProjectDiscussion,
    ProjectAnswerDiscussion,
    ProjectHub,
)


class ProjectVolunteersRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProjectVolunteersRegistration
        fields = ('url', 'profile', 'project_volunteers', 'project_volunteers_ref')

    def create(self, validated_data):
        project_volunteers = ProjectVolunteers.objects.get(pk=validated_data['project_volunteers_ref'])
        registration = ProjectVolunteersRegistration.objects.create(
            project_volunteers=project_volunteers,
            **validated_data
        )
        count = ProjectVolunteersRegistration.objects.filter(
            project_volunteers=project_volunteers
        ).count()
        project_volunteers.registered = count
        project_volunteers.save()
        return registration


class ProjectVolunteersSerializer(serializers.HyperlinkedModelSerializer):
    volunteers_registration = ProjectVolunteersRegistrationSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectVolunteers
        fields = (
            'url',
            'id',
            'project',
            'role',
            'description',
            'seats',
            'registered',
            'minimum_registration',
            'volunteers_registration',
        )
        read_only_fields = ('registered', 'project', 'id')


class ProjectAttendeesRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProjectAttendeesRegistration
        fields = ('url', 'profile', 'project_attendees', 'project_attendees_ref')

    def create(self, validated_data):
        project_attendees = ProjectAttendees.objects.get(pk=validated_data['project_attendees_ref'])
        registration = ProjectAttendeesRegistration.objects.create(project_attendees=project_attendees, **validated_data)
        count = ProjectAttendeesRegistration.objects.filter(project_attendees=project_attendees).count()
        project_attendees.registered = count
        project_attendees.save()
        return registration


class ProjectAttendeesSerializer(serializers.HyperlinkedModelSerializer):
    attendees_registration = ProjectAttendeesRegistrationSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectAttendees
        fields = (
            'url',
            'id',
            'project',
            'seats',
            'registered',
            'attendees_registration',
            'minimum_registration',
        )
        read_only_fields = ('registered', 'project',)


class ProjectAnswerDiscussionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProjectAnswerDiscussion
        fields = ('url', 'id', 'discussion_ref', 'discussion', 'text', 'profile', 'created', 'updated')
        read_only_fields = ('discussion', 'profile')

    def create(self, validated_data):
        project_discussion = ProjectDiscussion.objects.get(pk=validated_data['discussion_ref'])
        answer = ProjectAnswerDiscussion.objects.create(discussion=project_discussion, **validated_data)
        return answer


class ProjectDiscussionSerializer(serializers.HyperlinkedModelSerializer):
    answer_discussion_project = ProjectAnswerDiscussionSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectDiscussion
        fields = (
            'url',
            'id',
            'project',
            'project_ref',
            'title',
            'text',
            'profile',
            'created',
            'updated',
            'answer_discussion_project',
        )
        read_only_fields = ('profile', 'project', 'id')

    def create(self, validated_data):
        project = Project.objects.get(pk=validated_data['project_ref'])
        new_discussion = ProjectDiscussion.objects.create(project=project, **validated_data)
        return new_discussion


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    attendees = ProjectAttendeesSerializer()
    volunteers = ProjectVolunteersSerializer(many=True)
    discussion_project = ProjectDiscussionSerializer(many=True)
    ### cause of the error : 
    #serializers.HyperlinkedRelatedField(
    #    many=True,
    #    view_name='discussion_project',
    #    read_only=True
    #)

    class Meta:
        model = Project
        fields = ('url', 'id', 'name', 'start',
                  'end', 'description', 'category',
                  'sub_category', 'number', 'street',
                  'postal_code', 'city', 'organizer', 'created',
                  'updated', 'project_type', 'attendees',
                  'volunteers', 'discussion_project')
        read_only_fields = ('organizer', 'id')

    def create(self, validated_data):
        attendees_data = validated_data.pop('attendees')
        volunteers_data = validated_data.pop('volunteers')
        new_project = Project.objects.create(**validated_data)
        if validated_data['project_type'] == 'CO':
            ProjectAttendees.objects.create(project=new_project, **attendees_data)
        elif validated_data['project_type'] == 'CP':
            for volunteer_data in volunteers_data:
                ProjectVolunteers.objects.create(project=new_project, **volunteer_data)
        else:
            ProjectAttendees.objects.create(project=new_project, **attendees_data)
            for volunteer_data in volunteers_data:
                ProjectVolunteers.objects.create(project=new_project, **volunteer_data)
        return new_project


class ProjectShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ('url', 'id', 'name', 'start', 'created', 'updated',)


class ProjectHubSerializer(serializers.HyperlinkedModelSerializer):
    project = ProjectSerializer()

    class Meta:
        model = ProjectHub
        fields = ('project', 'distance_km', 'lat', 'lng')
