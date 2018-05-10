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
        fields = '__all__'
        read_only_fields = ('seller',)
