import datetime
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Book(models.Model):
    title=models.CharField(max_length=50)
    author=models.CharField(max_length=50)
    description=models.CharField(max_length=50)
    price=models.DecimalField(max_digits=6,decimal_places=2)
    stock=models.IntegerField()

    def __str__(self):
        return self.title
    

class Profile(models.Model):
     user=models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
     address=models.CharField(max_length=400)
     phone_number=models.CharField(max_length=10)
    
class Cart(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
    books=models.ManyToManyField(Book,blank=True,null=True)

    def __str__(self):
        return self.user.username
    
class Order(models.Model):
     user=models.ForeignKey(User, on_delete=models.CASCADE)
     books=models.ManyToManyField(Book,blank=True,null=True)
     price=models.DecimalField(max_digits=10,decimal_places=2,null=True)
     date = models.DateField(default=datetime.date.today)
     

    