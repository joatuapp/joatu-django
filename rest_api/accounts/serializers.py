from rest_framework import serializers
from accounts.models import User
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import LoginSerializer, PasswordResetSerializer
from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from django.conf import settings

class MyPasswordResetSerializer(PasswordResetSerializer):
    def get_email_options(self):
        return {
            'domain_override': 'joatu-test.herokuapp.com',
        }
class MyRegisterSerializer(serializers.Serializer):
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    termsIsAccepted = serializers.CharField(required=True, write_only=True)
    password1 = serializers.CharField(required=True, write_only=True)
    password2 = serializers.CharField(required=True, write_only=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError("A user is already registered with this e-mail address.")
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(
                {
                'password1':"The two password fields didn't match."
            })
        if data['termsIsAccepted'] != 'true':
            raise serializers.ValidationError({
                'termsIsAccepted':'Accept Terms and Conditions.'
            })
        return data
    
        
        

    def get_cleaned_data(self):
        terms = self.validated_data.get('termsIsAccepted')
        
        if terms == "true" :
            isAccepted = True
        else:
            isAccepted = False
        
        return {
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'termsIsAccepted': isAccepted,
        }


    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.termsIsAccepted = self.cleaned_data.get('termsIsAccepted')
        user.save()
        return user


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('id','email','password','termsIsAccepted', 'profileIsCreated')
        extra_kwargs = {"password": {"default_error_messages": {"blank": "Give yourself a username"}}}
        def create(self, validated_data):
            termsAndConditions = validated_data.pop('conditionsRead') 
            new_user = User.objects.create(**validated_data)
            userValidations = userValidation.objects.create(user=new_user, termsIsAccepted=termsAndConditions)
            return new_user

class MyLoginSerializer(LoginSerializer):
    
    def get_fields(self):
        fields = super(MyLoginSerializer, self).get_fields()
        fields['email'] = fields['username']
        del fields['username']
        return fields


    def validate(self, attrs):
        attrs['username'] = attrs['email']
        del attrs['email']
        if not attrs['username']:
            raise serializers.ValidationError("Please enter an email.")
        return super(MyLoginSerializer, self).validate(attrs)

