# joatu

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
TODO: Put more badges here.


TODO: Fill out this long description.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background
You need to have python 3.6 and Pip install on your computer. You will also need a Google API Key that you can have for "free" (see conditions) here : https://cloud.google.com/maps-platform/pricing/
I use Postgresql (version 10) for the database but you can use the sqlite3 that is the default database included with Django.
i work with a virtual environment using virtualenv.

## Install
clone the project on your computer:
```
git clone https://github.com/moileretour/joatu.git
```

If you use Postgresql, first follow the instruction for the installation on you OS https://www.postgresql.org/. 
Then you need to create a user called "admin" with the password "Pass123".
then create a database called "joatu" and owned by the user "admin".

Then create a virtual environment :
for Linux or MacOs:
```
python3 -m venv myvenv
```
for Windows :
```
python -m venv myvenv
```

you can now activate the virtual environment :
for Linux or MacOs:
```
source myenv/bin/activate
```
for Windows :
```
myvenv\Scripts\activate
```

you should now see in your terminal
```
(myvenv) user\...
```

Now we need to install Django and all the packages. 
```
pip install -r requirements.txt
```

you should now have in your myvenv/Lib/python3.6 (for linux and mac)/site-packages all the packages installed.


if you want to use the sqlite3 instead of postgresql, you can go to :
```
joatu/settings/base.py
```
and replace:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'project',
        'USER': 'admin',
        'PASSWORD': 'Pass123',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```
by 
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'mydatabase',
    }
}
```
Migrate the database :
```
python manage.py migrate
```

Create a superuser :
```
python manage.py createsuperuser
```
it will ask you for your name, email and password.

Create an Environment Variabe for the Google API Key:
the name of the variable should be :
```
GOOGLE_API_KEY
```
the value should be your Google API Key.
Tutorial to create an Environment Variable in windows : https://kb.wisc.edu/cae/page.php?id=24500
Tutorial to create an Environment Variable in Linux : https://www.cyberciti.biz/faq/set-environment-variable-linux/

you can now launch the server:
```
python manage.py runserver
```

first you need to create a hub:
```
http://localhost:8000/admin/
```

Click on "Hubs", then "Add Hub +"
Enter the information (Name, full address with the number,...)
Save the hub.

Then go to this address:
```
http://localhost:8000/profiles/create/
```

Enter the information of the superuser (Name, city, Postal Code, Country and Birthdate)
Submit.
You should now be able to use the application :)


you can create others users, projects, offers, demands, hubs. 
from the admin page you can give CAPs to the others users in the wallet section.
The front has been coded in HTML, CSS, Javascript(Jquery) and the focus has been on the mobile version, so it is better to look at it with a mobile resolution (with chrome, open the developer view "F12" and click on Toogle Device Toolbar button.

## Usage

```
```

## Maintainers

[@moileretour](https://github.com/moileretour)

## Contribute

See [the code of conduct file](CODE_OF_CONDUCT.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 moileretour
