import NameUser from "./LogUser"
customElements.define("component-user", NameUser) 

class SignInForm extends HTMLElement {
    constructor () {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } )
    }
    connectedCallback() {
        let conteiner = this.shadow
        conteiner.innerHTML = `
            <style>
                #form-sing-in {
                    width: 250px;
                    text-align: center;
                    text-transform: none;
                    padding: 10px;
                }

                #close-form {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                }
                .title {
                    padding: 5px 0;
                }
                #btn-logIn-site {
                    color: black;
                    text-decoration: none;
                    font-weight: bold;
                }
                .wrong {
                    display: none;
                    padding: 5px 0;
                    color: red;
                    font-size: 12px;
                    font-style: italic;
                }
                #btn-logIn-site:hover {
                    color: #0023ff;
                    transition: 200ms linear;
                }
                .wrap-inputLogin{
                    padding: 5px 0;
                }
                .wrap-inputPass {
                    padding: 5px 0;
                }
            </style>


            <form id="form-sing-in">
                <a id="close-form" href="#"><img src="media/images/closeForm.png"></a>

                <div class="wrap-inputLogin">
                    <input id="login" type="text" placeholder="Login...">
                    <span class="wrong" id="wrongLogin">Enter correct login</span>
                </div>
                <div class="wrap-inputPass">
                    <input id="password" type="password" placeholder="Password">
                    <span class="wrong" id="wrongPass">Enter correct password</span>
                    <input id="pass" type="hidden">
                </div>
                <a href="#" id="btn-logIn-site">Log in</a>
            </form>
        `
        let btnClose = conteiner.getElementById("close-form")
        btnClose.onclick = function (event) {
            document.getElementsByTagName("form-signin")[0].remove()
            document.getElementsByTagName("header-left")[0].shadow.getElementById("openSignIn").style.display = "block"
        }

        let login = conteiner.getElementById("login")
        let wisiblePass = conteiner.getElementById("password")
        let hashPass = conteiner.getElementById("pass")
        wisiblePass.onchange = function (event) {
            hashPass.value = Sha256.hash(this.value)
        }

        function validationLogin () {
            if(login.value.length === 0) {
                login.style = "border:1px solid red;"
                conteiner.getElementById("wrongLogin").style.display = "block"
                return false
            } else {
                login.removeAttribute("style")
                conteiner.getElementById("wrongLogin").style.display = "none"
            }
        }

        function validationPassword () {
            if ( wisiblePass.value.length === 0 ) {
                wisiblePass.style = "border:1px solid red;"
                conteiner.getElementById("wrongPass").style.display = "block"
                return false
            } else {
                wisiblePass.removeAttribute("style")
                conteiner.getElementById("wrongPass").style.display = "none"
            }
        }

        let btnEnterSite = conteiner.getElementById("btn-logIn-site")
        btnEnterSite.onclick = function (event) {
            if( validationLogin() !== false & validationPassword() !== false ) {
                fetch( `https://fea-15-evgen.glitch.me/user/${login.value}` )
                    .then (response => response.json())
                        .then(response => {
                            if(response.error === 404) {
                                login.style = "border:1px solid red;"
                                conteiner.getElementById("wrongLogin").style.display = "block"  
                            } if (response["user-pass"] !== hashPass.value ) {
                                wisiblePass.style = "border:1px solid red;"
                                conteiner.getElementById("wrongPass").style.display = "block"
                            } else {
                                let headeLeft = document.getElementsByTagName("header-left")[0]
                                headeLeft.shadow.getElementById("header").appendChild(document.createElement("component-user")) 
                                document.getElementsByTagName("form-signin")[0].remove()
                                headeLeft.shadow.getElementById("openSignIn").style.display = "block"
                                headeLeft.shadow.getElementById("openSignIn").innerText = "Sign out"
                                let component = headeLeft.shadow.getElementById("header").getElementsByTagName("component-user")[0]
                                component.shadow.getElementById("correctPhoto").src = response["user-photo"]
                                component.shadow.getElementById("correctLogin").innerText = response["user-name"]
                                headeLeft.shadow.getElementById("openFormRegistration").style.display = "none"
                                document.cookie = `user-login=${login.value}; expires=${new Date("2020")}`
                                document.cookie = `user-pass=${hashPass.value}; expires=${new Date("2020")}`
                            }
                        })
            }
        }
    }
}    

export default SignInForm