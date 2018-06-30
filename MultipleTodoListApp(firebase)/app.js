angular.module("routing", ["ngRoute", "firebase"])
    .controller("firstCtrl", firstCtrl)
    .controller("todoCtrl", todoCtrl)
    .factory("data", data)
    .factory("savelist", savelist)
    .factory("fire", fire)
    .config(config)

function config($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "views/homepage.html" })
        .when("/profile/:listname", { templateUrl: "views/list.html" })
        .otherwise({ redirectTo: "/homepage" })

}


function data() {
    return {};
}

function savelist() {
    return [];
}
function fire() {
    return [];
}




function firstCtrl(savelist, data, fire) {
    var first = this;
    first.lists = savelist;
    firebaseref = fire;
    first.addname = function (l) {

        first.lists.push(l);

        firebaseref.push(firebase.database().ref(l));

        first.name = "";
        data[l] = [];
        console.log(data);

    }


}


function todoCtrl($firebaseArray, data, $routeParams, fire, savelist) {

    var todo = this;
    console.log(fire, savelist);
    var listname = $routeParams.listname;
    // todo.list = data[listname];
    var dbref = fire[savelist.indexOf(listname)];
    // console.log(fire[savelist.indexOf(listname)]," ",dbref.key);
    todo.list = $firebaseArray(dbref);


    todo.add = add;
    todo.completed = 0;

    function add(t) {
        if (t) {
            todo.list.$add({ "name": t, "status": 0 })
        }
        console.log(todo.list);
        todo.task = "";

    }


    todo.done = function (index) {
        todo.list[index].status ? todo.list[index].status = 0 : todo.list[index].status = 1;
        console.log(todo.list);

    }
    todo.changeTask = function (index) {
        todo.task = todo.list[index].name;
        todo.index = index;


    }

    todo.edit = function (t) {
        todo.list[todo.index].name = t;
        todo.task = "";

    }
    todo.shiftUp = function (index) {
        if (index != 0) {

            temp = todo.list[index - 1];
            todo.list[index - 1] = todo.list[index];
            todo.list[index] = temp;
            console.log(todo.list);
        }

    }

    todo.shiftDown = function (index) {
        if (index != (todo.list.length - 1)) {

            temp = todo.list[index + 1];
            todo.list[index + 1] = todo.list[index];
            todo.list[index] = temp;
        }
    }
}
