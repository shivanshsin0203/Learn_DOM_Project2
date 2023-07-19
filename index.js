var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var a=this.innerHTML;
      console.log(a);
      sound(a);
    }
  )
      
} 
document.addEventListener("keypress",function(b){
    sound(b.key);
  })
function sound(key){
switch(key)
      {
        case "w":
            var ta=new Audio("sounds/crash.mp3");
            ta.play();
            break;
        case "a":
            var tq=new Audio("sounds/kick-bass.mp3");
            tq.play();
            break;
            case "s":
                var tq=new Audio("sounds/snare.mp3");
                tq.play();
                break;
                case "d":
                    var tq=new Audio("sounds/tom-1.mp3");
                    tq.play();
                    break;
                    case "j":
                    var tq=new Audio("sounds/tom-2.mp3");
                    tq.play();
                    break;
                    case "k":
                    var tq=new Audio("sounds/tom-3.mp3");
                    tq.play();
                    break;
                    case "l":
                    var tq=new Audio("sounds/tom-4.mp3");
                    tq.play();
                    break;
      }
    }