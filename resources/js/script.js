



/*
TODO esercizio di oggi: Our Team
TODO nome repo: js-our-team
TODO Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
TODO Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//TODO MILESTONE 0:
//TODO Creare l’array di oggetti con le informazioni fornite.
//TODO MILESTONE 1:
//TODO Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
TODO MILESTONE 2:
TODO Stampare le stesse informazioni su DOM sottoforma di stringhe
TODO BONUS 1:
TODO Trasformare la stringa foto in una immagine effettiva
TODO BONUS 2:
TODO Organizzare i singoli membri in card/schede
TODO BONUS 3:
TODO Permettere l'aggiunta di un nuovo membro del team
TODO Consigli del giorno:
TODO Ragioniamo come sempre a step.
TODO Prima la logica in italiano e poi traduciamo in codice.
TODO E ricordiamoci che console.log() è nostro amico!
TODO Buon lavoro! :muscolo:
TODO DATI PER ESERCIZIO
TODO Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
TODO Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
TODO Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
TODO Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
TODO Scott Estrada	        Developer	                 scott-estrada-developer.jpg
TODO Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg
*/

const teamMembers = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        userImg: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        userImg: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        userImg: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        userImg: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        userImg: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        userImg: "barbara-ramos-graphic-designer.jpg"
    }
];

app()

function app() {
    const CardContianer = document.createElement('div')
    CardContianer.id = "card-container";
    CardContianer.className = "d-flex flex-wrap align-items-center justify-content-around"
    for (let element of teamMembers) {
        let userImg = `/resources/img/${element.userImg}`
        CardContianer.append(createCard(element.name, element.surname, element.role, userImg))
    }
    CardContianer.append(createCard("Add a new Member"))
    document.getElementById('app').append(CardContianer);

}



function createCard(userName, userSurname = "", userRole = "", userImgUrl = "") {
    const Card = document.createElement("div");
    Card.className = "card m-3";
    Card.style = "width:30%; min-width:400px";
    const CardImg = document.createElement("img");
    CardImg.className = "img-fluid bg-"
    CardImg.setAttribute("src", `${userImgUrl}`);
    CardImg.setAttribute("alt", `${userName}`);
    const CardBody = document.createElement('div');
    CardBody.className = "card-body text-center";
    const CardTitle = document.createElement('h5');
    CardTitle.className = "card-title fs-1";
    CardTitle.innerHTML = `${userName} ${userSurname}`;
    const CardInfo = document.createElement('p');
    CardInfo.className = "card-text fs-3";
    CardInfo.innerHTML = `${userRole}`;
    CardBody.append(CardTitle, CardInfo);
    Card.append(CardImg, CardBody)
    return Card;
}

