const cep = document.getElementById('cep')

const showData = (result) => {
    // Para cada um dos campos do objeto que buscamos
    for (const campo in result) {
        if (document.getElementById(campo)){
            document.getElementById(campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '')
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    // Acesse a url
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then(response => response.json()) // se der certo
    .then(data => showData(data)) //se o .json também der certo

    .catch(e => console.log('Erro: ' + e.message)) //se der errado
})