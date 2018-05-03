from django.contrib import admin
from projects.models import Project, Project_isValidated, Project_Volunteers, Project_Volunteers_Registration, Project_Discussion, Project_Answer_Discussion
# Register your models here.
admin.site.register(Project)
admin.site.register(Project_isValidated)
admin.site.register(Project_Volunteers)
admin.site.register(Project_Volunteers_Registration)
admin.site.register(Project_Discussion)
admin.site.register(Project_Answer_Discussion)