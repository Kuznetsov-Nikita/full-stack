from django.utils.timezone import now
from .models import *

def update_scores():
    users = User.objects.all()

    for g in Game.objects.all().filter(date__lte=now()):
        for prediction in Prediction.objects.all().filter(game=g.id):
            if (not prediction.status):
                user = Profile.objects.get(user=prediction.user)

                if g.country1goals == prediction.country1goals and g.country2goals == prediction.country2goals:
                    user.score += 5
                elif g.country1goals - g.country2goals == prediction.country1goals - prediction.country2goals:
                    user.score += 3
                elif (g.country1goals > g.country2goals and prediction.country1goals > prediction.country2goals) or \
                     (g.country1goals < g.country2goals and prediction.country1goals < prediction.country2goals) or \
                     (g.country1goals == g.country2goals and prediction.country1goals == prediction.country2goals):
                    user.score += 1
                prediction.status = True
                prediction.save(update_fields=["status"])
                user.save(update_fields=["score"])