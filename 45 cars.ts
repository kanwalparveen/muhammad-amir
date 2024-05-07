import{features} from "process";
function storecarInof(manufacture:string,modelName:string,...extraOption:{[Key:string]:any}[]): object{
    const carInof={
        manufacture,
        modelName,
        ...Object.assign({},...extraOption)
    }
    return carInof;
};
let  answer= storecarInof('Honda','Civis',{color:'black'},
    {features:['Navigation','power window']})
console.log( answer);


