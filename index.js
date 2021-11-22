
//1

document.body.style.fontFamily= 'Arial'

//2
document.querySelector('.title').style.textAlign ='center';

//3
let label = document.querySelectorAll('.category')
 label.forEach(element=>

{
    element.style.color='red';
    element.style.fontStyle='italic'
})

 
 //4

 function colorGenerator(element)
{
    randomNumber = Math.round(Math.random()*100)  

    randomColor = document.getElementsByClassName(element)
    randomColor[0].style.backgroundColor=`#${randomNumber.toString()<10 ? 15 : randomNumber.toString()}10F6 `
    randomColor[1].style.backgroundColor=`#${randomNumber.toString()<10 ? 15 : randomNumber.toString()}1165 `
    randomColor[2].style.backgroundColor=`#${randomNumber.toString()<10 ? 15 : randomNumber.toString()}1298 `
}
colorGenerator('food-category')


 let width =window.innerWidth;


 if (width <= 425)
{
    document.querySelector('.main').style.display = 'flex';

    document.querySelector('.main').style.flexDirection = 'column';

    document.querySelector('.main').style.alignItems = 'center';

    document.querySelectorAll('.food-category').forEach(element => element.style.width='250px')  
    
    document.querySelector('.footer').style.display='flex'

    
    document.querySelector('.footer').style.flexDirection='column'

    document.querySelector('.footer').style.alignItems='center'

   
}
else
{
    document.querySelector('.main').style.display = 'flex'

    document.querySelector('.main').style.justifyContent = 'space-around'

    
    document.querySelectorAll('.food-category').forEach(element => element.style.width='30%')

    document.querySelectorAll('.food-category').forEach(element => element.style.marginRight='10px')  

    document.querySelector('.footer').style.display='flex'

    document.querySelector('.footer').style.justifyContent = 'space-around'

    document.querySelector('.footer').style.alignItems='center'
    
    
}

//6
let warn = document.getElementById('warning');

warn.style.fontSize='24px';
warn.style.fontFamily='Time new roman'

//7

let test=document.querySelectorAll('.allergy-info');

for(let i = 0; i < test.length; i++)
{
    
    if(i%2 != 0)
    {
       
         test[i].style.backgroundColor = 'skyBlue'
    }
}

//8

document.querySelector('.allergy-warning').style.display='flex'

document.querySelector('.allergy-warning').style.flexDirection='column'

document.querySelector('.allergy-warning').style.alignItems='center'

document.querySelector('.allergies').style.alignItems='center'

document.querySelector('.allergies').style.alignContent='center'

document.querySelector('.allergies').style.width='50%'

document.querySelectorAll('.allergy-info').forEach(element=> element.style.width = '100%'  )

//9
document.querySelectorAll('.food-desc').forEach(element=>
    {
        element.style.border ='4px solid orange';
        element.style.borderRadius='50%';
        element.style.padding='10px';
        element.style.width='15mw';
        element.style.margin='10px'
    }
    )



















