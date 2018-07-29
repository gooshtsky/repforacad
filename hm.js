function Myfirst(name,age)
{
    alert("Hello my name is"+ name + "and this is my first app!");
    function showskills(){
        var skills=["hrml","css","js","jquerry"];
        for(var i=0;i<skills.length;i++){
           document.write("I know "+ skills[i] + "<br>")
            
        }
    }
    
    showskills();
    
    function checkage(){
        if(age>18){
            alert("Good");
        }else{
            alert("You too young");
        }
    }
    checkage();
    
    function calcpow(num){
        console.log(num*num);
    }
    calcpow(2);
}
Myfirst("Bogdan",18);