from rest_framework import serializers
from .models import highScore

class highScoreSerializer(serializers.ModelSerializer) :
  class Meta:
    model = highScore
    fields = ('id', 'name', 'score', 'time')

class newScoreSerializer(serializers.ModelSerializer):
  class Meta:
    model = highScore
    fields = ('name', 'score', 'time')