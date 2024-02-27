
function showPassword() {

    let b= document.getElementById("image")
    let a = document.getElementById("password")
    if(a.type === "password"){
        a.type = "text"
        b.src = "./logo/seen.png"
    }else{
        a.type = "password"
        b.src = "./logo/hide.png"


    }
}
