# Generated by Django 4.0.4 on 2022-04-23 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]