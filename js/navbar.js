import data from './constants/navbar.js'

function setConstants() {
    document.getElementById('a_inicio').textContent = data.links.link1
    document.getElementById('a_acerca').textContent = data.links.link2
    document.getElementById('a_servicios').textContent = data.links.link3
    document.getElementById('a_contacto').textContent = data.links.link4
}

export function changePage(idContent){
    const page = document.getElementById(idContent)
    const sections = document.getElementsByClassName('linkClass')
    for (let index = 0; index < sections.length; index++) {
        sections[index].classList.remove('active')
    }
    page.classList.add('active')
}

setConstants()