function addNames(){
    const FirstName = document.getElementById('first').value;
    const SecondName = document.getElementById('second').value;
    const ThirdName = document.getElementById('third').value;
    const FourthName = document.getElementById('fourth').value;

    document.querySelector('.p1').innerHTML =  `<h1>${FirstName}</h1>`;
    document.querySelector('.p2').innerHTML = `<h1>${SecondName}</h1>`;
    document.querySelector('.p3').innerHTML =  `<h1>${ThirdName}</h1>`;
    document.querySelector('.p4').innerHTML = `<h1>${FourthName}</h1>`;

}