from django.urls import path
from .views import *

urlpatterns = [
    path('get_all_news/', NewsList.as_view()),
    path('create_news/', NewsCreate.as_view()),
    path('drop_news/<int:pk>', NewsDetail.as_view()),

    path('get_all_stadiums/', StadiumsList.as_view()),

    path('get_all_commands/', CommandsList.as_view()),
    path('get_command/<int:pk>', CommandDetail.as_view()),

    path('get_all_matches/', GamesList.as_view()),
    path('get_upcoming_matches/', UpcomingGamesList.as_view()),
    path('get_finished_matches/', FinishedGamesList.as_view()),

    path('get_my_predictions/', SelfPredictionsList.as_view()),
    path('create_prediction/', PredictionCreate.as_view()),

    path('get_profiles/', ProfilesList.as_view()),
    path('get_my_profile/', SelfProfile.as_view()),
    path('create_profile/', ProfileCreate.as_view()),
]