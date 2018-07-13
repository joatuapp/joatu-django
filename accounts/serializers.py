from rest_framework import serializers
from accounts.models import User
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import LoginSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

class MyRegisterSerializer(RegisterSerializer):

    def get_cleaned_data(self):
        return {
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','password',)

class MyLoginSerializer(LoginSerializer):
    def get_fields(self):
        fields = super(MyLoginSerializer, self).get_fields()
        fields['email'] = fields['username']
        del fields['username']
        return fields

    def validate(self, attrs):
        attrs['username'] = attrs['email']
        del attrs['email']
        return super(MyLoginSerializer, self).validate(attrs)