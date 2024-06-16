var countryStateInfo = {
	"Australia": {
		"Tasmania": [
			"Burnie",
			"Claremont",
            "Devonport",
            "Sandy Bay"
    ],
		"Victoria": [
			"Apollo Bay",
            "Ballarat",
            "Cowes",
            "Melbourne"
        ],
        "Western Australia": [
			"Coral Bay",
            "Esperance",
            "Exmouth",
            "Perth"
        ],
        "Queensland": [
			"Horseshoe Bay",
            "Mission Bay",
            "Picnic Bay",
            "Rockhampton"
        ]
	},
	"South Africa": {
		"Free Sate": [
			"Bethlehem",
            "Bloemfontein",
            "Clarens",
            "Parys"
        ],
		"Gauteng": [
			"City of Johannesburg Metropolitan Municipality",
            "City of Tshwane Metropolitan Municipality",
            "Ekurhuleni Metropolitan Municipality"

        ],
        "Mpumalanga": [
            "Ehlanzeni District Municipality",
			"Gert Sibande District Municipality",
            "Nkangala District Municipality"
        ],
        "Western Cape": [
            "Cape Town",
            "George",
            "Paarl",
            "Stellenbosch"
        ]
	},
    "Switzerland": {
		"Aargau":[
            "Aarau",
            "Brugg",
            "Lenzburg",
            "Zofingen"
        ],
		"Ticino": [
            "Castel San Pietro",
            "Bioggio",
            "Faido",
            "Lavizzara"
        ],
        "Zug": [
            "Blickensdorf",
            "Finstersee",
            "Gottschalkenberg",
            "Menzingen"
        ],
        "Zurich": [
            "Dubendorf",
			"Uster",
			"Winterthur",
			"Zurich"
        ]
	}
}



