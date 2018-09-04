from django.test import TestCase, Client
from .models import User
from django.urls import reverse
import json


c = Client()

user = {
    'email': 'test@test.asd',
    'password': 'test123456789',
}
signup_data = {
    'email': user['email'],
    'password1': user['password'],
    'password2': user['password'],
    'termsIsAccepted': 'true',
}


class TestAccounts(TestCase):

    def _create_user(self):
        return User.objects.create_user(**user)

    def test_signup(self):
        res = c.post('/rest-auth/registration/', json.dumps(signup_data), content_type='application/json')
        self.assertEqual(User.objects.all().count(), 1)

    def test_email_exists(self):
        self._create_user()
        res = c.post('/rest-auth/registration/', json.dumps(signup_data), content_type='application/json')
        self.assertEqual(res.json()['email'], ['A user is already registered with this e-mail address.'])

    def test_password_dont_match(self):
        data = signup_data.copy()
        data['password2'] = '123'
        res = c.post('/rest-auth/registration/', json.dumps(data), content_type='application/json')
        self.assertEqual(res.json()['password1'], ["The two password fields didn't match."])

    def test_login(self):
        self._create_user()
        res = c.post('/rest-auth/login/', json.dumps(user), content_type='application/json')
        res = c.get('/profiles/create/')
        self.assertEqual(res.status_code, 200)

    def test_bad_login(self):
        self._create_user()
        data = user.copy()
        # test bad password
        data['password'] = 'wrong password'
        res = c.post('/rest-auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(res.json()['non_field_errors'], ['Unable to log in with provided credentials.'])
        # test bad email
        data['password'] = user['password']
        data['email'] = 'bad@bad.user'
        res = c.post('/rest-auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(res.json()['non_field_errors'], ['Unable to log in with provided credentials.'])

    def test_logout(self):
        self._create_user()
        res = c.post('/rest-auth/login/', json.dumps(user), content_type='application/json')
        res = c.post('/rest-auth/logout/', json.dumps(user), content_type='application/json')
        # access a url that needs a user to be logged in.
        res = c.get('/profiles/create/')
        # 302 = redirect as it's redirecting to the login page.
        self.assertEqual(res.status_code, 302)
