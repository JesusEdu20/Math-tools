    /**
 * Agrega un ícono y un texto a un input.
 *
 * @param {HTMLElement} input - El input al que se agregará el ícono y el texto.
 * @param {string} className - La clase CSS para el ícono.
 * @param {string} text - El texto que se mostrará junto al ícono.
 * @param {string} iconUrl - La URL de la imagen del ícono (no se utiliza actualmente).
 */
function setIconInput(input, className, text, iconUrl) {
    let icon = document.createElement("span");
    icon.innerHTML = text;
    input.nextElementSibling?.remove();
    input.insertAdjacentElement("afterend", icon);
    icon.classList.add(className);
}

/**
 * Establece el símbolo de la moneda seleccionada en un input.
 *
 * @param {HTMLElement} input - El input en el que se establecerá el símbolo de la moneda.
 */
function setSymbolOfCoinOnInput(input) {
    // Selecciona el select que contiene el tipo de moneda
    let typeOfCoin = document.getElementById("type-coin__select");

    /**
     * Establece el símbolo de la moneda en el input.
     *
     * @param {string} inputValue - El valor seleccionado en el select de moneda.
     */
    const setSymbol = (inputValue) => {
        const typeOfCoinSelected = inputValue;
        let coinSymbol;

        if (typeOfCoinSelected === "Dólar") coinSymbol = "$";
        else if (typeOfCoinSelected === "Euro") coinSymbol = "€";
        else if (typeOfCoinSelected === "Bolivares") coinSymbol = "Bs";
        else return;

        setIconInput(input, "currency-icon-coin__span", coinSymbol, null);
    };

    // Establece el símbolo inicial
    setSymbol(typeOfCoin.value);

    // Agrega un evento al select para actualizar el símbolo cuando cambie la moneda seleccionada
    typeOfCoin.addEventListener("change", function () {
        setSymbol(typeOfCoin.value);
    });
}

export { setIconInput, setSymbolOfCoinOnInput } ;
