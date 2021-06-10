const users = `[{username:'sameel',password:'sam2123},{username:'mahesh,password:'mahi@123}]`;

if (localStorage.getItem('user') == null) {
    localStorage.setItem('user', JSON.stringify(users));
}

  
function checkLogin() {
    // e.preventDefault();
    const form = document.getElementById('login');
    const username = form.username.value;
    const password = form.password.value;


    const data = JSON.parse(localStorage.getItem('user'));
    
    for (let i = 0; i < data.length; i++) {
        console.log(users[i].username);
        if (data[i].username == username && data[i].password == password) {
            alert("You Are Logged In")
            window.location.href = "index.html";
         }


    }
  }