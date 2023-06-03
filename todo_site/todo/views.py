from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import Todo
from .forms import TodoForm

# Create your views here.
def index(request):
    items = Todo.objects.all()

    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('todo')
        # return HttpResponseRedirect('/%i' %form.auto_id)
        
    
    else:
        form = TodoForm()
        page={
            "form" : form,
            "items" : items
            }
        return render(request, 'todo/index.html', page)

def remove(request, item_id):
    item = Todo.objects.get(id= item_id)
    item.delete()
    return redirect("todo")  

def edit(request, item_id):
    item = Todo.objects.get(id=item_id)
    form = TodoForm(instance=item)

    if request.method == "POST":
        form = TodoForm(request.POST, instance=item)
        if form.is_valid():
            form.save()
            return redirect("todo")

    return render(request, "todo/index.html", {'form': form})  