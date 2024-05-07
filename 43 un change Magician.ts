let magicians:string[]=['hassy potter','Ron weasley','Hermone ggranger','Albus Dumble dore'];
function copyarray(arr:string[]){
    return[...arr]
}
function make_great(magicianarry:string[]){
    for(let i=0; i< magicianarry.length;i++){
        magicianarry[i]='the great'+magicianarry[i]
    }
}
function show_magicians(magicians:string[]){
    magicians.forEach(element=>{
console.log(element);
    })
}
const copymagicianarray=copyarray(magicians)
make_great(copymagicianarray);
console.log('This is my original array:');
show_magicians(magicians);
console.log('\n\n This is my modifiedcopy of the array:');
show_magicians(copymagicianarray);