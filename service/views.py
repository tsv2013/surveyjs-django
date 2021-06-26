from django.shortcuts import render
from django.views.generic import ListView
from .models import Survey

# Create your views here.

from django.http import HttpResponse


def home(request):
    return render(request, "service/home.html")


class SurveyListView(ListView):
    """Renders the surveys page, with a list of all surveys."""
    model = Survey

    def get_context_data(self, **kwargs):
        context = super(SurveyListView, self).get_context_data(**kwargs)
        return context
