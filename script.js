const converterButton = document.querySelector('.converter-button')
const optionSelect = document.querySelector('.option-select')
const optionSelect1 = document.querySelector('.option-select-1')



function ConvertValues() {

    const inputValor = document.querySelector('.input-valor').value
    const resultadoDolar = document.querySelector('.resultado-dolar')
    const resultadoReal = document.querySelector('.resultado-real')




    const DolarValor = 5.33
    const EuroValor = 6.18
    const LibraValor = 6.99
    const BtcValor = 490.705
    const RealValor = 1


    if (optionSelect1.value == "real1") {
        resultadoReal.innerHTML = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / RealValor)
    }


    if (optionSelect1.value == "dolar1") {
        resultadoReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputValor / DolarValor)
    }

    if (optionSelect1.value == "euro1") {

        resultadoReal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / EuroValor)
    }

    if (optionSelect1.value == "libra1") {

        resultadoReal.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / LibraValor)
    }

    if (optionSelect1.value == "btc1") {

        resultadoReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor / BtcValor)
    }



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

    if (optionSelect.value == "libra") {

        resultadoDolar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / LibraValor)
    }

    if (optionSelect.value == "btc") {

        resultadoDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor / BtcValor)
    }

    if (optionSelect.value == "real") {
        resultadoDolar.innerHTML = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / RealValor)
    }


}

function change() {

    const styleDolar = document.querySelector('.style-dolar')
    const styleReal = document.querySelector('.style-real')
    const imgChange = document.querySelector('.img-dolar')
    const imgBrasil = document.querySelector('.img-brasil')




    if (optionSelect.value == "euro") {
        styleDolar.innerHTML = "Euro"
        imgChange.src = "./assets/euro.png"

    }



    if (optionSelect.value == "libra") {
        styleDolar.innerHTML = "Libra"
        imgChange.src = "./assets/libra.png"

    }

    if (optionSelect.value == "btc") {
        styleDolar.innerHTML = "BTC"
        imgChange.src = "./assets/bitcoin.png"

    }

    if (optionSelect.value == "real") {
        styleDolar.innerHTML = "Real"
        imgChange.src = './assets/real.png'

    }






    if (optionSelect1.value == "real1") {
        styleReal.innerHTML = "Real"
        imgBrasil.src = './assets/real.png'

    }


    if (optionSelect1.value == "dolar1") {
        styleReal.innerHTML = "Dólar Americano"
        imgBrasil.src = './assets/dolar.png'


    }

    if (optionSelect1.value == "euro1") {
        styleReal.innerHTML = "Euro"
        imgBrasil.src = "./assets/euro.png"

    }

    if (optionSelect1.value == "libra1") {
        styleReal.innerHTML = "Libra"
        imgBrasil.src = "./assets/libra.png"

    }

    if (optionSelect1.value == "btc1") {
        styleReal.innerHTML = "BTC"
        imgBrasil.src = "./assets/bitcoin.png"

    }

    ConvertValues()

}



converterButton.addEventListener("click", ConvertValues)
optionSelect.addEventListener("change", change)
optionSelect1.addEventListener("change", change)