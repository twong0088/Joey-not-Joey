from django.db import models

# Create your models here.
class highScore(models.Model):
  name = models.CharField(max_length=20, default="", unique=False)
  score = models.IntegerField(null=False)
  time = models.IntegerField(null=False)