from django.utils.timezone import now
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .services import *

class NewsList(generics.ListAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()

class NewsCreate(generics.CreateAPIView):
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NewsSerializer
    queryset = News.objects.all()

class StadiumsList(generics.ListAPIView):
    serializer_class = StadiumsSerializer
    queryset = Stadium.objects.all()

class CommandsList(generics.ListAPIView):
    serializer_class = CommandsSerializer
    queryset = Command.objects.all()

class CommandDetail(generics.RetrieveAPIView):
    serializer_class = CommandsSerializer
    queryset = Command.objects.all()

class GamesList(generics.ListAPIView):
    serializer_class = GamesSerializer
    queryset = Game.objects.all()

class UpcomingGamesList(generics.ListAPIView):
    serializer_class = GamesSerializer
    queryset = Game.objects.all()

    def get_queryset(self):
        queryset = super(UpcomingGamesList, self).get_queryset()
        return queryset.filter(date__gte=now())

class FinishedGamesList(generics.ListAPIView):
    serializer_class = GamesSerializer
    queryset = Game.objects.all()

    def get_queryset(self):
        queryset = super(FinishedGamesList, self).get_queryset()
        return queryset.filter(date__lte=now())

class PredictionsList(generics.ListAPIView):
    serializer_class = PredictionsSerializer
    queryset = Prediction.objects.all()

class SelfPredictionsList(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = PredictionsSerializer
    queryset = Prediction.objects.all()

    def get_queryset(self):
        queryset = super(SelfPredictionsList, self).get_queryset()
        return queryset.filter(user=self.request.user)

class PredictionCreate(generics.CreateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class = PredictionsSerializer
    queryset = Prediction.objects.all()

    def perform_create(self, serializer):
        user = Profile.objects.get(user=self.request.user)
        user.predictions_cnt += 1
        user.save(update_fields=["predictions_cnt"])
        serializer.save(user=self.request.user)

class ProfilesList(generics.ListAPIView):
    update_scores()
    serializer_class = ProfilesSerializer
    queryset = Profile.objects.all()

class SelfProfile(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    update_scores()
    serializer_class = ProfilesSerializer
    queryset = Profile.objects.all()

    def get_queryset(self):
        queryset = super(SelfProfile, self).get_queryset()
        return queryset.filter(user=self.request.user)

class ProfileCreate(generics.CreateAPIView):
    serializer_class = CreateProfileSerializer
    queryset = Profile.objects.all()

    def perform_create(self, serializer):
        u = User.objects.create_user(username=self.request.data["username"], email=self.request.data["email"], password=self.request.data["password"])
        serializer.save(user=u)