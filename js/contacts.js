/* 
Activité : gestion des contacts
*/

const welcome = "Bienvenue dans le gestionnaire des contacts !";
const choices = "\n\t1 : Lister les contacts" +
    "\n\t2 : Ajouter un contact" +
    "\n\t0 : Quitter" +
    "\n\n";
let choice;

console.log(welcome + choices);

class Contact {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    };
}

const presContacts = "Voici la liste de tous vos contacts :";
const tabContacts = [];

tabContacts.push(new Contact("Lévisse", "Carole"));
tabContacts.push(new Contact("Nelsonne", "Mélodie"));

function listContacts() {
    console.log(`${presContacts}\n`);
    tabContacts.forEach(contact => {
        console.log(`\tNom : ${contact.nom}, prénom : ${contact.prenom}\n`);
})
    ;

    console.log(choices);
    chooseOption();
}

function addContact() {
    let newNom = prompt("Entrez le nom du nouveau contact :", "");
    let newPrenom = prompt("Entrez le prénom du nouveau contact :", "");
    tabContacts.push(new Contact(newNom, newPrenom));
    console.log("Le nouveau contact a été ajouté.\n");
    listContacts();
    console.log(choices);
    chooseOption();
}

function chooseOption() {
    choice = prompt("Choisissez une option :", "");
}

chooseOption();

if (choice !== "0") {
    while (choice) {
        switch (choice) {
            case "1":
                listContacts();
                break;
            case "2":
                addContact();
                break;
            default:
                chooseOption();
        }
    }
} else {
    console.log("Au revoir !");
}
