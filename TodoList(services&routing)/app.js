angular.module("routing",["ngRoute"])
.controller("firstCtrl",firstCtrl)
.controller("todoCtrl",todoCtrl)
.factory("data",data)
.factory("savelist",savelist)
.config(config)

function config($routeProvider)
{
    $routeProvider
    .when("/",{templateUrl : "views/homepage.html"})
    .when("/profile/:listname",{templateUrl : "views/list.html"})
    .otherwise({redirectTo : "/homepage"})
    
}


function data()
{
    return {};
}

function savelist()
{
    return [];
}



function firstCtrl(savelist,data)
{
    var first = this;
    first.lists = savelist;
    first.addname = function(l)
    {
        
        first.lists.push(l);
        data[l]=[];
        console.log(data);

    }
   

}


function todoCtrl(data,$routeParams)
{
     
    var todo = this;
    var listname = $routeParams.listname;
    todo.list = data[listname];
   
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
