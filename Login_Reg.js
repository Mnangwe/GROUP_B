
  
const signUp = e => {
    let email = document.getElementById('emailInput').value,
        pwd = document.getElementById('floatingPwd').value,
        confirmaton = document.getElementById('pwdConfirm').value;
       
        
        // campare password and confirmation paswword
    
        if(pwd!== confirmaton){
            alert("password does not match");
            return false;
        }
        if(pwd == "" ){
            alert("Please fill in the required info")
            return true;
        }
        
        let formData = JSON.parse(localStorage.getItem('formData')) || [];

        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
        data.email == email && 
        data.pwd == pwd
        );
    //check if user does not exit
     if(!exist){
         formData.push({ email, pwd, confirmaton });
         localStorage.setItem('formData', JSON.stringify(formData));
         document.querySelector('.theForm').reset(); // resetting the form
         //document.getElementById('').focus();
         alert("Account Created.\n\n Please click ok to continue.");
         location.href="../index.html"
        
     }
     else{
         alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
     }
     //stops from loading
     e.preventDefault(); 

}
// the sign in function 
function signIn(e) {
    let email = document.getElementById('emailInput').value;
    let pwd = document.getElementById('floatingPwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email == email && data.pwd == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        alert("WELCOME"); 
        location.href = "index.html";
    }
    e.preventDefault();
}
