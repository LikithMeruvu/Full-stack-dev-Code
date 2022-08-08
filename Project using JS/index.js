
function addNames(){
    const FirstName = document.getElementById('first').value;
    const secondName = document.getElementById('second').value;

    document.querySelector('.p1').innerHTML =  `<h1>${FirstName}</h1>`;
    document.querySelector('.p2').innerHTML = `<h1>${secondName}</h1>`;

}