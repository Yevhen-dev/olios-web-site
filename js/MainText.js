class MainText extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow( {mode: "open"} )
    }
    connectedCallback () {
        let conteiner = this.shadow
        conteiner.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }
                #main__title {
                    padding-left: 15px;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    text-align: center;
                    cursor: default;
                }
                #newest {
                    font-size: 12vw;
                    position: absolute;
                    top: 5vh;
                    left: 21vw;
                    color: #e9e9e9de;
                    z-index: 3;
                    transform: scaleX(1.4);
                    opacity: 0.8;
                }
                #main__title__wrap {
                    position: absolute;
                    top: 15vh;
                    left: 32vw;
                    z-index: 4;
                }
                #name {
                    font-size: 8vw;
                }
                #tagline {
                    padding-bottom: 10px;
                }
                #main__btn {
                    color: white;
                    padding: 5px 10px;
                    text-decoration: none;
                    background-color: #0023ff;
                    border-radius: 15px;
                    transition: 200ms ease;
                    display: inline-block;
                }
                #main__btn:hover {
                    transform: scale(1.2);
                }
            </style>

            <section id="main__title">
                <h2 id="newest">NEWEST</h2>
                <div id="main__title__wrap">
                    <p id="name">OLIOS</p>
                    <p id="tagline">NEWEST FURNITURE SHOP TEMPLATE</p>
                    <a href="#viewMore" id="main__btn">VIEW MORE</a>
                </div>
            </section> 
        `
        let mainBtn = conteiner.getElementById("main__btn")
        mainBtn.onclick = function (event) {
            console.log("CLICK VIEW MORE")
        }
    }
}
export default MainText    