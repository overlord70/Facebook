
 const id =  location.search.split('=').at(-1)
 let span_1 = document.querySelector('.number')
 let span_2 = document.querySelector('.user_name')
 let p = document.querySelector('p')
 fetch('http://localhost:8080/users/' +id)
 .then(res => res.json())
 .then(res => {
    span_2.innerHTML = res.name
    p.innerHTML = JSON.stringify(res,null,2)
   
 })
 span_1.innerHTML = id
