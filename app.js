// Imported Images in a Array by giving complete url
var imges = ['320X480V2/TELA%201.png',
            '320X480V2/TELA%202.png',
            '320X480V2/TELA%20MALBEC.png',
            '320X480V2/TELA%20LILY.png',
            '320X480V2/TELA%20EGEO%20DOLCE.png',
            '320X480V2/TELA%20CTA.png'
            ];


var output = document.getElementById('output');

//Clicking Set on Image2
var clickset = 0
var bigbtn = 0

// Opening the 1st Image
openfile(imges[0])
btnsOff();

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});



// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};

// click count but it refreshes again as per page loads
function clicksnum(){
            console.log("Clicked Now !!!!!");
};

function imgoff(){
try{
    var img = document.getElementById("back");
    img.style = "display:none !important";
    console.log(img);
    }
catch(e){
        console.log("No img = ", e);
        }
};

function btnsOff(){
var btns = document.getElementsByTagName("button");
for (i=0; i<btns.length; i++){
    btns[i].style= "display:none !important";
    btns[i].style= "border:none";
    //console.log(btns[i]);
};
};

function multiplebtns(id){
var btn = document.getElementById(id);
btn.className = "selected";
};

function btnfunc(op){
//    var img= document.getElementById("back");
//    img.src = "320X480V2/CTA_VOLTAR.png";
//    img.style= "height: 30px; width: 77px; position: absolute; top: 30px;left: 36px;";
//    img.onclick = function(){btnsOff(); imgoff();op.src=imges[0]; };

    var left1 = document.getElementById("left1");
    left1.style = "position: absolute; top: 260px; left: 33px; height: 50px; background: transparent; width: 135px; border-radius: 2%;border:1px solid transparent";
    left1.onclick = function(){multiplebtns("left1");};

    var right1 = document.getElementById("right1");
    right1.style = "position: absolute; top: 260px; left: 167px; height: 50px; background: transparent; width: 135px; border-radius: 2%;border:1px solid transparent";
    right1.onclick = function(){multiplebtns("right1");};

    var left2 = document.getElementById("left2");
    left2.style = "position: absolute; top: 324px; left: 33px; height: 50px; background: transparent; width: 135px; border-radius: 2%;border:1px solid transparent";
    left2.onclick = function(){multiplebtns("left2");};

    var right2 = document.getElementById("right2");
    right2.style = "position: absolute; top: 324px; left: 167px; height: 50px; background: transparent; width: 135px; border-radius: 2%;border:1px solid transparent";
    right2.onclick = function(){multiplebtns("right2");};

    var left3 = document.getElementById("left3");
    left3.style = "position: absolute; top: 386px; left: 33px; height: 50px; background: transparent; width: 135px; border-radius: 2%;border:1px solid transparent";
    left3.onclick = function(){clickset = 3; multiplebtns("left3");};

    var right3 = document.getElementById("right3");
    right3.style = "position: absolute; top: 386px; left: 167px; height: 50px; background: transparent; width: 135px; border-radius: 2%;border:1px solid transparent";
    right3.onclick = function(){clickset = 5; multiplebtns("right3");};

    var bigbtn = document.getElementById("bigbtn");
    bigbtn.style = "position: absolute; top: 475px; left: 52px; height: 65px; background: transparent; width: 229px; border-radius: 2%; border:1px solid transparent";
    bigbtn.onclick = function(){btnsOff(); imgoff(); bigbtn = 4; if (clickset==3){op.src = imges[2]; } else if (clickset==5){op.src = imges[4];} else {op.src = imges[3];}};
}


// Clicking of 1st Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;
    //console.log("Current Img URL = ", op.src);
    //console.log("Clickset = ", clickset);
    //console.log("big btn = ", bigbtn);
    if (op.src.search('TELA%202.png') == -1)
    {
        btnsOff();
        imgoff();
    }
    if (op.src.search('TELA%201.png') > -1)
    {
        //console.log("Clicked to move 1");
        op.src = imges[1];
        //console.log("Image Changed!!!...", op.src);
        btnfunc(op);
    }
    else if (op.src.search('TELA%202.png') > -1)
    {
        //console.log("Clicked to move 2");
        op.src = imges[1];
        //console.log("Image Changed!!!...", op.src);
    }
    else if (op.src.search('TELA%20MALBEC.png') > -1 || op.src.search('TELA%20LILY.png') > -1 || op.src.search('TELA%20EGEO%20DOLCE.png') > -1)
    {
        btnsOff();
	    imgoff();
        op.src = imges[5];
	    ImageMaplast(op);
        //console.log("Image Changed!!!...", op.src);
    }
	
	else if (op.src.search('TELA%20CTA.png') > -1)
    {
		 op.src = imges[0];
		 btnsOff();
		 imgoff();
		 // window.location.href = "https://www.google.com/maps/search/oboticario";
        //console.log("Image Changed!!!...", op.src);
    }
};


function ImageMaplast(op) {

    var area = document.getElementById("maps");
    //area.onmouseover = function(){console.log("leftkey");};
    area.shape = "rect";
    area.coords = "49,301,273,360";
   // area.onmouseover = function(){console.log("left");};
    area.onclick = function(){ window.location.href = "https://www.google.com/maps/search/oboticario"; };

    var area = document.getElementById("backbtn");
    area.shape = "rect";
    area.coords = "50,377,271,435";
   //area.onmouseover = function(){console.log("bigbtn");};
    area.onclick = function(){ btnsOff(); imgoff(); op.src = imges[0]; window.location.href = ""; };
 };

// Finding a Position of Mouse Click
function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);
  
  
  
  
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};

