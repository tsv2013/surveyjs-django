from service.models import Survey
from django.urls import include, path
from service import views

survey_list_view = views.SurveyListView.as_view(
    # :5 limits the results to the five most recent
    queryset=Survey.objects.order_by("-id")[:5],
    context_object_name="survey_list",
    template_name="service/surveys.html",
)

urlpatterns = [
    path("", views.home, name="home"),
    path("home/", views.home, name="home"),
    path("surveys/", survey_list_view, name="surveys"),
    path('survey/<int:survey_id>/', views.survey, name='survey'),
    path('edit/<int:survey_id>/', views.edit, name='edit'),
]
