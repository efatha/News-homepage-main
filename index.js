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
    document.body.style.backgroundColor = "rgba(17, 17, 17, 0.17)";
    document.body.style.overflow = "hidden";
}
function closeMenu() {
  document.getElementById("sidebar").style.visibility="hidden";
  document.getElementById("sidebar").style.transform ="translateX(100%)";
  document.getElementById("mySidebar").style.visibility="visible";
  document.body.style.backgroundColor = "white";
  document.body.style.overflow = "";
}

document.getElementById('btn').addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const data = {
      username: username,
      email: email,
      password: password
  };

  fetch('/api/login/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Login failed');
      }
      return response.json();
  })
  .then(data => {
      // Handle successful login
      console.log('Login successful:', data);
      // Redirect or update UI accordingly
  })
  .catch(error => {
      // Display error message
      document.getElementById('error-message').innerText = error.message;
  });
});
