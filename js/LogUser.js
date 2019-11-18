class NameUser extends HTMLElement {
    constructor () {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } ) 
    }
    connectedCallback() {
        let conteiner = this.shadow
        conteiner.innerHTML = `
        <div class="login-user">
            <img src="#" id="correctPhoto">
            <p id="correctLogin"></p>
        </div>
        `
    }

    
}
export default NameUser