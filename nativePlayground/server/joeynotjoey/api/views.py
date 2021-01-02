from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from .serializers import HighScoreSerializer, AddScoreSerializer
from .models import HighScore
from rest_framework.response import Response

# Create your views here.
class HighScoreView(generics.ListAPIView):
  queryset = HighScore.objects.order_by('-score', 'time')[:10]
  serializer_class = HighScoreSerializer

class AddScore(APIView):
  serializer_class = AddScoreSerializer
  def post(self, request, format=None):
    serializer = self.serializer_class(data = request.data)
    if serializer.is_valid():
      name = serializer.data.get('name')
      score = serializer.data.get('score')
      time = serializer.data.get('time')
      newScore = HighScore(name=name, score=score, time=time)
      newScore.save()
    return Response(HighScoreSerializer(newScore).data, status=status.HTTP_201_CREATED)