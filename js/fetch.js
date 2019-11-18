export default function checkUsers () {
    fetch ( "https://fea-15-evgen.glitch.me/users/all" )
        .then ( response => response.json() )
            .then ( response => {
                for(let name in response) {
                    return name
                }
            })
}


