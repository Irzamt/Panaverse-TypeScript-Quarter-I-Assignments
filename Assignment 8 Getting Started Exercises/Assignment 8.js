"use strict";
/*
2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
********************************************************************************************************************* */
// let userName:string = "Hello Irzam, Would you like to learn some TypeScript Today?";
function car(manufacturer, model, color, modelNumber) {
    let myCar = {
        manufacturerT: manufacturer,
        modelT: model,
    };
    if (color !== undefined)
        myCar.colorT = color;
    if (modelNumber !== undefined)
        myCar.modelNumberT = modelNumber;
    return myCar;
}
const myCar = car('Toyota', 'Camry', 'Blue', 2023);
console.log(myCar);
