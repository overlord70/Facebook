export function reload(arr, place) {
    place.innerHTML = ''
    let div_1 = document.createElement('div')
    
    div_1.classList.add('grid')
    
    for (const iterator of arr) {
        
        let div_2 = document.createElement('div')
        let h2 = document.createElement('h2')
        let p_1 = document.createElement('p')
        let p_2 = document.createElement('p')
        let p_3 = document.createElement('p')
        let a = document.createElement('a')
        let button = document.createElement('button')
        
        h2.innerHTML = iterator.name
        h2.style.marginBottom = '10px'
        p_1.innerHTML = 'Company: ' + iterator.company.name
        p_2.innerHTML = 'Website: ' + iterator.website
        p_3.innerHTML = 'Phone: ' + iterator.phone
        p_3.style.marginBottom = '10px'
        a.href = './personal_details.html?id=' + iterator.id
        a.innerHTML = 'Подробнее'
        button.classList.add('btn')
        div_2.classList.add('bg')
        
        button.append(a)
        div_2.append(h2, p_1,p_2, p_3, button)
        div_1.append(div_2)
        place.append(div_1)
        
    }
}
