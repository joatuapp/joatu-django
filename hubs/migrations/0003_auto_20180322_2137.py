# Generated by Django 2.0.3 on 2018-03-23 01:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hubs', '0002_auto_20180322_2127'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hubgeolocation',
            name='lat',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True),
        ),
        migrations.AlterField(
            model_name='hubgeolocation',
            name='lng',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True),
        ),
    ]
