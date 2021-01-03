from rest_framework import serializers
from .models import HighScore, Games

class HighScoreSerializer(serializers.ModelSerializer):
  class Meta:
    model = HighScore
    fields = ('name', 'score', 'time')

class AddScoreSerializer(serializers.ModelSerializer):
    class Meta:
      model = HighScore
      fields = ('name', 'score', 'time')

class RoomViewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Games
    fields = ('code', 'playerOne', 'playerTwo')

class CreateRoomSerializer(serializers.ModelSerializer):
  # code = serializers.CharField(required=False)
  # playerTwo = serializers.CharField(required=False)
  class Meta:
    model = Games
    fields = ('playerOne', )

class CheckRoomSerializer(serializers.ModelSerializer):
  # code = serializers.CharField(required=False)
  # playerOne = serializers.CharField(read_only=True)
  class Meta:
    model = Games
    fields = ('playerTwo', )