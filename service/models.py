from django.db import models

# Create your models here.


class Survey(models.Model):
    name = models.CharField(max_length=255)
    json = models.TextField(blank=True, default='')

    def __str__(self):
        return self.name
