from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from .serializers import HighScoreSerializer, AddScoreSerializer, CheckRoomSerializer, CreateRoomSerializer, RoomViewSerializer
from .models import HighScore, Games
from rest_framework.response import Response
from django.http import HttpResponse

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

class RoomView(generics.ListAPIView):
  queryset = Games.objects.all()
  serializer_class = RoomViewSerializer

class CreateRoom(APIView):
  serializer_class = CreateRoomSerializer
  def post(self, request, format=None):
    serializer = self.serializer_class(data = request.data)
    if serializer.is_valid():
      playerOne = serializer.data.get('playerOne')
      newRoom = Games(playerOne=playerOne)
      newRoom.save()
    return Response(RoomViewSerializer(newRoom).data, status=status.HTTP_201_CREATED)

class SpecificRoomView(APIView):
  def get(self, request, code):
    return Response(RoomViewSerializer(Games.objects.get(code=code)).data)

class CheckRoom(APIView):
  def get_object(self, code):
    return Games.objects.get(code=code)

  def patch(self, request, code):
    if Games.objects.filter(code=code, playerTwo="").count() == 1:
      checkRoom_object = self.get_object(code)

      print(checkRoom_object.playerOne)
      playerOne = checkRoom_object.playerOne
      code = checkRoom_object.code

      serializer = CheckRoomSerializer(checkRoom_object, data=request.data, partial=True)
      if serializer.is_valid():
        serializer.save()
        return Response('success', status=status.HTTP_201_CREATED)
      return Response('patch failed', status=status.HTTP_400_BAD_REQUEST)
    return Response('patch failed',status=status.HTTP_400_BAD_REQUEST)

# class DetailView(APIView):
#     def get_object(self, pk):
#         return TestModel.objects.get(pk=pk)

#     def patch(self, request, pk):
#         testmodel_object = self.get_object(pk)
#         serializer = TestModelSerializer(testmodel_object, data=request.data, partial=True) # set partial=True to update a data partially
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(code=201, data=serializer.data)
#         return JsonResponse(code=400, data="wrong parameters")

def index(request):
    return render(request, 'chat/index.html', {})

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })