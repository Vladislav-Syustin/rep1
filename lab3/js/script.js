const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const delet = document.querySelector('#delet')
const ready = document.querySelector('#ready')
const result = document.querySelector('#result')

btn.addEventListener('click', (e) => {
    // result.innerHTML += `<li>${input.value}</li>`
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})

function createDeleteElements(value) {
    console.log(value)

    
    const li = document.createElement('li')
    const delet = document.createElement('button')
    const ready = document.createElement('button')
    const div = document.createElement('div');

    li.className = 'li';
    li.textContent = value;
    delet.className = 'delet';
    delet.innerHTML = '<img src="./img/delete.svg">';

    li.appendChild(delet);

    ready.className = 'ready';
    ready.innerHTML = '<img src="./img/check-mark.svg">';

    li.appendChild(ready);

    
  

// delet

    delet.addEventListener('click', (e) => {
        result.removeChild(li)
    })


    ready.addEventListener('click', (e) => {
        li.classList.toggle('made')
    })

    result.appendChild(li)
    
}
