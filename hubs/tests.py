from django.test import TestCase, Client
from .models import Hub


class HubTest(TestCase):
    def setUp(self):
        Hub.objects.create(
            hub_name='Test',
            number='900495560',
            street='Pune',
            postal_code='411027',
            city='Pune', state='Maharshtra', country='India',
            description='Test Hub', website='www.abc.com', email='testhib@test.com'
        )

    def test_check_display_name(self):
        hub_name = Hub.objects.get(hub_name='Test')
        self.assertEqual(str(hub_name), "Test - Pune")
