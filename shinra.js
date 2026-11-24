let etudiants = [
    { id:1,nom: "kusakabe" , prenom: "sho"},
     { id:2,nom: "benimaru" , prenom: "raiki"},
];
let texte = JSON.stringify(etudiants); 
console.log(texte);
localStorage.setItem("etudiants", texte);
let text = localStorage.getItem("etudiants");
 let table = JSON.parse(text);
 console.log(table[0]);
 
    function sauvegarderEtudiants() {    
        localStorage.setItem("etudiants", JSON.stringify(etudiants)); 
    };
    function chargerEtudiants() {    
        let donnees = localStorage.getItem("etudiants");    
        if (donnees !== null) {       
             etudiants = JSON.parse(donnees);    } 
            };
            console.log();

    function afficheretudiants(){
        let tabls = JSON.stringify(etudiants)
    console.log(tabls);
        
    }

    etudiants.push({id :3,nom: "wayne", prenom:"Bruce"});
    sauvegarderEtudiants();
    afficheretudiants();

    function modifieretudiants(){
        
    };
    etudiants[1].nom = "Madara"; 
        etudiants[2].prenom = "kaguya"; 
        sauvegarderEtudiants(); 
        afficheretudiants();
    
    function supprimeretudiants(){

    };
    let id =1;
    etudiants = etudiants.filter(function(e) {    
        return e.id !== id; 
    });
         sauvegarderEtudiants(); 
         afficheretudiants();