window.onload = function () {
  //Get html elements
  var countrySel = document.getElementById("countrySel");
  var stateSel = document.getElementById("stateSel");
  var citySel = document.getElementById("citySel");



  //Load countries
  for (var country in countryStateInfo) {
    countrySel.options[countrySel.options.length] = new Option(
      country,
      country
    );
    //Loads previous values from sessionstorage
    countrySel.value = sessionStorage.getItem("country");
  }

  //Country Changed
  countrySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    citySel.length = 1; // remove all options bar first

    if (this.selectedIndex < 1) return; // done

    for (var state in countryStateInfo[countrySel.value]) {
      stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    sessionStorage.setItem("country", countrySel.value);
    sessionStorage.setItem("countryText", countrySel.options[countrySel.val].text);
    stateSel.value = sessionStorage.getItem("state");
  };
  

  //State Changed
  stateSel.onchange = function () {
    citySel.length = 1; // remove all options bar first

    if (this.selectedIndex < 1) return; // done

    var cities = countryStateInfo[countrySel.value][this.value];
    for (var i = 0; i < cities.length; i++) {
      citySel.options[citySel.options.length] = new Option(
        cities[i],
        cities[i]
      );
    }
    sessionStorage.setItem("state", stateSel.value);
    sessionStorage.setItem("stateText", stateSel.options[stateSel.value].text);
    citySel.value = sessionStorage.getItem("city");
  };

//City Changed
citySel.onchange = function(){
    sessionStorage.setItem("city", citySel.value);
    sessionStorage.setItem("cityText", citySel.options[citySel.value].text);
}

  //get html elements
  let email = document.getElementById("email");
  let validationIconEmail = document.getElementById("validationIconEmail");
  let phoneNum = document.getElementById("phone");
  let validationIconPhone = document.getElementById("validationIconPhone");
  let firstName = document.getElementById("Firstname");
  let validationIconFirstName = document.getElementById(
    "validationIconFirstName"
  );
  let lastName = document.getElementById("lastName");
  let validationIconLastName = document.getElementById(
    "validationIconLastName"
  );
  let refCode = document.getElementById("refcode");
  let validationIconRefCode = document.getElementById("validationIconRefCode");
  let userID = document.getElementById("user");
  let validationIconUserID = document.getElementById("validationIconUserID");

  //Loads stored informotion back into the form
  loadStickyForm();

  //change icon if email corect or wrong
  email.addEventListener("input", validateEmail); //check email validation
  phoneNum.addEventListener("input", validatePhone); //check phone
  firstName.addEventListener("input", validateFirstName); //check first name
  lastName.addEventListener("input", validateLastName); //check first name
  refCode.addEventListener("input", validateRefCode); //Check if valid string
  userID.addEventListener("input", validateUserID); //Check if valid string

  //icon for email
  function validateEmail() {
    const useremail = email.value;
    if (isValidEmail(useremail)) {
      validationIconEmail.textContent = "✓"; //email correct
      validationIconEmail.style.color = "green";
    } else {
      validationIconEmail.textContent = "×"; //invalid emaill
      validationIconEmail.style.color = "red";
    }
    sessionStorage.setItem("email", useremail);
  }

  //testing email format
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  //icon for phone
  function validatePhone() {
    const userPhone = phoneNum.value;
    if (isValidPhone(userPhone)) {
      validationIconPhone.textContent = "✓";
      validationIconPhone.style.color = "green";
    } else {
      validationIconPhone.textContent = "×";
      validationIconPhone.style.color = "red";
    }
    sessionStorage.setItem("phoneNumber", userPhone);
  }

  //test valid phone number
  function isValidPhone(phoneNumber) {
    const phoneRegex = /^\d{10}$/; //matches 10 digits
    return phoneRegex.test(phoneNumber);
  }

  //icon for first name
  function validateFirstName() {
    const userFirst = firstName.value;
    if (isValidName(userFirst)) {
      validationIconFirstName.textContent = "✓";
      validationIconFirstName.style.color = "green";
    } else {
      validationIconFirstName.textContent = "×";
      validationIconFirstName.style.color = "red";
    }

    //Stores new value into sessionstorage
    sessionStorage.setItem("firstName", userFirst);
  }

  //icon for last name
  function validateLastName() {
    const userLast = lastName.value;
    if (isValidName(userLast)) {
      validationIconLastName.textContent = "✓";
      validationIconLastName.style.color = "green";
    } else {
      validationIconLastName.textContent = "×";
      validationIconLastName.style.color = "red";
    }
  }

  //test valid first or last name
  function isValidName(name) {
    const nameRegex = /^[A-Za-z]+$/; //matches any number of letters and only letters, i.e. no new line characters
    return nameRegex.test(name);
  }

  //icon for last name
  function validateLastName() {
    const userLast = lastName.value;
    if (isValidName(userLast)) {
      validationIconLastName.textContent = "✓";
      validationIconLastName.style.color = "green";
    } else {
      validationIconLastName.textContent = "×";
      validationIconLastName.style.color = "red";
    }
    sessionStorage.setItem("lastName", userLast);
  }

  //test valid first or last name
  function isValidName(name) {
    const nameRegex = /^[A-Za-z]+$/; //matches any number of letters and only letters
    return nameRegex.test(name);
  }

  //icon for ref code
  function validateRefCode() {
    const toTest = refCode.value;
    if (isValidString(toTest)) {
      validationIconRefCode.textContent = "✓";
      validationIconRefCode.style.color = "green";
    } else {
      validationIconRefCode.textContent = "×";
      validationIconRefCode.style.color = "red";
    }
    sessionStorage.setItem("refCode", toTest);
  }

  //icon for user ID
  function validateUserID() {
    const toTest = userID.value;
    if (isValidString(toTest)) {
      validationIconUserID.textContent = "✓";
      validationIconUserID.style.color = "green";
    } else {
      validationIconUserID.textContent = "×";
      validationIconUserID.style.color = "red";
    }
    sessionStorage.setItem("userID", toTest);
  }

  //test if valid string
  function isValidString(toTest) {
    const stringRegex = /.*/; //matches any character that is not the newline character
    return stringRegex.test(toTest);
  }

  //Displaying Summary
  document.addEventListener("DOMContentLoaded", function () {
    const summaryDiv = document.getElementById("summary");

    const continueButton = document.getElementById("continueButton");
    continueButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      //Saving inputs from user
      const firstNameValue = firstName.value;
      const lastNameValue = lastName.value;
      const emailValue = email.value;
      const userValue = userID.value;
      const countryValue = countrySel.value;
      const stateValue = stateSel.value;
      const cityValue = citySel.value;
      const phoneNumValue = phoneNum.value;
      const refCodeValue = refCode.value;

      const summary = `
                <h2>Summary of Entered Information:</h2>
                <p><strong>Full Name:</strong> ${firstNameValue} + " " + ${lastNameValue}</p>
                <br>
                <p><strong>Email:</strong> ${emailValue}</p>
                <br>
                <p><strong>User ID:</strong> ${userValue}</p>
                <br>
                <p><strong>Phone Number:</strong> ${phoneNumValue}</p>
                <br>
                <p><strong>Country of Residence:</strong> ${countryValue}</p>
                <br>
                <p><strong>State of Residence:</strong> ${stateValue}</p>
                <br>
                <p><strong>City of Residence:</strong> ${cityValue}</p>
                <br>
                <p><strong>Reference Code:</strong> ${refCodeValue}</p>
            `;

      summaryDiv.innerHTML = summary;
    });
  });

  function loadStickyForm() {
    //Fills in the form with information that was saved to sessionstorage
    email.value = sessionStorage.getItem("email");
    validateEmail();
    phoneNum.value = sessionStorage.getItem("phoneNumber");
    validatePhone();
    firstName.value = sessionStorage.getItem("firstName");
    validateFirstName();
    lastName.value = sessionStorage.getItem("lastName");
    validateLastName();
    userID.value = sessionStorage.getItem("userID");
    validateUserID();
    refCode.value = sessionStorage.getItem("refCode");
    validateRefCode();
  }
  var resetButton = document.getElementById("resetButton");
    
  // Reset button click event
      resetButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      
      // Reset all fields and validation icons
      countrySel.selectedIndex = 0;
      stateSel.selectedIndex = 0;
      citySel.selectedIndex = 0;
      email.value = "";
      phoneNum.value = "";
      firstName.value = "";
      lastName.value = "";
      refCode.value = "";
      userID.value = "";
      validationIconEmail.textContent = "";
      validationIconEmail.style.color = "";
      validationIconPhone.textContent = "";
      validationIconPhone.style.color = "";
      validationIconFirstName.textContent = "";
      validationIconFirstName.style.color = "";
      validationIconLastName.textContent = "";
      validationIconLastName.style.color = "";
      validationIconRefCode.textContent = "";
      validationIconRefCode.style.color = "";
      validationIconUserID.textContent = "";
      validationIconUserID.style.color = "";
      
      // Clear the summary
      var summaryDiv = document.getElementById('summary');
      summaryDiv.innerHTML = "";
  });
  
};
