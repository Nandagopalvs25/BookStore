from django.contrib.auth.models import User
from rest_framework import serializers 
from .models import Book,Cart,Order,Profile




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["id","username","password"]
        extra_kwargs={"password":{"write_only":True}}

    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        cart=Cart.objects.create(user=user)
        profile=Profile.objects.create(user=user)
        return user
    
class ProfileSerializer(serializers.ModelSerializer):
    is_admin=serializers.SerializerMethodField("check_admin")
    username=serializers.SerializerMethodField("get_username")

    def check_admin(self,obj):
        if(obj.user.is_staff==True):
            return True 
        
        else:
             return False
        
    def get_username(self,obj):
        return obj.user.username
         
    class Meta:
        model=Profile
        fields='__all__'
        

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


