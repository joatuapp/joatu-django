from django.contrib import admin
from projects.models import (
    Project,
    ProjectIsValidated,
    ProjectVolunteers,
    ProjectVolunteersRegistration,
    ProjectDiscussion,
    ProjectAnswerDiscussion
)

admin.site.register(Project)
admin.site.register(ProjectIsValidated)
admin.site.register(ProjectVolunteers)
admin.site.register(ProjectVolunteersRegistration)
admin.site.register(ProjectDiscussion)
admin.site.register(ProjectAnswerDiscussion)