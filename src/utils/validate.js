export const validateInfo = (email,password) =>{

    //const isemail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const isemail = /^[\w.-]+@[\w-]+\.[\w-]{2,}$/.test(email);
    const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    //const isname=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(naam);
     
    if(!isemail) return "Email is not valid";
    if(!isPassword) return "Password is not valid";
    //if(!isname) return "Username not valid";

    return null;
}


  