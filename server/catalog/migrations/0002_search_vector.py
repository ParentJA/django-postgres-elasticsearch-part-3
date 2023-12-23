# Generated by Django 5.0 on 2023-12-22 19:27

import django.contrib.postgres.indexes
import django.contrib.postgres.search
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='search_vector',
            field=django.contrib.postgres.search.SearchVectorField(blank=True, null=True),
        ),
        migrations.AddIndex(
            model_name='wine',
            index=django.contrib.postgres.indexes.GinIndex(fields=['search_vector'], name='search_vector_index'),
        ),
    ]
