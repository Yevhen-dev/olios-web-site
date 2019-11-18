class HeaderRightBtn extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow( {mode: "open"} )
    }
    connectedCallback () {
        let conteiner = this.shadow
        conteiner.innerHTML = `
            <style>
                #btnOpenNav {
                    position: absolute;
                    top: 10vh;
                    right: 4vw;
                    z-index: 10;
                    background-color: #fff;
                    border-radius: 30px;
                    box-shadow: 0px 1px 1vw 2px grey;
                }
                .show {
                    padding: 1.2vw;
                }
                .active {
                    
                }

                
            </style>

            <a href="#" id="btnOpenNav"><img class="show" src="media/images/hamburger.png" alt="btn-burger"></a>
            
        `

        let btn = conteiner.getElementById("btnOpenNav")
        btn.onclick = function (event) {
            if (event.target.classList.length === 1) {
                event.target.classList.add("active")
                event.target.src = "media/images/hamburger-cross.png"
                document.getElementsByTagName("nav-menu")[0].shadow.getElementById("navigation").style.transform = "translateX(0)" 
            } else {
               event.target.classList.remove("active")
               event.target.src = "media/images/hamburger.png "
               document.getElementsByTagName("nav-menu")[0].shadow.getElementById("navigation").style.transform = "translateX(100%)" 
            }  
        }
        
    }
}
export default HeaderRightBtn    