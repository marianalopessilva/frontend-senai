// alert('Olá Mundo')
//
// var test = prompt('Digite qualquer coisa')
//
// alert(test)

function testtexto() {
    document.getElementById("titulo").innerHTML = "Boa Tarde"
}

function testcolor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = 'red'
    titulo.style.fontSize = '50px'
}

function reset() {
    document.getElementById("titulo").innerHTML = "Celebrate the petals & the prickles this Mother's Day"
}

function testinput() {
    document.getElementById("input").value = "Olá"
}

function limpaInput() {
    document.getElementById('first-name').value = ""
    document.getElementById('last-name').value = ""
    document.getElementById('username').value = ""
    document.getElementById('city').value = ""
    document.getElementById('state').value = ""
    document.getElementById("zip").value = ""
}






