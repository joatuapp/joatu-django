from django.db import models
from profiles.models import Profile, ProfileHub
from hubs.models import Hub, HubGeolocation


class Project(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    start = models.DateTimeField(blank=False, null=True)
    end = models.DateTimeField(blank=False, null=True)
    place_name = models.CharField(max_length=20, blank=False, null=True)
    number = models.CharField(max_length=10, blank=True)
    street = models.CharField(max_length=200, blank=False)
    postal_code = models.CharField(max_length=10, blank=False)
    city = models.CharField(max_length=50, blank=False)
    organizer = models.ForeignKey(
        Profile,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name='profile_projects'
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    TYPE_OF_CATEGORY = (
        ('Cul', 'Culture and Recreation'),
        ('Edu', 'Education'),
        ('Hea', 'Health'),
        ('Soc', 'Social Services'),
        ('Env', 'Environment'),
        ('Oth', 'Other'),
    )
    category = models.CharField(max_length=3, choices=TYPE_OF_CATEGORY)
    TYPE_OF_SUB_CATEGORY = (
        ('Cul_con', 'Concert/Show/Presentation'),
        ('Cul_lei', 'Leisure'),
        ('Cul_oth', 'Other activity'),
        ('Edu_kno', 'Knowledge'),
        ('Edu_ski', 'Skills share'),
        ('Edu_oth', 'Other activity'),
        ('Hea_phy', 'Physical fitness'),
        ('Hea_emo', 'Emotional well-being'),
        ('Hea_oth', 'Other activity'),
        ('Soc_foo', 'Food security'),
        ('Soc_chi', 'Childcare'),
        ('Soc_eld', 'Senior Friendly'),
        ('Soc_ani', 'Animalcare'),
        ('Soc_oth', 'Other activity'),
        ('Env_gar', 'Gardening'),
        ('Env_cle', 'Cleanups'),
        ('Env_oth', 'Other activity'),
        ('Oth_oth', 'Other activity'),
    )
    sub_category = models.CharField(max_length=7, choices=TYPE_OF_SUB_CATEGORY)
    oth_category = models.CharField(max_length=20, blank=True)
    oth_sub_cat  = models.CharField(max_length=20, blank=True)
    TYPE_OF_EVENT = (
        ('CP', 'Community Project'),
        ('CO', 'Community Offer'),
        ('BO', 'Community Project and Community Offer'),
    )
    project_type = models.CharField(max_length=2, choices=TYPE_OF_EVENT, default='BO', )

    def __str__(self):
        display = self.name + ' - ' + str(self.start)
        return display


class ProjectIsValidated(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    isValidated = models.BooleanField(default=False)

    def __str__(self):
        display = self.project.name + ' - ' + str(self.isValidated)
        return display


class ProjectVolunteers(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, related_name='volunteers')
    role = models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)
    start = models.DateTimeField(blank=True, null=True)
    end = models.DateTimeField(blank=True, null=True)
    seats = models.PositiveSmallIntegerField(default=1)
    registered = models.PositiveSmallIntegerField(default=0)
    minimum_registration = models.PositiveIntegerField(default=2)
    is_general_volunteering = models.BooleanField(default=True)


class ProjectVolunteersRegistration(models.Model):
    project_volunteers = models.ForeignKey(
        ProjectVolunteers,
        on_delete=models.CASCADE,
        null=True,
        related_name='volunteers_registration'
    )
    project_volunteers_ref = models.PositiveIntegerField(null=False, blank=False)
    profile = models.ForeignKey(
        Profile,
        on_delete=models.CASCADE,
        null=True,
        related_name='user_volunteer'
    )


class ProjectAttendees(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name='attendees', null=True)
    seats = models.PositiveSmallIntegerField(default=2, null=True, blank=True)
    minimum_registration = models.PositiveIntegerField(default=2)
    registered = models.PositiveSmallIntegerField(default=0)


class ProjectAttendeesRegistration(models.Model):
    project_attendees = models.ForeignKey(
        ProjectAttendees,
        on_delete=models.CASCADE,
        null=True,
        related_name='attendees_registration'
    )
    project_attendees_ref = models.PositiveIntegerField(null=False, blank=False)
    profile = models.ForeignKey(
        Profile,
        on_delete=models.CASCADE,
        null=True,
        related_name='user_attendee'
    )


class ProjectDiscussion(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="discussion_project")
    project_ref = models.PositiveIntegerField(null=False, blank=False)
    title = models.CharField(max_length=100, null=False, blank=False)
    text = models.CharField(max_length=1500, null=False, blank=False)
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class ProjectAnswerDiscussion(models.Model):
    discussion = models.ForeignKey(
        ProjectDiscussion,
        on_delete=models.CASCADE,
        related_name='answer_discussion_project'
    )
    discussion_ref = models.PositiveIntegerField(null=False, blank=False)
    text = models.CharField(max_length=1500, null=False, blank=False)
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class ProjectHub(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, related_name='hub_project')
    hub = models.ForeignKey(Hub, on_delete=models.CASCADE, null=True, related_name='projects')
    distance_km = models.DecimalField(max_digits=10, decimal_places=3, blank=False, null=True)
    lat = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    lng = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)


class ProjectStatus(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name='status')
    # created means that the organizer completed all the steps of the project creation
    is_created = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    # for the moment, projects need to be validated by JoatU Staff
    isValidated = models.BooleanField(default=False)
    # executed means that we have the confirmation that the project has been done (by the organizer), but the CAPS are not generated yet.
    is_executed = models.BooleanField(default=False)
    executed = models.DateTimeField(blank=True, null=True)
    # completed means that the CAPS have been generated and transfered to the volunteers and organizer
    is_completed = models.BooleanField(default=False)
    completed = models.DateTimeField(blank=True, null=True)
    # canceled means that the organizer canceled the project
    is_canceled = models.BooleanField(default=False)
    canceled = models.DateTimeField(blank=True, null=True)
