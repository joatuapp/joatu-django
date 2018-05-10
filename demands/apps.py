from django.apps import AppConfig


class DemandsConfig(AppConfig):
    name = 'demands'

    def ready(self):
        import demands.signals
        super(DemandsConfig, self).ready()
