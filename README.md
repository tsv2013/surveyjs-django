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
# python -m venv .venv # create venv in working folder if needed - windows
# python3 -m venv .venv # macos/linux
pip install -r requirements.txt
python manage.py migrate  
python manage.py runserver
```

Open http://localhost:8000 in your web browser.

## See also

https://blog.jetbrains.com/pycharm/2025/02/django-flask-fastapi/#:~:text=Performance%3A%20While%20Flask%20performs%20slightly,more%20tightly%20tied%20to%20WSGI.
