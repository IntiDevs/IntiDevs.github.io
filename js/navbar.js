import data from './constants/app.js'

export function setConstants() {
    try {
        
        document.getElementById('g_inicio').textContent = data.links.link1
        document.getElementById('g_proyectos').textContent = data.links.link2
        document.getElementById('g_nosotros').textContent = data.links.link3
        document.getElementById('g_contacto').textContent = data.links.link4
    } catch (error) {
        console.error(`error asignando variables globales, ${error}`)
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

    const sections = document.getElementsByClassName('globalClass');
    
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