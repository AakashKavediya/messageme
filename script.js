const firebaseConfig = {
  apiKey: "AIzaSyC39G8puIlMr3f-W8Kn3s3cU8_bjLiBpWo",
  authDomain: "donate-message.firebaseapp.com",
  databaseURL: "https://donate-message-default-rtdb.firebaseio.com",
  projectId: "donate-message",
  storageBucket: "donate-message.appspot.com",
  messagingSenderId: "191748802607",
  appId: "1:191748802607:web:6281434b745b0c7a965eda",
  measurementId: "G-ENH9T3NK1Z"
};

firebase.initializeApp(firebaseConfig);

var signupDB = firebase.database().ref("CreateAccount");

document.getElementById("CreateAccount").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  var name = getElementVal("firstname");
  var password = getElementVal("email");
  //   var email = getElementVal("password");
  //   var dateofBirth = getElementVal("date");
  //   var phonenumber = getElementVal("number");
  //   var branch = getElementVal("city");

  saveMessage(name, password);

  console.log(firstname, password);
  alert(
    "Your all data is valid and information is getting stored in firebase database"
  );
}

const saveMessage = (firstname, password, email, date, number, city) => {
  var newSignup = signupDB.push();
  newSignup.set({
    Name: firstname,
    Password: password
    // Email: email,
    // DateOfBirth: date,
    // PhoneNumber: number,
    // Branch: city
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// ----------------------------------------------------------------

// {
//   "uid": "bcb575f4-399c-4b2c-ad77-68e7ab5bf482",
//   "token": {
//     "sub": "bcb575f4-399c-4b2c-ad77-68e7ab5bf482",
//     "authFields": {
//       "email": "",
//       "email_verified": false,
//       "phone_number": "",
//       "name": ""
//     },
//     "firebase": {
//       "sign_in_provider": "google.com"
//     }
//   }
// }
