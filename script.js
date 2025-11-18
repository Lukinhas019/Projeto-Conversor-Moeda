const converterButton = document.querySelector('.converter-button')
const optionSelect = document.querySelector('.option-select')



function ConvertValues() {

    const inputValor = document.querySelector('.input-valor').value
    const resultadoDolar = document.querySelector('.resultado-dolar')
    const resultadoReal = document.querySelector('.resultado-real')



    const DolarValor = 5.33
    const EuroValor = 6.18


    resultadoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputValor)




    if (optionSelect.value == "dolar") {
        resultadoDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputValor / DolarValor)
    }

    if (optionSelect.value == "euro") {

        resultadoDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / EuroValor)
    }



}

function change() {

    const styleDolar = document.querySelector('.style-dolar')
    const imgChange = document.querySelector('.img-dolar')

    if (optionSelect.value == "dolar") {
        styleDolar.innerHTML = "Dólar Americano"
        imgChange.src = './assets/dolar.png'


    }

    if (optionSelect.value == "euro") {
        styleDolar.innerHTML = "Euro"
        imgChange.src = "./assets/euro.png"

    }

    ConvertValues()

}



converterButton.addEventListener("click", ConvertValues)
optionSelect.addEventListener("change", change)