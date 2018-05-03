from django import forms
from accounts.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

class RegistrationForm(UserCreationForm):
    email = forms.EmailField(required = True)

    class Meta:
        model = User
        fields = [
            'email',
            'password1',
            'password2' ]

    
    def save(self, commit=True):
        user = super(RegistrationForm, self).save(commit=False)
        user.email= self.cleaned_data['email']
        if commit:
            user.save()
        return user

    def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)

        for fieldname in ['email', 'password1', 'password2']:
            self.fields[fieldname].help_text = None

class EditProfileForm(UserChangeForm):
    class Meta:
        model = User
        fields =[
            'email',
            'password']



        