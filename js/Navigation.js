import LivingRoom from "./LivingRoom"


customElements.define("living-room", LivingRoom)

class Navigation extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow( {mode: "open"} )
    }
    connectedCallback () {
        let conteiner = this.shadow
        conteiner.innerHTML = `
            <style>
                
              #navigation {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 5;
                background-color: #fff;
                min-width: 220px;
                min-height: 100vh;
                text-align: end;
                padding-right: 10px;
                display: flex;
                justify-content: flex-end;
                transform: translateX(100%);
                transition: 200ms linear;
              }
              #navigation__menu {
                list-style: none;
                padding: 0;
                margin: 0;
                padding-top: 25vh;
                font-size: 14px;
              }
              .navigation__item {
                padding: 10px;
              }
              .navigation__item:last-child {
                  position: absolute;
                  bottom: 40px;
                  right: 10%;
              }
              .navigation__item__link {
                display: inline-block;
                padding: 5px;
                text-decoration: none;
                color: #c1c1c1;
                text-transform: uppercase;
                transition: 200ms linear;
              } 
              #livingRoom:after {
                position: relative;
                top: 5px;
                left: 0px;
                content: url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAA3ElEQVRIie2WIQ7CMBSGP2AWS7AEJAkXKAmGe6AIV8BxAxSeC2CwGARnIBVgOAAKSyCPlGQLtFu7jSD2maV9zf/37V9eVtNar4AZUKd4tmLwAM7AwSLfAwbAxtNeAd3ILER8Yjko+wtH3cZaDMp4LQmijOcawMhTu01JwSbI2sEd2HtqvzJzGYyBi6foBy6Dfl5xUjJYArsyDQqhMkjl/RUpMzu+IcOu5ajbUD/tID5NO8AUmJt14dP0Bpzy3DqOK4OheUoGzVCDv8ogiCqDVHz+KoLI0sEVOAapA09YBCZeIBC7TgAAAABJRU5ErkJggg==');
	            padding-left: 5px;
              }
              #office:after {
                position: relative;
                top: 5px;
                left: 0px;
                content: url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAABD0lEQVQ4je2UsWoCQRCGv5ODpLCQawMhKVJZCQYtIqRIkcLCPk+QTsHnEB9BEFIp6hPYaGUTQchBihTaJ2BxjYIsrMmwccHFFRv/amb27v/2bnY2iOMYoAL0+K8B0LKs7aMgFA/NgJLIX4GCjsdA2cH4GpiqQALWwBOQ1vmlWFsBPw6AzDYIjYWOiKsOhlalfJi4AmrA1TEBE+DbF8DsgdJoR+3Bscm/G5cA9VuaIs/pLxkCeVFXM3NnMf4E+rKgABc67hpH8wP4Am4NkwRYWgCJkWfUJKsBy1peOFSLUJs3gLZn8xegvu3BHHj3DHhENPlZjrcnFSUgAm48AyIJeDOOqA+pu+z+JHfRGfAnYAM+CyeVGq9K/gAAAABJRU5ErkJggg==');
                padding-left: 5px;
              }
              #forKids:after {
                position: relative;
                top: 5px;
                left: 0px;
                content: url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAABG0lEQVQ4je3UMSvFYRQG8N/lcgeS2BSzlLJYjTJJ2SyklEmKxXcw+AgsMpiNMvgAJt2FriglRBFuRG+df/271vdOnOV9Op33ed7OeZ9Tqdfr39jDkryxi8WOzKS/ohqJGZygF194Qw1deIm6HjyjggE8xN3BEh6ImsQxqiRwik2s4waHmMYYduJcjpo+HJRaelTCKb8VHNuYLwTSKxt4wn3gOwwF7i/VJNwMrAW/B3kj6rV9Bv8Cf0CgWBWPuA5ffIdROsNUn9HKanzJlOvGR3DUWnAzOIaT8QofXGA/8+MXygLn4dicMYHJauyOWZxlFhjBaxJYwWr0PGekue4mgSmMx+ByRtppt8Uv2sBlZoE1XBVDPm7DDOZQ+QGTVkoMioAJfQAAAABJRU5ErkJggg==');
                padding-left: 5px;
              }
              #kitchen:after {
                position: relative;
                top: 5px;
                left: 0px;
                content: url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABeUlEQVQ4jbXUMUiWURQG4Kc/MTKRmiqxlDaFiIIo50AkpEWiwRysJRzCCJdaGgWXhmisrbXFIQonF0FwCvszCKOpxRyEKNLixDG+PvLXzx8PfPDe+977vueee79zoF6vn8AVXEWvf2MGH3EGQyXuHd4kvlvivuMJZsNgBd32Jz7VUvwBjuXXm6fZGo/gZOKzGChwozie+EJWYosLze5a5v0Na/m1oacwDtGNxO04VeDOZzkCH0VngQtNUaJfWMBShSIdwml8aLCmDxdbcvAKzyoYdGECjxqsuVU0WMVKBYOI9R32hKaW0mRc4EN83WbTEQxXyaJsEK/nHhYLc+fwNi97LP+Jtb0aRGwW8DVM4kWe7nOV7CNqDbgQv4+XGMSNknlTBpcwjqe4jOv4UVXcf0r0BXewHH0k3/p8mkmzx80YTKMfB7dZ/zqfZs9eDX5irkqGuzU4nL1kt9GB1h32hOafXrSv7TpOEBcXtb+Zk+8x1YTo87+I278BKLdPkBzXZ3oAAAAASUVORK5CYII=');
                padding-left: 5px;
              }
              #accesories:after {
                position: relative;
                top: 5px;
                left: 0px;
                content: url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAABZklEQVQ4jbXTsUuVYRTH8Y9ZaYjSlCJKbUIKSqTi0KKz3MXWFnFqaWhxa6sghdC/wCEaGhpcLFBDEUShNJC7GEKETRHWoC7FA+fKy+W9vZG37/I853l5z++c33mehnK5/As7GFBfPqD/QlXKy5l9B4arvt9GZyZuwx001irtYmbfjVWMoRVv8SPW+3iMu2hBCV+wglPsYwKTaMejPIHPeIZ1XMJUCL5BGd9xC0NYjMQzeI4F7OJKFHhG3gxu4hifIm7CILbjPHEjuvwYcQNGsBeFqMwg20GFvar4JLrKcpCZWeokFbmRN4PqIdciWdYT/lZIyV8V/VgkkJI8xVe8Dp/fYzSSjxcJ5FmU5QWuoQ+H4XVKuhRW/jyvwBxe4knM4SruYS0uQ3ORQJFF79CLrXhkqZsHYVEpc6v+uYPEN8znnG+GyB/521tUi+X/LVBIsugofK48nnrRlexNAtOYxfU6Cxzh4W9VYEmgeZOE7QAAAABJRU5ErkJggg==');
                padding-left: 5px;
              }
              .navigation__item__link:hover {
                border-bottom: 1px solid #c1c1c1;
                transform: translateX(-20px);
              }
              .navigation__item:last-child>.navigation__item__link:hover {
                transform: scale(1.1, 1.1);
              }
              
            </style>

            <nav id="navigation">
				<ul id="navigation__menu">
					<li class="navigation__item">
						<a href="#livingRoom" class="navigation__item__link" id="livingRoom">Living room</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__item__link" id="office">Office</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__item__link" id="forKids">For kids</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__item__link" id="kitchen">Kitchen</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__item__link" id="accesories">Accesories</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__item__link" id="showAll">Show all categories</a>
					</li>
				</ul>
			</nav>
            
        `

        let room = conteiner.getElementById("livingRoom")
        room.onclick = function ( event ) {
            const myNode = document.getElementById("main");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }

            document.getElementById("main").appendChild(document.createElement("living-room"))
        }

        
        
    }
}
export default Navigation    