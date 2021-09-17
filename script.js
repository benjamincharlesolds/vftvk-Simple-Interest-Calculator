function compute()
{
   var principal = document.getElementById("principal").value;
   var years = document.getElementById("years").value;
   var rate = document.getElementById("inter").value;
   var interest = principal * rate / 10 ;
   var futureyear = parseInt(years) + 2021;
   
   if(principal == 0 || principal == "" || principal < 0){
     alert("enter a positive number");
     document.getElementById("principal").focus();
     return;
   }
  
   document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>. <br> at an interest rate of <mark>${rate}</mark>.<br> You will receive an amount of <mark>${interest}</mark>,<br> in the year <mark>${futureyear}</mark>`;

    
}
   var slider = document.getElementById("inter");
   var output = document.getElementById("demo");
   slider.oninput = function() {
   output.innerHTML = this.value + "%";
}