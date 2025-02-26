from django.shortcuts import get_object_or_404, render
from django.views.generic import ListView

from .serializers import SurveySerializer
from .models import Survey

# Create your views here.

from django.http import HttpResponse, HttpResponseRedirect


def home(request):
    return render(request, "service/home.html")


class SurveyListView(ListView):
    """Renders the surveys page, with a list of all surveys."""
    model = Survey

    def get_context_data(self, **kwargs):
        context = super(SurveyListView, self).get_context_data(**kwargs)
        return context

    def post(self, request, *args, **kwargs):
        name = request.POST.get('name')
        serializer = SurveySerializer(data={'name': name})
        if serializer.is_valid(raise_exception=True):
            survey_saved = serializer.save()
        return HttpResponseRedirect('/edit/{}'.format(survey_saved.id))

def survey(request, survey_id):
    survey = get_object_or_404(Survey, pk=survey_id)
    return render(request, 'service/survey.html', {'survey': survey})


def edit(request, survey_id):
    survey = get_object_or_404(Survey, pk=survey_id)
    return render(request, 'service/edit.html', {'survey': survey})
