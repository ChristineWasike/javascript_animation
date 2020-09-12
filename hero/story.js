// Setting up website here
let hero = document.querySelector('#hero');
let villain = document.querySelector('#villain');
let lightning = document.querySelector('#lightning');

// Setup animation code here
let lightningStart = {"left":"290px"};
let lightningEnd  = {"left": "900px"};
let options = {"duration": 1000};
let lightningMiss = {"left": "900px", "top": "10px"};


let hitVillian = () =>{
    let villianStart = {
        transform: 'rotate(0deg)',
        opacity: 100
    };

    let villianEnd = {
        transform: 'rotate(1000deg)',
        opacity: 0
    };

    let options = {"duration": 1500};

    villain.animate([villianStart, villianEnd], options);
}

// Run animation code here
lightning.animate([lightningStart, lightningEnd], options).onfinish  = hitVillian;
// lightning.animate([lightningEnd, lightningStart], options)
// lightning.animate([lightningStart, lightningMiss], options)