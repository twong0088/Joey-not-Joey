from django.urls import path
from .views import HighScoreView, AddScore

urlpatterns = [
    path('highscore', HighScoreView.as_view()),
    path('newscore', AddScore.as_view()),
]