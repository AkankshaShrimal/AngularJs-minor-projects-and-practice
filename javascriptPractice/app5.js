// FINDING ISOGRAM - WORD HAVING NO LETTER REPEATED

var sudo = document.getElementById("iso");



function find() {

    string = sudo.value.split("");

    temp = sudo.value.split("");
    var count = 0;


    for (var i = 0; i < string.length; i++) {

        j = string.pop();
        count = 0;
        for (var k = temp.length - 1; k >= 0; k--) {
            if (j == temp[k])
                count++;
            if (count == 2)
                break;
        }
        if (count > 1) {
            console.log("NOT A ISOGRAM");
            break;
        }

    }
    if (count == 1)
        console.log("IT IS ISOGRAM");



}