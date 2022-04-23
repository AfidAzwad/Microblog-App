from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    pid = models.AutoField(primary_key=True)
    created_by = models.ForeignKey(to=User,db_column="USER", on_delete=models.CASCADE, default=True, null=False)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    
class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, default=True, null=False)
    comment = models.TextField(blank=True, null=True)
    comment_by = models.ForeignKey(to=User,db_column="USER", on_delete=models.CASCADE, default=True, null=False)
    comment_at = models.DateTimeField(auto_now_add=True)

         
CHOICES = (
    ('Upvote','Upvote'),
    ('Downvote','Downvote'),
)

class Vote(models.Model):
    user = models.ForeignKey(to=User,on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE)
    value = models.CharField(choices=CHOICES, max_length=20)

    