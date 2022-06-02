const express = require('express')
const app = express()
const PORT = 8000 // naming convention for constants: all caps if it's a const that doesn't change

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, UK'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois, US'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// :rapperName is a query parameter which we can request with request.params.rapperName (the column lets express know rapperName is not part of the path, but that it is a query parameter)
// Use postman to check API response
app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    // bracket notation because we have space in our rapper names
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
})
app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')
})
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})