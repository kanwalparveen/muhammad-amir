let current_user:string[]=['junaid','nasir','fahad','babar','muhammad'];
let new_user:string[]=['babar','ali','nasir','abdullah','yasir'];
new_user.forEach(newusername =>{
    let lowercasc=newusername.toLowerCase();
    if(current_user.map(c_user =>c_user.toLowerCase()).includes(lowercasc)){
console.log(`The username${newusername}is not available. please write a different username`);
    }
    else{
        console.log(`The username${newusername}is available.`);
    }
});