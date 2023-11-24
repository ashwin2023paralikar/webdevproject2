//Code for Contact Form Validation
function fun1()
    {
        x=document.getElementById("text1").value;
        y=document.getElementById("text2").value;
        if(x=="")
        {
      document.getElementById("text1").value="Enter your Name";
        }
        if(y=="")
        {
      document.getElementById("text2").value="Enter subject";
        }
    }