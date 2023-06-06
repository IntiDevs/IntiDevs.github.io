import {links} from './constants/app.js'

const sections = document.getElementsByClassName('globalClass');

export function setNavConstants() {

    let n = 1

    for (let i = 0; i < sections.length; i++) {
                    
        document.getElementById(`g_${sections[i].id}`).textContent  = links[`link${n}`]
        n++
    }
}

export function change(val){
        
    let w
    
    switch (val) {
        
        case 'inicio':
            
            w = document.querySelector(".window");
            w.classList.add('active_inicio');

            hideSections(val);
            
            break;
    
        case 'proyectos':

            w = document.querySelector('.window2');
            w.classList.add('active_proyectos')

            hideSections(val);

            break;

        case 'nosotros':

            w = document.querySelector('.window3')
            w.classList.add('active_nosotros')

            hideSections(val);

            break;

        case 'contacto':
        
            w = document.querySelector('.window4');
            w.classList.add('active_contacto')

            hideSections(val);

            break;
            
        default:
            console.error('tas kgao manito')
            break;
    }        
}

function hideSections(val) {
    
    for (let i = 0; i < sections.length; i++) {
        if(sections[i].id == val){
            sections[i].classList.remove('hideClass')
            sections[i].classList.add('showClass')
        } else {
            sections[i].classList.add('hideClass')
            sections[i].classList.remove('showClass')
        }
    }
}

function setComponents() {

    for (let i = 0; i < sections.length; i++) {
        
        let route = `../components/${sections[i].id}.html`

        fetch(route)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(html, 'text/html')
                const content = doc.body.innerHTML
                const component = document.getElementById(sections[i].id)

                component.innerHTML = content

                const scripts = doc.querySelectorAll('script')
                
                scripts.forEach(script => {
                    const newScript = document.createElement('script')
                    newScript.textContent = script.textContent

                    const src = script.getAttribute('src')
                    const type = script.getAttribute('type')

                    if(src) {

                        newScript.setAttribute('src', src)
                    }

                    if(type) {

                        newScript.setAttribute('type', type)
                    }

                    component.appendChild(newScript)
                })
            })
            .catch(error => {
                console.error(`Error al cargar html: ${error}`)
            })
    }
}

setComponents()