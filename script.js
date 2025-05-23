const shareCircle = document.querySelector(".share-circle");
const toolTip = document.querySelector(".tooltiptext");
const shareIconPath = document.querySelector(".share-icon path");
const mobileShare = document.querySelector(".mobile-share");
const brunoInfo = document.querySelector(".bruno-info");

 function toggleShare(){

  if(window.innerWidth <= 767){
    brunoInfo.style.display = "none";
    mobileShare.style.display = "flex" 
  }else{
    toolTip.style.visibility = "visible";
    shareCircle.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIconPath.style.fill= "#fff";
  }

 }

 shareCircle.addEventListener("click", toggleShare);


//Except share icon and tooltip, click anywhere on screen to hide tooltip.
 document.addEventListener('click', (event) => {

    if(window.innerWidth <= 767 && !shareCircle.contains(event.target) && !mobileShare.contains(event.target)){
      mobileShare.style.display = 'none';
      brunoInfo.style.display = "flex";
    }else{
      if (!shareCircle.contains(event.target) && !toolTip.contains(event.target)) {
        toolTip.style.visibility = 'hidden';
        shareCircle.style.backgroundColor = "hsl(210, 46%, 95%)";
        shareIconPath.style.fill= "#6E8098";
      }
    }

  });
