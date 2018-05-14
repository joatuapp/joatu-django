from rest_framework import serializers

from offers.models import Offer, OfferHub


class OfferShortSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Offer
        fields = (
            'url',
            'id',
            'title',
            'seller',
            'is_CAPS',
            'is_BARTER',
            'is_GIVE',
            'price_CAPS',
            'created',
            'updated',
        )


class OfferHubSerializer(serializers.HyperlinkedModelSerializer):
    offer = OfferShortSerializer()

    class Meta:
        model = OfferHub
        fields = ('offer', 'distance_km', 'lat', 'lng')


class OfferSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Offer
        fields = ('url',
            'id',
            'title',
            'description',
            'number',
            'street',
            'postal_code',
            'city',
            'is_CAPS',
            'is_BARTER',
            'is_GIVE',
            'created',
            'updated',
            'price_CAPS',
            'price_barter',
            'seller')
        read_only_fields = ('seller',)
