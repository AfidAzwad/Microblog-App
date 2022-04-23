from django.urls import path
from .views import RegisterAPI,LoginAPI,PostListView, PostDetailView, UserListView, CommentListView, VoteDetailView
from knox import views as knox_views

urlpatterns = [
    path('', PostListView.as_view()),
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('<pid>', PostDetailView.as_view()),
    path('comment/<pid>', CommentListView.as_view()),
    path('vote', VoteDetailView.as_view()),
    path('user', UserListView.as_view()),
]