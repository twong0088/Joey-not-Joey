from django.db import models

# Create your models here.
class HighScore(models.Model):
  name = models.CharField(max_length=20)
  score = models.IntegerField(null=False)
  time = models.IntegerField(null=False)