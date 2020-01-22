console.log('Dom loops')

const dinosaurs = [
    {type: 't-rex', name: 'Wrex'},
    {type: 'stegosaurus', name: 'Steve'},
    {type: 'velociraptor' ,name: 'Ted'}
];
const printToDom = (divID, textToPrint) => {
    const selecteDiv = document.getElementById(divID);
    console.log(selecteDiv)
    selecteDiv.innerHTML = textToPrint;
}

const buildDinosaurCards = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++) {

        domString += `<div class= "dinosaur">`;
        domString += `<h3>${dinosaurs[i].name}</h3>`;
        domString += `<p>${dinosaurs[i].type}</p>`;
        domString += `</div>`;
    }
   printToDom('dino-barn', domString);
};
buildDinosaurCards();