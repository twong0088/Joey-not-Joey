from django.shortcuts import render
from rest_framework import generics, status
from .serializers import highScoreSerializer, newScoreSerializer
from .models import highScore
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class highScoreView(generics.ListAPIView):
  queryset = highScore.objects.order_by('-score', 'time')[:10]
  serializer_class = highScoreSerializer

class newScore(APIView):
  serializer_class = newScoreSerializer

  def post(self, request, format=None):
    serializer = self.serializer_class(data=request.data)
    if serializer.is_valid():
      name = serializer.data.get('name')
      score = serializer.data.get('score')
      time = serializer.data.get('time')
      score = highScore(name=name, score=score, time=time)
      score.save()

    return Response(highScoreSerializer(score).data, status=status.HTTP_201_CREATED)
