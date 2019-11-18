class MainSlider extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow( {mode: "open"} )
    }
    connectedCallback() {
        let conteiner = this.shadow
        conteiner.innerHTML = `
            <style>
                #slides{
                    position: relative;
                    height: 100vh;
                    padding: 0px;
                    margin: 0px;
                    list-style-type: none;
                    z-index: 1;
                    left: 1vw;
                }

                .slide{
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 86vw;
                    height: 100%;
                    opacity: 0;
                    z-index: 1;
                    transition: 200ms linear;
                }

                .showing{
                    opacity: 1;
                    z-index: 2;
                }

                .slide{
                    font-size: 40px;
                    padding: 40px;
                    box-sizing: border-box;
                    background: #333;
                    color: #fff;
                }

                .slide:nth-of-type(1){
                    background: url("./images/main-background.png") 100% 100% no-repeat;
                    background-size: cover;
                    
                }
                .slide:nth-of-type(2){
                    background: url("images/bed.png") 100% 100% no-repeat;
                    background-size: cover;
                }
                .slide:nth-of-type(3){
                    background: url("images/table.jpg") 100% 100% no-repeat;
                    background-size: cover;
                }
                .slide:nth-of-type(4){
                    background: url("images/beth.jpg") 100% 100% no-repeat;
                    background-size: cover;
                }
                .slide:nth-of-type(5){
                    background: url("images/sofa.jpg") 100% 100% no-repeat;
                    background-size: cover;
                }
            </style>

            <ul id="slides">
                    <li class="slide showing"></li>
                    <li class="slide"></li>
                    <li class="slide"></li>
                    <li class="slide"></li>
                    <li class="slide"></li>
            </ul>
        `
        let slides = conteiner.querySelectorAll('#slides .slide')
        let currentSlide = 0
        let slideInterval = setInterval(nextSlide,3000)

        function nextSlide(){
            slides[currentSlide].className = 'slide';
            currentSlide = (++currentSlide)%slides.length;
            slides[currentSlide].className = 'slide showing';
        }
    }
}
export default MainSlider            