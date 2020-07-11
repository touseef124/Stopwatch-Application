function seemore(){
    //full text that was hidden
    var text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit exercitationem fugit consequuntur saepe dolorem doloremque autem doloribus sapiente, aut tempora deserunt ducimus vitae voluptatum ratione eius? Est fugiat soluta laborum.";
    //this line get set the text into id=para to element para
    var para=document.getElementById('para')
    //reassigning the value of para 
        para.innerHTML=text;
}

function greeting(){
    var word=document.getElementById("hello");
    greeting="Hello World";
    word.innerHTML=greeting;
}





function small(){
    var image=document.getElementById('profile');
    image.className="change-size";
}




//this function is for class that already contain class so we add + sign to overright the class 
function small2(){
    var image=document.getElementById('pro')
    image.className +=" change-size"
}


function changeimg(){
    var word=document.getElementById("evai");
    word.className += "correct";
    word.src="104857120_1394462787431483_6116374580513210040_o.jpg";
    word.style.width="300px "
}

function returnimg(){
    var word=document.getElementById("evai");
    word.className += "correct";
    word.src="profile.jpg";
}


var para=document.getElementsByTagName("p");
for(i=0;i<para.length;i++)
{
para[i].style.color="darkSlateGrey"
para[i].style.fontWeight="bold";}


var paro=document.getElementById("parent");
var pajero=paro.getElementsByTagName("p");
for(i=0;i<pajero.length;i++)
{
pajero[i].style.color="yellow"
pajero[i].style.fontWeight="bold";}
pajero[2].style.color="red";

