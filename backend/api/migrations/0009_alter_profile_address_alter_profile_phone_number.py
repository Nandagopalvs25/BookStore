# Generated by Django 5.0.6 on 2024-06-19 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='address',
            field=models.CharField(max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone_number',
            field=models.CharField(max_length=10, null=True),
        ),
    ]
