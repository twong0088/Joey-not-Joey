from django.urls import path
from .views import HighScoreView, AddScore, index, room, CheckRoom, CreateRoom, RoomView, SpecificRoomView

urlpatterns = [
    path('highscore', HighScoreView.as_view()),
    path('newscore', AddScore.as_view()),
    path('newroom', CreateRoom.as_view()),
    path('checkroom/<str:code>/', CheckRoom.as_view()),
    path('listrooms', RoomView.as_view()),
    path('listrooms/<str:code>/', SpecificRoomView.as_view())
    # path('', index, name='index'),
    # path('<str:room_name>/', room, name='room'),
]
from django.urls import path
