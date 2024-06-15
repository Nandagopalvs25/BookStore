import json
from django.shortcuts import render
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import generics,status
from .serializers import UserSerializer,BookSerializer,CartSerializer,OrderSerializer
from rest_framework .permissions import IsAuthenticated,AllowAny
from .models import Book,Cart,Order
from rest_framework.views import APIView
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]


class BookListView(generics.ListAPIView):
    queryset=Book.objects.all()
    serializer_class=BookSerializer
    permission_classes=[AllowAny]


class CartView(APIView):
    @method_decorator(csrf_exempt)
    def post(self,request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        book_id=body["bookid"]
        cart = Cart.objects.get(user=request.user)
        cart.books.add( Book.objects.get(id=book_id))
        return HttpResponse("WOrks")
    
    def get(self,request):
        cart = Cart.objects.get(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
    def delete(self,request,pk):
        cart = Cart.objects.get(user=request.user)
        book=Book.objects.get(id=pk)
        cart.books.remove(book)
        return HttpResponse("Deleted")
    

class OrderView(APIView):
    def post(self,request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        books_ids=body["book_ids"]
        order=Order.objects.create(user=request.user)
        cart=Cart.objects.get(user=request.user)
        sum=0
        for i in books_ids:
            order.books.add(Book.objects.get(id=i))
            cart.books.remove(Book.objects.get(id=i))
            sum=sum+int(Book.objects.get(id=1).price)
        print(sum)
        order.price=sum
        order.save()
        return Response(status=status.HTTP_201_CREATED)
    
class OrderListView(generics.ListAPIView):
    queryset=Order.objects.all()
    serializer_class=OrderSerializer
    permission_classes=[IsAuthenticated]



        
