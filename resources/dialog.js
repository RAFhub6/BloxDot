console.log("this is in beta,this might not work")
alert("this is in beta so some things might not work")
<div id="x"></div>

<script>
var img = document.createElement("img");
 
img.src = "bdot.png";
var src = document.getElementById("x");
 
src.appendChild(img);
</script>
