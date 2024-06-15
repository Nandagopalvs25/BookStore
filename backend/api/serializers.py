from django.contrib.auth.models import User
from rest_framework import serializers 
from .models import Book,Cart,Order




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["id","username","password"]
        extra_kwargs={"password":{"write_only":True}}

    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        cart=Cart.objects.create(user=user)
        return user
    

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields='__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cart
        depth=2
        fields='__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        depth=3
        fields='__all__'


