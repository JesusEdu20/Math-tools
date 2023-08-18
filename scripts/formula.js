/**
 * Calcula el monto final usando la fórmula de interés compuesto.
 *
 * @param {number} interestRate - Tasa de interés anual en porcentaje.
 * @param {number} capitalization - Frecuencia de capitalización (veces al año).
 * @param {number} initialAmount - Cantidad inicial de dinero.
 * @param {number} period - Período en años.
 * @return {number} El monto final después del período de interés compuesto.
 */
const calcCompoundInterest = (interestRate, capitalization, initialAmount, period) => {
    // Convierte la tasa de interés a decimal
    const decimalInterest = interestRate / 100;

    // Calcula el monto final usando la fórmula de interés compuesto
    const finalAmount = initialAmount * ((1 + (decimalInterest / capitalization)) ** (capitalization * period));

    return finalAmount;
};


export {calcCompoundInterest};