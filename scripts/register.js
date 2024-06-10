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
  
  let data = JSON.parse(localStorage.getItem("data")) || [];

const getInput=(id)=>{
    return document.getElementById(id).value
}


const setdata=()=>{
localStorage.setItem("data" , JSON.stringify(data))
}

const radId=()=>{
    return Math.random().toString(36).slice(2)
}

const createHandle =()=>{
 
    event.preventDefault()
    let email= getInput("email").trim()
    let password=getInput("password").trim()
    if(!password || !email){
        notify("Please fill all fields" ,"error")
    }
    let createdAt=new Date()
    let id =radId()
    
    let user={
        email,
        password,
        createdAt,
        id
    }
 
     data = JSON.parse(localStorage.getItem("data")) || [];
    let checkUser=data.some(existingUser => existingUser.email === email)
    // Check if the user already exists based on email
    if (checkUser) {
        notify("User already exists", "error");
    } else {
        data.push(user);
        setdata(data); // Save updated data
        window.location.href = "login.html";
        notify("User is successfully registered", "success");
    }
};

    

