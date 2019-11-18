class RegistrationForm extends HTMLElement {
    constructor () {
        super()
        let shadow = this.attachShadow ( { mode: 'open' } )

        let style = shadow.appendChild(document.createElement("style"))
        style.textContent = `  
            #conteiner-form {
                display: block;
                padding: 5px;
            }
            #title {
                text-align: center;
            }
            #form {
                padding: 10px;
            }
            .conteiner-input {
                padding: 5px;
            }
            label {
                padding-right: 15px;
            }
            #wrap-photo {
                display: flex;
                flex-flow: row wrap;
            }
            #preiew-photo {
                width: 100px;
                height: 100px;
            }
            .wrong {
                display: none;
                padding: 5px 0;
                color: red;
                font-size: 12px;
                font-style: italic;
            }
            
        `
        let section = shadow.appendChild(document.createElement("section"))
        section.id = "conteiner-form"
        section.style = `
                width: 400px; 
                display:flex;
                flex-flow: column nowrap;
                margin: 10px; 
                position: relative;  
		`

        let title = section.appendChild(document.createElement("h1"))
        title.id = "title"
        title.textContent = "Registration form"

        let form = section.appendChild(document.createElement("form"))
        form.id = "form"

        let wrapLogin = form.appendChild(document.createElement("div"))
        wrapLogin.id = "wrap-login"
        wrapLogin.className = "conteiner-input"
        let labelLogin = wrapLogin.appendChild(document.createElement("label"))
        labelLogin.textContent = "Login"
        let inputLogin = wrapLogin.appendChild(document.createElement("input"))
        inputLogin.type = "text"
        let wrongLogin = wrapLogin.appendChild(document.createElement("span"))
        wrongLogin.textContent = "Enter login"
        wrongLogin.className = "wrong"
        let wrongLoginValue = wrapLogin.appendChild(document.createElement("span"))
        wrongLoginValue.textContent = "Login already exists"
        wrongLoginValue.className = "wrong"

        let allUsers = []    


        inputLogin.onchange = function (event) {
            fetch ( "https://fea-15-evgen.glitch.me/users/all" )
                .then ( response => response.json() )
                    .then ( response => {
                        for(let name in response) {
                            allUsers.push(name)
                        }
                    })
        }

        function validationLogin () {
            if(inputLogin.value.length === 0) {
                inputLogin.style.border = `1px solid red`
                wrongLogin.style.display = "block"
                return false
            } else if (allUsers.indexOf(inputLogin.value) === 1) {
                inputLogin.style.border = `1px solid red`
                wrongLoginValue.style.display = "block"
                return false
            } else {
                inputLogin.removeAttribute("style")
                wrongLogin.style.display = "none"
                wrongLoginValue.style.display = "none"
            }
        }

        let wrapName = form.appendChild(document.createElement("div"))
        wrapName.id = "wrap-name"
        wrapName.className = "conteiner-input"
        let labelName = wrapName.appendChild(document.createElement("label"))
        labelName.textContent = "Name"
        let inputName = wrapName.appendChild(document.createElement("input"))
        inputName.type = "text"
        inputName.name = "user-name"
        let wrongName = wrapName.appendChild(document.createElement("span"))
        wrongName.textContent = "Enter name"
        wrongName.className = "wrong"
        function validationName () {
            if(inputName.value.length === 0) {
                inputName.style.border = `1px solid red`
                wrongName.style.display = "block"
                return false
            } else {
                inputName.removeAttribute("style")
                wrongName.style.display = "none"
            }
        }


        let wrapEmail = form.appendChild(document.createElement("div"))
        wrapEmail.id = "wrap-email"
        wrapEmail.className = "conteiner-input"
        let labelEmail = wrapEmail.appendChild(document.createElement("label"))
        labelEmail.textContent = "Email"
        let inputEmail = wrapEmail.appendChild(document.createElement("input"))
        inputEmail.type = "text"
        inputEmail.name = "user-email"
        let wrongEmail = wrapEmail.appendChild(document.createElement("span"))
        wrongEmail.textContent = "Enter email"
        wrongEmail.className = "wrong"
        function validationEmail () {
            var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if( reg.test( inputEmail.value ) === false || inputEmail.value.length === 0 ) {
                wrongEmail.style.display = "block"
                inputEmail.style.border = `1px solid red`
                return false
            }else {
                inputEmail.removeAttribute("style")
                wrongEmail.style.display = "none"
            }
        }

        let wrapPhoto = form.appendChild(document.createElement("div"))
        wrapPhoto.id = "wrap-photo"
        wrapPhoto.className = "conteiner-input"
        let preiewPhoto = wrapPhoto.appendChild(document.createElement("img"))
        preiewPhoto.id = "preiew-photo"
        preiewPhoto.src = "https://image.flaticon.com/icons/png/512/121/121693.png"

        let labelPhoto = wrapPhoto.appendChild(document.createElement("label"))
        labelPhoto.textContent = "Select photo"
        labelPhoto.style = `align-self: center; padding-left: 10px; cursor: pointer; color: #0023ff; flex-basis: 50%; text-align: center;`

        let titlePhoto = labelPhoto.appendChild(document.createElement("span"))
        titlePhoto.textContent = "no file..."
        titlePhoto.style = `display: block; color: red;`

        let inputPhoto = labelPhoto.appendChild(document.createElement("input"))
        inputPhoto.type = "file"
        inputPhoto.style = `display: none;`

        let inputPhotoHidden = wrapPhoto.appendChild(document.createElement("input"))
        inputPhotoHidden.type = "hidden"
        inputPhotoHidden.name = "user-photo"
        let wrongPhoto = wrapPhoto.appendChild(document.createElement("span"))
        wrongPhoto.textContent = "Select an image less than 300 kb"
        wrongPhoto.className = "wrong"
        let wrongPhotoSelect = wrapPhoto.appendChild(document.createElement("span"))
        wrongPhotoSelect.textContent = "Select image"
        wrongPhotoSelect.className = "wrong"
        inputPhoto.onchange = function (event) {
         let defaultPhoto = "https://image.flaticon.com/icons/png/512/121/121693.png"
         let avatar = event.target.files[0]
         if (avatar.type.split("")[0] === "image" || avatar.size < 300000) {
            wrongPhoto.style.display = "none"
            let photo = new FileReader(avatar)
            photo.onload = function (event) {
                inputPhotoHidden.value = event.target.result
            }
            photo.readAsDataURL(avatar)
            preiewPhoto.src = URL.createObjectURL(avatar)
            titlePhoto.style.color = "green"
            titlePhoto.textContent = avatar.name
            wrongPhotoSelect.style.display = "none"
        } else {
            titlePhoto.style.color = "red"
            titlePhoto.textContent = "no file..."
            preiewPhoto.src = defaultPhoto
            inputPhotoHidden.value = ""
            wrongPhoto.style.display = "block"
            wrongPhotoSelect.style.display = "none"
         }
        }

        function validationPhoto () {
        if( inputPhotoHidden.value.length === 0 ) {
            wrongPhotoSelect.style.display = "block"
            return false
        } else {
            return null
         }
        }

        let wrapPass = form.appendChild(document.createElement("div"))
        wrapPass.id = "wrap-password"
        wrapPass.className = "conteiner-input"
        let conteinerPass = wrapPass.appendChild(document.createElement("div"))
        let labelPass = conteinerPass.appendChild(document.createElement("label"))
        labelPass.textContent = "Password"
        let inputPass = conteinerPass.appendChild(document.createElement("input"))
        inputPass.type = "password"
        let conteinerPassRepeat = wrapPass.appendChild(document.createElement("div"))
        conteinerPassRepeat.style = "padding: 5px 0;"
        let labelPassRepeat = conteinerPassRepeat.appendChild(document.createElement("label"))
        labelPassRepeat.textContent = "Repeat password"
        let inputPassRepeat = conteinerPassRepeat.appendChild(document.createElement("input"))
        inputPassRepeat.type = "password"
        let wrongPass = wrapPass.appendChild(document.createElement("span"))
        wrongPass.textContent = "Password must be at least 6 characters long and include numbers and upper case letters."
        wrongPass.className = "wrong"
        let inputPassHash = conteinerPassRepeat.appendChild(document.createElement("input"))
        inputPassHash.type = "hidden"
        inputPassHash.name = "user-pass"

        function validationPassword () {
            let reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
            if( reg.test(inputPass.value) === false || inputPass.value !== inputPassRepeat.value ) {
                inputPass.style = "border: 1px solid red;"
                inputPassRepeat.style = "border: 1px solid red;"
                wrongPass.style.display = "block"
                return false
            } else {
               inputPass.removeAttribute("style")
               inputPassRepeat.removeAttribute("style")
               wrongPass.style.display = "none" 
               inputPassHash.value = Sha256.hash(inputPass.value)
             }
        }


        let sendForm = section.appendChild(document.createElement("button"))
        sendForm.textContent = "Create account"
        sendForm.id = "submit"
        sendForm.onclick =  function(event) {
            if (validationLogin() === false |
                validationName() === false |
                validationEmail() === false |
                validationPhoto() === false |
                validationPassword() === false ) {
                    return null 
            } else {
                let formData = new FormData(form)
                let userData = {}
                formData.forEach (
                   ( val, key ) => Object.assign ( userData, { [key]: val } )
                )
                fetch ( `https://fea-15-evgen.glitch.me/user/${inputLogin.value}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify ( userData )
                } )
                    .then( response => response.json() )
                        .then ( response => console.log(response) )
                document.cookie = `user-login=${inputLogin.value}`
                document.cookie = `user-pass=${inputPassHash.value}`
                document.location.hash = "#home"         
             }
        }

    }    
}

export default RegistrationForm