function validate(event){
    event.preventDefault();
    var apple=document.getElementById("apple").value;
    var password=document.getElementById("pass").value;
    if(apple=="123456"&&password=="RAMYA"){
        location.replace("https://ramya45r.github.io/Apple-responsive-//index.html")
        return;
    }else{
    alert("enter valid number and password");
    return;
        }
    }
    