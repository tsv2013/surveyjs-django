from django.urls import path
from service import views

urlpatterns = [
    path("", views.home, name="home"),
]
