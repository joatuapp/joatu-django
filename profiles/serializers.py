from rest_framework import serializers
from profiles.models import Profile

class CreateProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields= [
            'display_name',
            'birth_date',
            'postal_code',
            'city',
            'country',  
            ]


class UpdateProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields=[
            'user',
            'display_name',
            'birth_date',
            'postal_code',
            'city',
            'country',   
        ]
        read_only_fields=[
            'user',
        ]