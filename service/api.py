from django.urls import path

from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Survey
from .serializers import SurveySerializer


class SurveyListView(APIView):
    def get(self, request):
        surveys = Survey.objects.all()
        serializer = SurveySerializer(surveys, many=True)
        return Response({"surveys": serializer.data})

    def post(self, request):
        serializer = SurveySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            survey_saved = serializer.save()
        return Response({"success": "Survey '{}' created successfully".format(survey_saved.name), "survey": serializer.data})


class SurveyDetailView(APIView):
    def get(self, request, pk=None):
        queryset = Survey.objects.all()
        survey = get_object_or_404(queryset, pk=pk)
        serializer = SurveySerializer(survey)
        return Response(serializer.data)

    def put(self, request, pk):
        saved_survey = get_object_or_404(Survey.objects.all(), pk=pk)
        serializer = SurveySerializer(
            instance=saved_survey, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            survey_saved = serializer.save()
        return Response({
            "success": "Survey '{}' updated successfully".format(survey_saved.name)
        })

    def delete(self, request, pk):
        survey = get_object_or_404(Survey.objects.all(), pk=pk)
        survey.delete()
        return Response({
            "message": "Survey with id `{}` has been deleted.".format(pk)
        }, status=204)


urlpatterns = [
    path('surveys/', SurveyListView.as_view()),
    path('surveys/<int:pk>', SurveyDetailView.as_view()),
]
