from django.apps import AppConfig


class LedgerConfig(AppConfig):
    name = 'ledger'

    def ready(self):
        super(LedgerConfig, self).ready()
        import ledger.signals