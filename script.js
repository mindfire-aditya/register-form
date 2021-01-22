function handleForm(e){
    var fname = document.getElementById('firstname').value;
    var mname = document.getElementById('middlename').value;
    var lname = document.getElementById('lastname').value;
    var Mname = document.getElementById('fathername').value;
    var Fname = document.getElementById('mothername').value;
    var dob = document.getElementById('dob').value;
    if(fname=="" || mname=="" || lname=="" || Mname=="" || Fname=="" || dob==""){
        alert("Kindly fill all the fields");
        return false;
    }
}