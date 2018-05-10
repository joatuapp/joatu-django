from django.apps import AppConfig


class HubsConfig(AppConfig):
    name = 'hubs'

    def ready(self):
        super(HubsConfig, self).ready()
        import hubs.signals