let modeBtn = document.querySelector("#mode");
let currMode = "light";
let changeMode = () => {
    if(currMode === "light"){
      currMode = "dark";
      document.querySelector("body").style.backgroundColor = "black";
    }else{
      currMode = "light";
      document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
}
modeBtn = addEventListener( "click", changeMode );









