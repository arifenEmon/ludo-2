let diceImg = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png',];
let dice = document.querySelector('.box img')
let click = document.querySelector('#btn');
let btn = document.querySelectorAll('.btn-grp button')
let clickNum;
let display = document.querySelector('.display')
let colorDisplay = document.querySelector('#colorDisplay')
let clickSound = new Audio('audio/click2.wav');
let warningSound = new Audio('audio/warning.wav');
let successSound= new Audio('audio/addp.wav');


for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', ()=>{
        clickNum = i+1;
        for(let x=0; x<btn.length; x++){
            btn[x].classList.remove('btnActive')
        }
        btn[i].classList.add('btnActive')
        
        console.log(clickNum);
    })
}



click.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 6)
    clickSound.play()
    setTimeout(()=>{
        for(let i = 0; i<diceImg.length ; i++){
            if(random== i){
                dice.src = diceImg[i]
            }
        }
        display.innerHTML = random+1
    },800)

    dice.classList.add('diceRot')

    setTimeout(()=>{
        dice.classList.remove('diceRot')
        btn[clickNum-1].classList.remove('btnActive')
    }, 1500)

    colorDisplay.style.background = 'transparent'
    if(clickNum == random+1){
        setTimeout(()=>{
            
            successSound.play()
            colorDisplay.style.background = 'green'
        },800)
        
    }else{
        setTimeout(()=>{
            warningSound.play()
            colorDisplay.style.background = 'red'
        },800)
    }

    dice.style.left = '10%'
    setTimeout(()=>{
        dice.style.left = '41%'
    },800)
    
    console.log(random+1);
})