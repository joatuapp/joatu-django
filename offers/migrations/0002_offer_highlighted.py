# Generated by Django 2.0.3 on 2018-03-24 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='offer',
            name='highlighted',
            field=models.TextField(default='test'),
            preserve_default=False,
        ),
    ]
