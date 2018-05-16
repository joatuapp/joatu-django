from django.test import TestCase
from .models import Offer, Profile, OfferHub, Hub, ProfileHub
from accounts.models import User


# Create your tests here.

class OfferTest(TestCase):
    def setUp(self):
        user = User.objects.create(
            username='santosh.yadav198613',
            email='santosh.yadav198613@gmail.com'
        )

        seller = Profile.objects.create(
            user=user,
            display_name='Test User',
            birth_date='1986-11-13',
            street='Pune',
            postal_code='411027',
            city='Pune',
            country='India'
        )
        offer = Offer.objects.create(
            title='Test', description='Test Offer', number='9220586270',
            street='Pune', postal_code='411027', city='Pune', is_CAPS=True,
            is_BARTER=True, is_GIVE=True, price_CAPS=10, price_barter='100',
            seller=seller
        )

        hub = Hub.obejcts.create(
            hub_name='Test Hub', number='9220586270',
            street='Pune', postal_code='411027', city='Pune',
            state='Pune', country='Inidia', description='Test Hub',
            website='www.abc.com', email='testhub@test.com'
        )

        OfferHub.objects.create(
            offer=offer, hub=hub, distance_km=10, lat=10.9, lng=11.9
        )

        ProfileHub.objects.create(
            hub=hub,
            profile=seller,
            distance_km=10
        )

    # def test_get_offer(self):
    #     offer_name = Offer.objects.get(title='Test')
    #     self.assertEqual(offer_name.description, "Test Offer")
