from django.shortcuts import render

# Create your views here.

def index(request):
    context = {'a': 'aaaaaaaaaa'}
    return render(request, 'frontend/index.html', context)