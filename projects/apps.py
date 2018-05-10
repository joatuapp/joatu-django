from django.apps import AppConfig


class ProjectsConfig(AppConfig):
    name = 'projects'

    def ready(self):
        super(ProjectsConfig, self).ready()
        import projects.signals