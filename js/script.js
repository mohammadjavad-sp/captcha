let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let input = document.getElementById("input");
let captcha = document.getElementById("captcha");
let login = document.getElementById("login");
captcha.innerHTML = `${Math.trunc(Math.random() * 100000)}`;
let num = captcha.innerHTML;

login.addEventListener("click", function () {
  let value = input.value;
  let first = firstName.value;
  let last = lastName.value;
  if (value == num) {
    alert(`${first} ${last} عزیز به پنل کاربری خود خوش آمدید`);
  } else {
    alert("کد کپچا اشتباه وارد شده است");
  }
});
