class LivingRoom extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow( {mode: "open"} )
    }
    connectedCallback () {
        let conteiner = this.shadow
        conteiner.innerHTML = `
            <style>

                .living-room {
                    padding: 10px 20px;
                    margin-left: 16px;
                    background-color: #f0f0f0;
                    min-height: 100vh;
                    font-size: 14px;
                }
                .living-room__header {
                    font-family: 'latobold', Arial, sans-serif;
                    text-transform: uppercase;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .living-room__header-title {
                    font-size: 42px;
                }
                .living-room__header-name_categorie {
                    color: #c1c1c1;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    position: absolute;
                    right: 25vw;
                }
                .living-room__header-name_categorie:after {
                    content: " ";
                    width: 20px;
                    height: 20px;
                    background-image: url("./media/images/living_room_icon.png");
                    background-size: 100% 100%;
                    margin-left: 5px; 
                }
                .living-room__products {
                    
                    position: relative;
                    justify-content: space-between;
                    list-style: none;
                    top: 0;
                    left: 0;
                    margin: 0;
                    height: 540px;
                    padding: 0;
                    width: 86%;
                    margin-left: 5%;
                }
                
                .living-room__products__item {
                   display: inline-block;
                    position : absolute;
                    margin-top: 20px;
                    background-color: #fff;
                    transition: 200ms linear;
                }
                .wrap-img {
                    text-align: center;
                }
                .wrap-img>img {
                    width: 100px;
                }
                .living-room__products__item__link {
                    text-decoration: none;
                    color: #000;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: 200ms ease;
                    padding: 5px;
                }
                .living-room__products__item:hover {
                    box-shadow: 5px 5px 5px #c1c1c1;
                }
                .wrap-img {
                    flex-grow: 1;
                }
                .living-room__products__item__link__information {
                    flex-grow: 2;
                }
                .living-room__products__item__link__information {
                    display: inline-block;
                    padding: 0 10px;
                    font-family: 'latolight', Arial, sans-serif;
                }
                .living-room__products__item__link__information>h2{
                    text-transform: uppercase;
                    font-weight: 800;
                }
                .living-room__products__item__link__information>p{
                    font-size: 12px;
                    padding: 2% 0;
                }
                .living-room__products__item__link__information>span{
                    font-family: 'latobold', Arial, sans-serif;
                    font-weight: bold;
                    color: #0023ff;
                }
                // .living-room__products__item:nth-child(2n) {
                //     flex-basis: 73%;
                
                // }
                // .living-room__products__item:nth-child(4n) {
                //     flex-basis: 46%;
                // }
                .living-room__products__item:nth-child(2n)>.living-room__products__item__link{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 5px 5px;	
                }
                .living-room__products__item:nth-child(2n)>.living-room__products__item__link>.wrap-img {
                    min-width: 49%;
                }
                .living-room__products__item:nth-child(2n)>.living-room__products__item__link>.living-room__products__item__link__information {
                    min-width: 50%;
                }
                #redSeat{
                    top: 0;
                    left: 0;
                    width: 22%;
                    height: 45%;
                }
                #table {
                    top: 0;
                    left: 24%;
                    height: 45%;
                    width: 58%;
                }
                #blueSeat {
                    top: 36vh;
                    left: 0;
                    width: 22%;
                    height: 45%;
                }
                #bed {
                    top: 36vh;
                    left: 24%;
                    width: 34%;
                    height: 45%;
                }
                #darkSeat {
                    top: 36vh;
                    left: 60%;
                    width: 22%;
                    height: 45%;
                }

                #table img{
                    width: 200px;
                    height: 200px;
                }
                #bed img{
                    width: 170px;
                    height: 200px;
                }
                
                #blueSeat h2 {
                    font-size: 24px;
                }
                #bed h2 {
                    font-size: 18px;
                }
                #darkSeat h2{
                    font-size: 22px;
                }

                .living-room__link {
                    text-align: center;
                    position: absolute;
                    bottom: 8vh;
                    left: 40%;
                }
                
                .living-room__link-show {
                    font-family: 'latobold', Arial, sans-serif;
                    text-decoration: none;
                    text-transform: uppercase;
                    color: #0023ff;
                    transition: 200ms ease;
                }
                .living-room__link-show:hover {
                    border-bottom: 1px solid #0023ff;
                }      
                
                

            </style>

            <section class="living-room">

                <div class="living-room__header">
                    <h2 class="living-room__header-title">Products</h2>
                    <span class="living-room__header-name_categorie">Living room</span>
                </div>


                <ul class="living-room__products">
                    <li id="redSeat" class="living-room__products__item">
                        <a class="living-room__products__item__link" href="#">
                            <div class="wrap-img">
                                <img src="media/images/red-seat.png" alt="red seat">
                            </div>
                            
                            <div class="living-room__products__item__link__information">
                                <h2>Red seat</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                <span>$45</span>
                            </div>
                        </a>
                    </li>
                    <li id="table" class="living-room__products__item">
                        <a class="living-room__products__item__link long-item" href="#">
                            <div class="wrap-img">
                                <img src="media/images/white-table.png" alt="white table">
                            </div>
                            
                            <div class="living-room__products__item__link__information">
                                <h2>White table</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                <span>$350</span>
                            </div>
                        </a>
                    </li>

                    <li id="blueSeat" class="living-room__products__item">
                        <a class="living-room__products__item__link" href="#">
                            <div class="wrap-img">
                                <img src="media/images/blue-seat.png" alt="blue seat">
                            </div>
                            
                            <div class="living-room__products__item__link__information">
                                <h2>Blue seat</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                <span>$35</span>						
                            </div>
                        </a>
                    </li>
                    <li id="bed" class="living-room__products__item">
                        <a class="living-room__products__item__link" href="#">
                            <div class="wrap-img">
                                <img src="media/images/modern-bed.png" alt="modern bed">
                            </div>
                            
                            <div class="living-room__products__item__link__information">
                                <h2>Modern bed</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                <span>$120</span>						
                            </div>
                        </a>
                    </li>
                    <li id="darkSeat" class="living-room__products__item">
                        <a class="living-room__products__item__link" href="#">
                            <div class="wrap-img">
                                <img src="media/images/dark-seat.png" alt="dark seat">
                            </div>
                            
                            <div class="living-room__products__item__link__information">
                                <h2>Dark seat</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                <span>$50</span>						
                            </div>
                        </a>
                    </li>
                </ul>

                <div class="living-room__link">
                    <a href="#" class="living-room__link-show">Show more products</a>
                </div>

                
            </section> 
            
        `

        
        
    }
}
export default LivingRoom    









          