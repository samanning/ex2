window.onload = function () {
    //check that js is working
    console.log("reading js");

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = resetPage;

    //define process function
    function processForm() {

        //store user name in a variable
        var userVerb1 = document.f.userVerb1.value;

        var userAdj1 = document.f.userAdj1.value;

        var userVerb2 = document.f.userVerb2.value;

        var userNoun1 = document.f.userNoun1.value;
        
        var userAdj2 = document.f.userAdj2.value;
        
        var userAdj3 = document.f.userAdj3.value;




        //error detection
        if (userVerb1 == "" || userAdj1 == "") {
            alert("fill out the form!");

        } else {

            //capture the msg element to change it's text and html
            var myMsg = document.getElementById("myMsg");

            myMsg.innerHTML = "Come <strong>" + userVerb1 + " </strong> with me to the pathway to more success. Major key alert! The key is to be <strong> " + userAdj1 + "</strong>. I promise you, they don't want you to eat <strong> " + userNoun1 + "</strong>. Some people can't handle <strong>" + userVerb2 + "</strong>... I can! You <strong>" + userAdj2 + " </strong>, you <strong>" + userAdj3 + " </strong>, I appreciate that. Bless up!";
            myMsg.className = "show";
            
        }

        //prevent page from reloading
        return false;
    }

    
    //if user chooses "reset"
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        
        //change the class name
        myMsg.className = "hide";
        
        //reset the user fields
        userVerb1.value = "";
        userAdj1.value = "";
        userNoun.value = "";
        userVerb2.value = "";
        userAdj2.value = "";
        userAdj3.value = "";

        return false;
    }
}