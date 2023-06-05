import data from './constants/app.js'

const sections = document.getElementsByClassName('globalClass');

export function setConstants() {

    let n = 1

    for (let i = 0; i < sections.length; i++) {
                    
        document.getElementById(`g_${sections[i].id}`).textContent  = data.links[`link${n}`]
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
        let component = document.getElementById(sections[i].id)

        fetch(route)
            .then(response => response.text())
            .then(data => {
                component.innerHTML = data
            })
            .catch(error => {
                console.error(`Error al llamar componentes: ${error}`)
            })
    }

    return 'success'
}

setComponents()