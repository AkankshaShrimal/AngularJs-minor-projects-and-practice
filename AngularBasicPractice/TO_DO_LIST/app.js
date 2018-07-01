angular.module("todoApp",[])
.controller("todoCtrl",todoCtrl);

function todoCtrl()
{
    
    var todo = this;
    todo.list = [];
    todo.add = add;
    todo.completed=0;
    
    function add(t)
    {
        if(t)
        {
      todo.list.push({"name":t,"status":0})}
        console.log(todo.list);
        todo.task ="";

    }

    todo.delete = function(index)
    {
        todo.list.splice(index,1);
        console.log(todo.list);
    }
   
   todo.done = function(index)
   {
       todo.list[index].status ?  todo.list[index].status = 0 :todo.list[index].status = 1;
       console.log(todo.list);
       
}
todo.changeTask = function(index)
{
    todo.task = todo.list[index].name;
    todo.index = index;
   
    

}

todo.edit = function(t)
{
     todo.list[todo.index].name =t;
     todo.task ="";

}
todo.shiftUp = function(index)
{
    if(index!=0)
    {
     
    temp = todo.list[index-1];
    todo.list[index-1]= todo.list[index];
    todo.list[index] = temp;
    console.log(todo.list);
    }

}

todo.shiftDown = function(index)
{
    if(index!=(todo.list.length-1))
    {
       
    temp = todo.list[index+1];
    todo.list[index+1]= todo.list[index];
    todo.list[index] = temp;
    }

}





}