from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class Posting(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    content = models.TextField()
    thumbnail = models.