const notify = (msg, type) => {
    let background = "";
    switch (type) {
      case "success":
        background = "linear-gradient(to right, #00b09b, #96c93d)"; // Green gradient
        break;
      case "error":
        background = "linear-gradient(to right, #ff5f6d, #ffc371)"; // Red gradient
        break;
      default:
        background = "linear-gradient(to right, #434343, #000000)"; // Black gradient
    }
    Toastify({
      text: msg,
      duration: 3000,
      gravity: "top", // top or bottom
      position: "left", // left, center or right
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: background,
      },
    }).showToast();
  };
  
  

const getInput=(id)=>{
    return document.getElementById(id).value
}
const emptyInput =()=>{
  document.getElementById("email").value=""
}

const validate = () => {

    event.preventDefault()
    let email = getInput("Useremail");
    let password = getInput("Userpassword");

      console.log("Email:", email); // Debugging log
      console.log("Password:", password); // Debugging log

    let user = {
        email,
        password
    };

    let data = JSON.parse(localStorage.getItem("data")) || [];
    console.log("Existing Data:", data);

    let userFound = data.find(item => item.email === user.email && item.password === user.password);
    console.log(userFound);

    if (!userFound) {

      notify("Invalid information has been entered", "error");
      let newData = data.filter(item => item.email !== email && item.password !== password)
      console.log(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      return
      }

       else {
      notify("User is successfully logged in", "success");
      document.getElementById("login").innerHTML=email;
       return
    }
    
};

// const validate = () => {
//   event.preventDefault()
//   let email = getInput("Useremail").trim();
//   let password = getInput("Userpassword").trim();

//   console.log("Email:", email); // Debugging log
//   console.log("Password:", password); // Debugging log

//   let user = {
//       email,
//       password
//   };

//   let data = JSON.parse(localStorage.getItem("data")) || [];

//   console.log("Existing Data:", data); // Debugging log

//   let userFound = data.filter(item => item.email !== email && item.password !== password);
//   console.log(userFound);

//   if (userFound) {
//       notify("User is successfully logged in", "success");
//       return;
//   } else {
//       notify("Invalid information has been entered", "error");
//       let newData = data.filter(item => item.email !== email || item.password !== password);
      
//       console.log("Filtered Data:", newData); // Debugging log

//       if (newData.length > 0) {
//           localStorage.setItem("data", JSON.stringify(newData));
//           console.log("Data Removed Successfully"); // Debugging log
//       } else {
//           console.log("No Users Left"); // Debugging log
//           // Optionally handle the case when no users are left
//       }
//   }
// };
// validate()
