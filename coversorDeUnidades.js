

export function convertTimeUnit (){

    const unitsCollection = {

        dia:{
            points:1,

            conversionFactor:{
            dia: 1,
            semana: 7,
            mes: 30.417, 
            año: 365, }
        
        },

        mes:{
            points:2,

            conversionFactor:{
            dia: 30.417,
            semana: 4.345,
            mes: 1,
            año: 12}

        },

        año:{

            points:3,

            conversionFactor:{
            dia: 365, 
            semana: 52.1429,
            mes: 12, 
            año: 1 }
        }
    }
    
    

    function calc(timeUnitFrom, timeUnitTo){
        
        const number=timeUnitFrom.number
        const unit=timeUnitFrom.unit
        const unitTo= timeUnitTo

      
        
        const valueObject = unitsCollection[unit];
        const conversionFactor= valueObject.conversionFactor[timeUnitTo];
        
        const conversionDirection= unitsCollection[unit].points - unitsCollection[unitTo].points;

       
        if(conversionDirection<0){
            //la unidad de entrada es menor/ subiendo
            return number / conversionFactor
        }
        else if(conversionDirection>0){
            //la unidad de entrada es mayor/ bajando
            return number * conversionFactor
        }

        else{
                return number
        }
    }

    return calc
}
