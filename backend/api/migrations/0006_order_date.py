# Generated by Django 5.0.6 on 2024-06-15 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_order_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default='2020-07-10 15:00:00.000'),
            preserve_default=False,
        ),
    ]
