class Pokemon{
    constructor(name,type,type2,ID){
        this.name = name;
        this.type = type;
        this.type2 = type2;
        this.ID = ID;
        console.log("New Pokemon has been created")
    }
    display(){
        return `${this.name}  has ${this.type} type and ${this.type2} type and the pokedex ID is ${this.ID}`
    }
}

var characters=[new Pokemon("Pikachu","Electric","N/A","25") ,new Pokemon("Charizard","Fire","Flying","9"),new Pokemon("Gengar","Poison","Ghost","94"),("Pidgeot","Normal","Flying","36"),
    new Pokemon("Dragonite","Dragon","Flying","149"),new Pokemon("Onix","Rock","Ground","95")]

function search(){
var inpt = document.getElementById("ipt").value 
const character=characters.find(s => s.type.toLowerCase() ===inpt.toLowerCase());
if(character){
    document.getElementById("res").innerHTML="the character found"
    document.getElementById("res").innerHTML= character.display()
}else{
    document.getElementById("res").innerHTML="sorry no character found, please try again"
}
}