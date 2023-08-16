
import { calcCompoundInterest } from "./formula.js";

import { setSymbolOfCoinOnInput } from "./inputs.js";

import { convertTimeUnit } from "./coversorDeUnidades.js";



//Obtener datos del formulario

function setCompoundInterest(){
    
    const interestCompoundSectionElement= document.querySelector(".interest-form__container");   
    
    //inputs
    const  initialCapital=document.getElementById("initialAmount__input");
    const  interestRate= document.getElementById("compound-interest__input");
    const  typeOfInterestRate= document.getElementById("compound-interest__select");
    const  capitalization= document.getElementById("capitalization__select");
    const  period= document.getElementById("period__input");
    const  typeOfPeriod= document.getElementById("period__select");

    

    //outputs
    const futureValue= document.getElementById("final-amount");
    const amountOfInterests= document.getElementById("final-interest-amount");


    //btns

    const calcCompoundInterestBTN= document.getElementById("calc__btn");
    const restartFormBTN= document.getElementById("restart__btn");

    
    /**
 * Formatea y convierte valores relacionados con el período y la capitalización para cálculos de interés compuesto.
 *
 * @param {string} valuePeriod - El valor del período ingresado.
 * @param {string} typeOfPeriod - El tipo de período ingresado (Años o Meses).
 * @param {string} typeOfInterestRate - El tipo de tasa de interés ingresado (Anual o Mensual).
 * @param {string} typeOfCapitalization - El tipo de capitalización ingresado (Anual o Mensual).
 * @returns {object} Objeto con valores formateados de capitalización y período.
 */
function formatValues(valuePeriod, typeOfPeriod, typeOfInterestRate, typeOfCapitalization) {
    const annual = ["Anual", "Años", "año"];
    const monthly = ["Mensual", "Meses", "mes"];

    /**
     * Convierte una cadena de capitalización en un objeto con número y unidad.
     *
     * @param {string} capital - Cadena de capitalización en el formato "numero-unidad".
     * @returns {object} Objeto con valores numérico y de unidad.
     */
    function readCapitalization(capital) {
        const values = capital.split("-");
        return { num: parseInt(values[0]), unit: values[1] };
    }

    const capitalizationValues = readCapitalization(typeOfCapitalization);

    
    const convertUnits = convertTimeUnit(); // retorna funcion para la conversion de unidades

    let capitalization = capitalizationValues.num;
    let period = parseInt(valuePeriod) || 0;

    if (typeOfInterestRate === monthly[0]) {
        if (capitalizationValues.unit === annual[2]) {
            const formattedCapitalization = convertUnits(
                { number: capitalizationValues.num, unit: capitalizationValues.unit },
                monthly[2]
            );
            capitalization = formattedCapitalization;
        }

        if (typeOfPeriod === annual[2]) {
            const formattedPeriod = convertUnits(
                { number: period, unit: typeOfPeriod },
                monthly[2]
            );
            period = formattedPeriod;
        }
    } else if (typeOfInterestRate === annual[0]) {
        if (capitalizationValues.unit === monthly[2]) {
            const formattedCapitalization = convertUnits(
                { number: capitalizationValues.num, unit: capitalizationValues.unit },
                annual[2]
            );
            capitalization = formattedCapitalization;
        }

        if (typeOfPeriod === monthly[2]) {
            const formattedPeriod = convertUnits({ number: period, unit: "mes" }, annual[2]);
            period = formattedPeriod;
        }
    }

    return { capitalization, period };
}


   
   
    
   

    function getCompoundInterest(){

        
    

        const targetTypeOfInterest= typeOfInterestRate.value;
        const targetInitialCapital= initialCapital.value;
        const targetInterestRate= interestRate.value;

        const targetPeriod = period.value;
        const targetTypeOfPeriod = typeOfPeriod.value;
        const targetCapitalization= capitalization.value;
        
       
        const  formattedValues= formatValues(targetPeriod, targetTypeOfPeriod, targetTypeOfInterest,  targetCapitalization);

        
        
        const result=calcCompoundInterest(targetInterestRate, formattedValues.capitalization, targetInitialCapital, formattedValues.period)


       
        futureValue.value = result;
        amountOfInterests.value = result - initialCapital.value; 

       

    }

   

   

    calcCompoundInterestBTN.addEventListener("click", getCompoundInterest);

    interestCompoundSectionElement.addEventListener("keydown",  function (event){

        if(event.key==="Enter") getCompoundInterest();
        
        
    })



}



//Inputs

function setInputs(){

   setSymbolOfCoinOnInput(document.getElementById("initialAmount__input"));
   setSymbolOfCoinOnInput(document.getElementById("final-amount"));
   setSymbolOfCoinOnInput(document.getElementById("final-interest-amount"));

}


//llamados 
setInputs()
setCompoundInterest()





function setConverterUnitModule(){

    const convert=convertTimeUnit()
    

    //Obtener elementos del DOM
    //inputs
    
    const inputValueElement= document.getElementById("unit-converter-introduce-value__input");
    const inputUnitElement= document.getElementById("unit-converter-introduce-value__select");

    const converterModuleElement=document.getElementById("unit-converter");

    //outputs
    const outputValueElement= document.getElementById("unit-converter-output__input");
    const targetUnitElement= document.getElementById("unit-converter-output__select");

    

    
    function convertValues(){

        const value= parseInt(inputValueElement.value) || 0;
        const unit = inputUnitElement.value.toLowerCase();
        const targetUnit= targetUnitElement.value.toLowerCase();
        

        const result = convert({number:value, 
                    unit:unit}, 
                    targetUnit)

            outputValueElement.value= result;
    }


    inputUnitElement.addEventListener("change", ()=>{
        
        convertValues()
        
    })

    converterModuleElement.addEventListener("keydown", (event)=>{
        
        if(event.key==="Enter"){
            convertValues()
        }
        
    })


    targetUnitElement.addEventListener("change", ()=>{
        
       convertValues()
    })
    
    
}

setConverterUnitModule()