from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/blog/', include('blogapi.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
# urlpatterns += [re_path(r'^.*',
#                         TemplateView.as_view(template_name='index.html'))]
