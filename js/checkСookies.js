export default function checkCookies () {
    window.onload = function (event) {

        document.location.hash = "home"
    
        var newObj = {}
        document.cookie.split("; ").map( function (item, index) {
            Object.assign(newObj, {[item.split("=")[0]] : item.split("=")[1]})
        })
        if(newObj.hasOwnProperty("user-login") && newObj.hasOwnProperty("user-pass")) {
            fetch ( `https://fea-15-evgen.glitch.me/user/${newObj["user-login"]}`)
                .then(response => response.json())
                    .then(response => {
                        let headeLeft = document.getElementsByTagName("header-left")[0]
                        headeLeft.shadow.getElementById("header").appendChild(document.createElement("component-user"))
                        headeLeft.shadow.getElementById("openSignIn").textContent = "Sign out"
                        let component = headeLeft.shadow.getElementById("header").getElementsByTagName("component-user")[0]
                        component.shadow.getElementById("correctPhoto").src = response["user-photo"]
                        component.shadow.getElementById("correctLogin").innerText = response["user-name"]
                        headeLeft.shadow.getElementById("openFormRegistration").style.display = "none"        
                    } )
        } else {
            let headeLeft = document.getElementsByTagName("header-left")[0]
            headeLeft.shadow.getElementById("openSignIn").innerText = "Sign in"
                    
            }
     
    }
}

