//menü
function openNav() {
  document.getElementById("YanMenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("YanMenu").style.width = "0";
}

// Kullanıcıları saklamak için boş bir dizi oluşturuyoruz
var users = [];

// Kayıt ol formunu ele alıyoruz
var registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Formun varsayılan gönderimini engelliyoruz

  // Formdaki girdileri alıyoruz
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Kullanıcı nesnesini oluşturuyoruz
  var user = {
    name: name,
    surname: surname,
    email: email,
    password: password
  };

  // Kullanıcıyı kullanıcı dizisine ekliyoruz
  users.push(user);

  // Formu sıfırlıyoruz
  registerForm.reset();

  alert('Kayıt başarılı!'); // Kaydın başarıyla tamamlandığını kullanıcıya bildiriyoruz
});

// Giriş yap formunu ele alıyoruz
var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Formun varsayılan gönderimini engelliyoruz

  // Formdaki girdileri alıyoruz
  var loginEmail = document.getElementById('login-email').value;
  var loginPassword = document.getElementById('login-password').value;

  // Kullanıcı dizisini dolaşıyoruz ve e-posta ve şifre eşleşmesini kontrol ediyoruz
  var loggedInUser = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === loginEmail && users[i].password === loginPassword) {
      loggedInUser = users[i];
      break;
    }
  }

  if (loggedInUser) {
    window.location.href = 'index.html';

    alert('Giriş başarılı. Hoş geldiniz, ' + loggedInUser.name + ' ' + loggedInUser.surname + '!');
    loginForm.reset();
  } else {
    alert('Hatalı e-posta veya şifre!');
  }
});
