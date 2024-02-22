import { reload } from "./ui.js"
let tick = document.querySelector('.tick')
let temp = document.querySelector('.ten')
fetch('http://localhost:8080/users')
.then(res => res.json())
.then(res => {
    reload(res, tick)
   
})