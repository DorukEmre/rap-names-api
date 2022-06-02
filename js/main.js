const input = document.querySelector('input').value
const button = document.querySelector('button')

button.addEventListener('click', maqeReq)

async function maqeReq() {
    const res = await fetch(`/api/${input}`)
    const data = await res.json()

    console.log(input)
    console.log(data)

    const birthName = document.querySelector('.birthName')
    const birthLocation = document.querySelector('.birthLocation')
    const age = document.querySelector('.age')
    const text = document.querySelector('.text')

    birthName.textContent = data.birthName
    birthLocation.textContent = data.birthLocation
    age.textContent = data.age
    text.textContent = ' years old. Born in '
}