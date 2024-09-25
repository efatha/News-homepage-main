let menu = document.getElementById("mySidebar");
menu.addEventListener(click, efa)

function efa(){
    document.getElementById("menuDisplay").innerHTML=`
    <ul class="ul" id="sidebar" style="transform: translateX(20%)">
      <button class="xbtn" onclick="closeMenu()">x</button>
      <div class="menuPadding">
        <li class="li0"><a href="#">Home</a></li>
        <li class="li0"><a href="#">New</a></li>
        <li class="li0"><a href="#">Popular</a></li>
        <li class="li0"><a href="#">Trending</a></li>
        <li class="li0"><a href="#">Categories</a></li>
      </div>
    </ul>`;
    document.getElementById("mySidebar").style.visibility="hidden";
}
function closeMenu() {
  document.getElementById("sidebar").style.visibility="hidden";
}