window.onload = function () {
  document.getElementById("name").innerHTML = `${sessionStorage.getItem("firstName")} ${sessionStorage.getItem("lastName")}`;
  document.getElementById("email").innerHTML = `${sessionStorage.getItem("email")}`
  document.getElementById("id").innerHTML = `${sessionStorage.getItem("userID")}`
  document.getElementById("phone").innerHTML = `${sessionStorage.getItem("phoneNumber")}`
  document.getElementById("country").innerHTML = `${sessionStorage.getItem("countryText")}`
  document.getElementById("state").innerHTML = `${sessionStorage.getItem("stateText")}`
  document.getElementById("city").innerHTML = `${sessionStorage.getItem("cityText")}`
  document.getElementById("state").innerHTML = `${sessionStorage.getItem("email")}`
  document.getElementById("refCode").innerHTML = `${sessionStorage.getItem("refCode")}`


};
