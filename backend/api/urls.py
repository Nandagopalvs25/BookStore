from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView
from .views import CreateUserView,BookListView,CartView,OrderView,OrderListView,ProfileView,CreateBook,EditBook

urlpatterns = [

    path("register/", CreateUserView.as_view(), name="RegisterUser"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path("books/", BookListView.as_view(), name="BookList"),
    path('cart/',CartView.as_view(),name="cart"),
    path('cart/<int:pk>',CartView.as_view(),name="cart"),
    path('order/',OrderView.as_view(),name="order"),
    path('getorders/',OrderListView.as_view(),name="orderlist"),
    path('profile/',ProfileView.as_view(),name="profile"),
    path('createbook/',CreateBook.as_view(),name="createbook"),
    path('editbook/<int:pk>',EditBook.as_view(),name="editBook"),
]