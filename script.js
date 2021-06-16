
function myfun() {
    var UserName = prompt("Enter Your UserName")
    var Age = prompt("Enter Your Age")




    if (Age <= 17 ) {

        window.alert("you sumbmited that you are " + Age + " years old, " + UserName + ".");
        window.alert(UserName + " is a child.");
    }


    else if (Age >= 18 && Age <= 35) {

        window.alert("you sumbmited that you are " + Age + " years old, " + UserName + ".");
        window.alert(UserName + " is an adult.");
    }

    if (Age >= 36 && Age <= 60) {

        window.alert("you sumbmited that you are " + Age + " years old, " + UserName + ".");
        window.alert(UserName + " is a matured person.");
    }

    else if (Age > 60) {

        window.alert("you sumbmited that you are " + Age + " years old, " + UserName + ".");
        window.alert(UserName + " is old person");
    }

    document.write("<h1>Finally</h1>")



}









