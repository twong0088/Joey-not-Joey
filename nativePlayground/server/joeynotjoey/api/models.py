from django.db import models
import string
import random

# Create your models here.
class HighScore(models.Model):
  name = models.CharField(max_length=20)
  score = models.IntegerField(null=False)
  time = models.IntegerField(null=False)

def generate_unique_code():
  length = 8

  while True:
    code = ''.join(random.choices(string.ascii_uppercase, k=length))

    if Games.objects.filter(code=code).count() == 0:
      break

  return code

class Games(models.Model):
  code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
  playerOne = models.CharField(max_length=20)
  playerTwo = models.CharField(max_length=20)

class Game_records(models.Model):
  gameId = models.CharField(max_length=20),
  playerOneScore = models.IntegerField(null=False),
  playerTwoScore = models.IntegerField(null=False),
  playerOnesTurn = models.BooleanField
  playerTwoCounter = models.IntegerField
  timestamp = models.DateTimeField(auto_now_add=True)
