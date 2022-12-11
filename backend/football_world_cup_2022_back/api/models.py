from django.db import models
from django.contrib.auth.models import User

class News(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    title = models.TextField(max_length=256)
    image = models.TextField(max_length=256)
    text = models.TextField(max_length=5000)

    def __str__(self):
        return self.title

class Stadium(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    capacity = models.PositiveIntegerField()
    image = models.TextField(max_length=256)

    def __str__(self):
        return self.name

class Command(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    country = models.CharField(max_length=50)
    image = models.TextField(max_length=256)
    info = models.TextField(max_length=5000)

    def __str__(self):
        return self.country

class Game(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    date = models.DateField()
    time = models.TimeField()
    date_text = models.CharField(max_length=20)
    time_text = models.CharField(max_length=10)
    country1 = models.CharField(max_length=50)
    country2 = models.CharField(max_length=50)
    country1code = models.CharField(max_length=50)
    country2code = models.CharField(max_length=50)
    country1goals = models.PositiveIntegerField()
    country2goals = models.PositiveIntegerField()

    def __str__(self):
        return self.country1code + '-' + self.country2code

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)
    predictions_cnt = models.PositiveIntegerField(default=0)
    score = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.__str__()

class Prediction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    country1goals = models.PositiveIntegerField()
    country2goals = models.PositiveIntegerField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.user.__str__() + ': ' + self.game.__str__()
