import css from "../css/main.css"
import HeaderLeft from "./HeaderLeft"
import MainText from "./MainText"
import MainSlider from "./MainSlider"
import checkCookies from "./checkСookies"
import HeaderRightBtn from "./HeaderRightButton"
import Navigation from "./Navigation"


checkCookies()

customElements.define("header-left", HeaderLeft)
customElements.define("main-title", MainText)
customElements.define("main-slider", MainSlider)
customElements.define("btn-nav", HeaderRightBtn)
customElements.define("nav-menu", Navigation)



window.onhashchange = function (event) {
    
    if (document.location.hash === "#home") {
        
        let main = document.getElementById("main")
        if (main.children.length > 1) {
            document.getElementsByTagName("main-title")[0].remove()
        }
        
        
        main.children[0].remove()
        let slider = main.appendChild(document.createElement("main-slider"))
        let title = main.appendChild(document.createElement("main-title"))
        title.id = "main__title"
        slider.id = "main__slider"
        let headeLeft = document.getElementsByTagName("header-left")[0]
        headeLeft.shadow.getElementById("openFormRegistration").style.display = "block"
        headeLeft.shadow.getElementById("openSignIn").style.display = "block"
        if (main.getElementsByTagName("form-signin")[0] !== undefined ) {
            main.getElementsByTagName("form-signin")[0].remove()
        } else if (headeLeft.shadow.getElementById("openSignIn").innerText === "SIGN OUT") {
            headeLeft.shadow.getElementById("openFormRegistration").style.display = "none"
        }
        
    } else if (document.location.hash === "#livingRoom") {
        let headeLeft = document.getElementsByTagName("header-left")[0]
        if (headeLeft.shadow.getElementById("openSignIn").innerText === "SIGN IN") {
            headeLeft.shadow.getElementById("openFormRegistration").style.display = "block"
        }
    }
}




