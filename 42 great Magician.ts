let magician:string[]=['Hassy potter','Ron weasley','Hermone granger','Albus dumble dore'];
function make_great(magicianarray:string[]){
    for(let i=0; i<magicianarray.length;i++){
        magician[i]= 'the Great' + magicianarray[i]
    }
}
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);