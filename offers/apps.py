from django.apps import AppConfig


class OffersConfig(AppConfig):
    name = 'offers'

    def ready(self):
        super(OffersConfig, self).ready()
        import offers.signals
