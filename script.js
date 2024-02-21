var age= 12;
var isCitizen= true;
var hasRegistered= true;

if(age>=18){
  if(isCitizen){
     if(hasRegistered){
         console.log("You are eligible");
    }else{
        console.log("You are not eligible due to Registration status");
     }
  }else{
    console.log("You are not eligible due to citizenship status");
  }
}else{
    console.log("You are not eligible");
  }
   