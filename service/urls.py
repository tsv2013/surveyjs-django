from django.urls import path
from service import views

urlpatterns = [
    path("", views.home, name="home"),
    path("home/", views.home, name="home"),
    path("survey/", views.home, name="home"),
]
