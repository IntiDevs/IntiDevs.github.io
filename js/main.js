import {links} from './constants/app.js'

const sections = document.getElementsByClassName('globalClass');

export function setNavConstants() {

    let n = 1

    for (let i = 0; i < sections.length; i++) {
                    
        document.getElementById(`g_${sections[i].id}`).textContent  = links[`link${n}`]
        n++
    }
}

export function change(val) {

    const component = document.getElementById(val)
    component.classList.add(`active_${val}`)

    hideSections(val)

    return 'success'
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

                const links = doc.querySelectorAll('link')

                links.forEach(link => {

                    const newLink = document.createElement('link')
                    newLink.textContent = link.textContent

                    const rel = link.getAttribute('rel')
                    const href = link.getAttribute('href')

                    if(rel) {

                        newLink.setAttribute('rel', rel)
                    }

                    if(href) {

                        newLink.setAttribute('href', href)
                    }

                    component.appendChild(newStyle)
                })

                const styles = doc.querySelectorAll('style')

                styles.forEach(style => {

                    const newStyle = document.createElement('style')
                    newStyle.textContent = style.textContent

                    component.appendChild(newStyle)
                })
            })
            .catch(error => {
                console.error(`error al cargar un componente: ${error}`)
            })
    }
}

setComponents()