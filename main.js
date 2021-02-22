const buttons = document.querySelectorAll('button');
const paras = document.querySelectorAll('p');
const collections = document.querySelectorAll('.collection');
const thumbBar = document.querySelectorAll('.thumb-bar');
const displayedImg = document.querySelectorAll('.displayed');

//Adding button functionality
buttons[0].addEventListener('click', function () {
    openClose(0);
});

buttons[1].addEventListener('click', function () {
    openClose(1);
});

buttons[2].addEventListener('click', function () {
    openClose(2);
});


let isOpen = false;

function openClose(arg) {
    let i = Number(arg);
    if (isOpen == false) {
        collections[i].style.height = '500px';
        buttons[i].textContent = '⬆';
        populate(i);
        isOpen = true;
    } else {
        collections[i].style.height = '250px'; 
        buttons[i].textContent = '⬇';
        dePopulate(i);
        isOpen = false;
    }
}

//border abbreviations for thumbnail pictures
let tdo = 'thick double orange';
let tdb = 'thick double blue';

//adding pictures
function populate(arg) {
    let i = Number(arg);
    for (let k = 0; k <= 5; k++) {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', `./pictures/${k + 6*i}.JPG`);
        newImg.setAttribute('class', 'thumb-bar');
        newImg.style.border = tdo;
        setTimeout(function () {
            newImg.style.visibility = 'visible';
        }, 750);
        thumbBar[i].appendChild(newImg);
    }
    //adding 'click' event listener on said pictures
    for (let j = 0; j <= 5; j++) {
        thumbBar[i].childNodes[j].addEventListener('click', function () {
            displayedImg[i].setAttribute('src', `./pictures/${j + 6*i}.JPG`);
            for (let k=0; k<6; k++) {
                thumbBar[i].childNodes[k].style.border = tdo;
            }
            thumbBar[i].childNodes[j].style.border = tdb;
        })
    }
    //adding 'keydown' event listener
    collections[i].addEventListener('keydown', changeSelection);
}

//Helper function returning the childnode position of selected picture
function select(arg) {
    let i = Number(arg);
    for (let j = 0; j <= 5; j++) {
        switch (thumbBar[i].childNodes[j].style.border) {
            case tdb:
                return j;
                break;
        }
    }
}

function changeSelection(e) {
    let j;
    if (collections[0] === document.activeElement) {
        j = select(0);

        if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
            if (j !== 0 && j !== undefined) {
                thumbBar[0].childNodes[j].style.border = tdo;
                thumbBar[0].childNodes[j - 1].style.border = tdb;
                displayedImg[0].setAttribute('src', `./pictures/${j-1}.JPG`);
                j--;
            } else if (j === 0) {
                thumbBar[0].childNodes[j].style.border = tdo;
                thumbBar[0].childNodes[5].style.border = tdb;
                displayedImg[0].setAttribute('src', './pictures/5.JPG');
                j = 5;
            }
        }

        if (e.code === 'KeyD' || e.code === 'ArrowRight') {
            if (j !== 5 && j !== undefined) {
                thumbBar[0].childNodes[j].style.border = tdo;
                thumbBar[0].childNodes[j + 1].style.border = tdb;
                displayedImg[0].setAttribute('src', `./pictures/${j+1}.JPG`);
                j++;
            } else if (j === 5) {
                thumbBar[0].childNodes[j].style.border = tdo;
                thumbBar[0].childNodes[0].style.border = tdb;
                displayedImg[0].setAttribute('src', './pictures/0.JPG');
                j = 0;
            }
        }


    } else if (collections[1] === document.activeElement) {
        j = select(1);

        if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
            if (j !== 0 && j !== undefined) {
                thumbBar[1].childNodes[j].style.border = tdo;
                thumbBar[1].childNodes[j - 1].style.border = tdb;
                displayedImg[1].setAttribute('src', `./pictures/${j-1 + 6}.JPG`);
                j--;
            } else if (j === 0) {
                thumbBar[1].childNodes[j].style.border = tdo;
                thumbBar[1].childNodes[5].style.border = tdb;
                displayedImg[1].setAttribute('src', './pictures/12.JPG');
                j = 5;
            }
        }

        if (e.code === 'KeyD' || e.code === 'ArrowRight') {
            if (j !== 5 && j !== undefined) {
                thumbBar[1].childNodes[j].style.border = tdo;
                thumbBar[1].childNodes[j + 1].style.border = tdb;
                displayedImg[1].setAttribute('src', `./pictures/${j+1 + 6}.JPG`);
                j++;
            } else if (j === 5) {
                thumbBar[1].childNodes[j].style.border = tdo;
                thumbBar[1].childNodes[0].style.border = tdb;
                displayedImg[1].setAttribute('src', './pictures/6.JPG');
                j = 0;
            }
        }
        

    } else if (collections[2] === document.activeElement) {
        j = select(2);


        if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
            if (j !== 0 && j !== undefined) {
                thumbBar[2].childNodes[j].style.border = tdo;
                thumbBar[2].childNodes[j - 1].style.border = tdb;
                displayedImg[2].setAttribute('src', `./pictures/${j-1 + 12}.JPG`);
                j--;
            } else if (j === 0) {
                thumbBar[2].childNodes[j].style.border = tdo;
                thumbBar[2].childNodes[5].style.border = tdb;
                displayedImg[2].setAttribute('src', './pictures/17.JPG');
                j = 5;
            }
        } 
        
        if (e.code === 'KeyD' || e.code === 'ArrowRight') {
            if (j !== 5 && j !== undefined) {
                thumbBar[2].childNodes[j].style.border = tdo;
                thumbBar[2].childNodes[j + 1].style.border = tdb;
                displayedImg[2].setAttribute('src', `./pictures/${j+1 + 12}.JPG`);
                j++;
            } else if (j === 5) {
                thumbBar[2].childNodes[j].style.border = tdo;
                thumbBar[2].childNodes[0].style.border = tdb;
                displayedImg[2].setAttribute('src', './pictures/12.JPG');
                j = 0;
            }
        }
        
        
    }
}

function dePopulate(arg) {
    let i = Number(arg);
    collections[i].removeEventListener('keydown', changeSelection);
    while (thumbBar[i].hasChildNodes()) {
        thumbBar[i].removeChild(thumbBar[i].firstChild);
    }
}