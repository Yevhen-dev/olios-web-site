import RegistrationForm from "./FormRegistration"
import SignInForm from "./SignInForm"
import checkUsers from "./fetch"
customElements.define("form-signin", SignInForm)
customElements.define("form-registration", RegistrationForm)


class HeaderLeft extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow( {mode: "open"} )
    }
    connectedCallback() {
        let conteiner = this.shadow
        conteiner.innerHTML = `

        <style>
            .header__left {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                width: 15vw;
                min-height: 100vh;
                box-shadow: 5px 0 5px #ebebeb;
                position: fixed;
                top: 0;
                left: 0;
            }
            #logo-left {
                padding: 10px;
            }
            .menu__left__list {
                padding: 0;
                display: flex;
                justify-content: space-between;
                flex-flow: column nowrap;
                align-items: center;
                list-style: none;
            }
            .menu__left__list__item:last-child {
                position: absolute;
                bottom: 20px;
            }
            .menu__left__list__item {
                padding: 20px;
            }
            .menu__left__list__item img {
                width: 20px;
                height: 20px;
            }
            #openFormRegistration, #openSignIn {
                text-decoration: none;
                text-transform: uppercase;
                background-color: #0023ff;
                color: white;
                padding: 10px;
                border-radius: 20px;
                transition: 200ms linear;
                font-size: 14px;
            }
            #openFormRegistration:hover, #openSignIn:hover {
                transform: scale(1.2);
            }
            #openSignIn {
                margin: 10px 0;
            }
            
        </style>

        <section id="header" class="header__left">
            <div id="logo-left">
                <a href="#home"><img src="media/images/logo.png" alt="logo"></a>
            </div>
            <ul class="menu__left__list">
                <li class="menu__left__list__item">
                    <a href="#home" id="home"><img id="homeImg" src="./media/images/home.svg" alt="home"></a>
                </li>
                <li class="menu__left__list__item">
                        <a href="#" id="basket"><img id="basketImg" src="./media/images/basket.svg" alt="basket"></a>
                </li>
                <li class="menu__left__list__item">
                        <a href="#" id="search"><img id="searchImg" src="./media/images/search.svg" alt="search"></a>
                </li>
                <li class="menu__left__list__item">
                        <a href="#" id="in"><img id="inImg" src="./media/images/in.svg" alt="in"></a>
                </li>
            </ul>
            
            <a id="openFormRegistration" href="#registration">Registration</a>
            <a id="openSignIn" href="#"></a>
              
        </section>
        
            

        `
        

        let home = conteiner.getElementById("home")
        home.onmouseover = function (event) {
            conteiner.getElementById("homeImg").src = "./media/images/homeBlue.svg"
        }
        home.onmouseout = function (event) {
            conteiner.getElementById("homeImg").src = "./media/images/home.svg"
        }

        let basket = conteiner.getElementById("basket")
        basket.onmouseover = function (event) {
            conteiner.getElementById("basketImg").src = "./media/images/basketBlue.svg"
        }
        basket.onmouseout = function (event) {
            conteiner.getElementById("basketImg").src = "./media/images/basket.svg"
        }

        let search = conteiner.getElementById("search")
        search.onmouseover = function (event) {
            conteiner.getElementById("searchImg").src = "./media/images/searchBlue.svg"
        }
        search.onmouseout = function (event) {
            conteiner.getElementById("searchImg").src = "./media/images/search.svg"
        }

        let iconIn = conteiner.getElementById("in")
        iconIn.onmouseover = function (event) {
            conteiner.getElementById("inImg").src = "./media/images/inBlue.svg"
        }
        iconIn.onmouseout = function (event) {
            conteiner.getElementById("inImg").src = "./media/images/in.svg"
        }

        let main = document.getElementById("main")

        let registration = conteiner.getElementById("openFormRegistration")
        registration.onclick = function (event) {
            
            event.target.style.display = "none"
            let mainText = document.getElementById("main__title")
            let mainSlider = document.getElementById("main__slider")
            
            const myNode = document.getElementById("main");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            main.appendChild(document.createElement("form-registration"))
            document.location.hash = "registration"
            fetch

            // if(main.children.length > 0) {
            //     mainText.remove()
            //     mainSlider.remove()
                
            // }

        }

        let signIn = conteiner.getElementById("openSignIn")
        signIn.onclick = function (event) {
            if (this.innerText === "SIGN OUT") {
                document.cookie = "user-login=; expires=" + new Date ( 0 ).toUTCString ()
                document.cookie = "user-pass=; expires=" + new Date ( 0 ).toUTCString ()
                this.innerText = "Sign in"
                let headeLeft = document.getElementsByTagName("header-left")[0]
                headeLeft.shadow.getElementById("header").getElementsByTagName("component-user")[0].remove()
                headeLeft.shadow.getElementById("openFormRegistration").style.display = "block"
            } else {
                main.appendChild(document.createElement("form-signin"))
                this.style.display = "none"
            }
            
        }
        
    }
}

export default HeaderLeft


// export let allUsers = []
