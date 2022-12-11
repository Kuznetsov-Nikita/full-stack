from rest_framework import serializers
from .models import *

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class StadiumsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stadium
        fields = '__all__'

class CommandsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = '__all__'

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

class PredictionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = '__all__'

class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('username', 'predictions_cnt', 'score')