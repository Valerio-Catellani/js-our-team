



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



//& MAIN APP
app()
function app() {
    const CardContianer = document.createElement('div')
    CardContianer.id = "card-container";
    CardContianer.className = "d-flex flex-wrap align-items-center justify-content-center";
    const Title = document.createElement('div');
    Title.className = "d-flex flex-column align-items-center w-75"
    const MainTitle = document.createElement('h1');
    MainTitle.className = "display-1 fw-bold"
    MainTitle.innerHTML = "Our Team";
    const Subtitle = document.createElement('p');
    Subtitle.className = "fw-bold"

    Subtitle.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius debitis eaque consequatur saepe soluta unde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius debitis eaque consequatur saepe soluta unde,Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius debitis eaque consequatur saepe soluta unde,Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius debitis eaque consequatur saepe soluta unde,delectus quae reiciendis mollitia."
    Title.append(MainTitle, Subtitle)
    CardContianer.append(Title)
    for (let element of teamMembers) {
        let userImg = `resources/img/${element.userImg}`
        CardContianer.append(createCard(element.name, element.surname, element.role, userImg))
    }
    CardContianer.append(createAddCard())
    document.getElementById('app').append(CardContianer);
}





//^FUNCTION createCard
function createCard(userName, userSurname = "", userRole = "", userImgUrl = "") {
    const Card = document.createElement("div");
    Card.className = "card m-3 border-3";
    Card.style = "width:400px; height:550px";
    const CardImg = document.createElement("img");
    CardImg.className = "img-fluid h-75"
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

//^FUNCTION: createAddCard
function createAddCard() {
    const Card = document.createElement("div");
    Card.className = "card m-3 border-3";
    Card.id = "add-member";
    Card.style = "width:400px; height:550px; cursor:pointer";
    const CardImg = document.createElement("div");
    CardImg.className = "bg-dark-subtle d-flex align-items-center justify-content-center display-1 text-white"
    CardImg.innerHTML = '<i class="fa-solid fa-user-plus"></i>'
    CardImg.style = "height:380px"
    const CardBody = document.createElement('div');
    CardBody.className = "card-body text-center";
    const CardTitle = document.createElement('h5');
    CardTitle.className = "card-title fs-1";
    CardTitle.innerHTML = `Add a new Member`;
    CardBody.append(CardTitle);
    Card.append(CardImg, CardBody)
    Card.addEventListener('click', () => document.getElementById('app').append(addUserModal()))
    return Card;
}

//^FUNCTION: addUserModal

function addUserModal() {
    //--- background
    let casa;
    const BackGroundBlack = document.createElement('div');
    BackGroundBlack.id = "hype-modal"
    BackGroundBlack.className = "position-absolute w-100 h-100 overflow-hidden d-flex align-items-center justify-conentent-center position-fixed";
    BackGroundBlack.style = "z-index:100; left:0; top:0; background-color: rgba(0, 0, 0, 0.4);";
    //--- Banner
    const Banner = document.createElement('div');
    Banner.className = "mx-auto d-flex align-items-center justify-content-center flex-column bg-light border border-dark border-3 rounded-4";
    Banner.style = "width:700px; height:700px;";
    Banner.id = `banner`
    //--- Title
    const Title = document.createElement("h2");
    Title.innerHTML = "Add a new Member";
    Banner.append(Title)
    //--- Information field
    for (let element in teamMembers[0]) {
        Banner.append(generateInformation(element))
    }
    //--- SendButton
    const Buttons = document.createElement('div')

    const SendButton = document.createElement('button')
    SendButton.id = "send-button"
    SendButton.disabled = true
    SendButton.className = `btn btn-lg btn-primary mx-2`
    SendButton.innerHTML = "Add the New Member!"
    SendButton.addEventListener('click', () => {
        addNewMember(document.querySelectorAll(".user-input-value"))
        document.getElementById("hype-modal").remove()
    })

    const CancelButton = document.createElement('button')
    CancelButton.id = "cancel-button"
    CancelButton.className = `btn btn-lg btn-danger  mx-2`
    CancelButton.innerHTML = "Cancel"
    CancelButton.addEventListener('click', () => {
        document.getElementById("hype-modal").remove()
    })

    Buttons.append(SendButton, CancelButton)
    Banner.append(Buttons)
    BackGroundBlack.appendChild(Banner);
    return BackGroundBlack
}




function generateInformation(key) {
    //--- container (label + input)
    const container = document.createElement('div');
    container.className = "my-3 answer-container w-75";
    //--- label
    const label = document.createElement('label');
    label.htmlFor = `${key}`;
    label.className = "form-label";
    label.innerHTML = `Insert the ${key} of the new member`
    const input = document.createElement('input');
    //--- input
    input.id = `${key}`;
    input.className = "user-input-value form-control border-danger bg-danger-subtle border-4";
    input.setAttribute("type", "text");
    input.addEventListener('input', () => {
        if (input.value !== "" && isNaN(input.value)) {
            input.classList.add("checked", "bg-success-subtle", "border-success");
            input.classList.remove("bg-danger-subtle", "border-danger")
            controll()
        } else if (input.value === "" || isNaN(input.value)) {
            input.classList.add("bg-danger-subtle", "border-danger");
            input.classList.remove("checked", "bg-success-subtle", "border-success");
            controll()
        }
    })

    container.append(label, input);
    return container
}

/**
 * controll that all value are check (valid), before enable the send button
 */
function controll() {
    document.getElementsByClassName('checked').length < 4 ? document.getElementById('send-button').disabled = true : document.getElementById('send-button').disabled = false
}

function addNewMember(arrayOfValue) {
    const NewMember = { //istance new object
        name: null,
        surname: null,
        role: null,
        userImg: null,
    }
    for (let element of arrayOfValue) {
        NewMember[element.id] = element.value //i take the key of the existing one and put on id of the input, so i'm sure that element.id is what i want put in it.
    }
    //console.log(NewMember);
    teamMembers.push(NewMember);
    let userImg = `resources/img/${NewMember.userImg}`
    let container = document.getElementById('card-container');
    container.insertBefore(createCard(NewMember.name, NewMember.surname, NewMember.role, userImg), container.children[container.children.length - 1])
}


console.log(Array.prototype);