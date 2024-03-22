

// console.log(Document.prototype); show all document properties and method
/*
& Purple Comment
! Red Comment
^ Yellow Comment
? Blue Comment
* Green Comment
~ Violet Comment
TODO Orange Comment
*/


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isaN(value) {
    return !isNaN(value)
}

function addClass(element, value) {
    value = String(value);
    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.add(value)
        }
    } else {
        element.classList.add(value)
    }
}


//^ FUNCTION MODAL END
function hypeModal(score = "", condition = "") {

    const BackGroundBlack = document.createElement('div');
    BackGroundBlack.id = "hype-modal"
    BackGroundBlack.className = "position-absolute w-100 h-100 overflow-hidden d-flex align-items-center justify-conentent-center position-fixed";
    BackGroundBlack.style = "z-index:100; left:0; top:0; background-color: rgba(0, 0, 0, 0.4);";

    const EndBanner = document.createElement('div');
    EndBanner.className = "mx-auto d-flex align-items-center justify-content-center flex-column";
    EndBanner.style = "width:700px; height:700px;";
    EndBanner.id = `banner`

    const EndText = document.createElement('h2');
    EndText.className = "text-white text-center";
    EndText.style = "font-size:5rem; -webkit-text-stroke: 1px black; ";
    EndText.innerHTML = `You found ${score}/${condition}! <p class='fs-1'>Total Points: ${score}</p>`;

    const EndButton = document.createElement('button')
    EndButton.id = "end"
    EndButton.className = `btn btn-lg bg-${score !== 5 ? "danger" : "success"}`
    EndButton.innerHTML = score !== 5 ? `Try Again` : "Play Again!"
    EndButton.addEventListener('click', () => {
        document.getElementById("hype-modal").remove()
    })
    EndBanner.append(EndText, EndButton)
    BackGroundBlack.appendChild(EndBanner);
    return BackGroundBlack
}