from django.contrib import admin
from django.urls import path
from .views import highScoreView, newScore
urlpatterns = [
    path('highscore', highScoreView.as_view()),
    path('newscore', newScore.as_view())
]
