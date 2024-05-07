function make_sandwich(item:string[]){
    console.log('Making your sandwich with:');
    item.forEach(element=>console.log(" "+element));
    console.log('Enjoy your sandwich!');
}
make_sandwich(['Ham','Cheese','lettuce']);
make_sandwich(['Turkey','Bacon','peanut butter','jelly']);