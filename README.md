# SurveyJS + Django Demo Example

This demo shows how to integrate [SurveyJS](https://surveyjs.io/) components with a Django backend.

## Disclaimer

This demo must not be used as a real service as it doesn't cover such real-world survey service aspects as authentication, authorization, user management, access levels, and different security issues. These aspects are covered by backend-specific articles, forums, and documentation.

## Clone this repository

```bash
git clone https://github.com/tsv2013/surveyjs-django.git
cd surveyjs-django
```

## Build Client-Side App

```bash
cd surveyjs-django/client
npm i
npm run build
```

## Run the Application

```bash
cd surveyjs-django
pip install requirements.txt
python manage.py runserver
```

Open http://localhost:8000 in your web browser.