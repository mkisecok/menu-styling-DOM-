
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
    randomColor[0].style.backgroundColor=`#${randomNumber.toString()<10 ? 15 : randomNumber.toString()}15FF `
    randomColor[1].style.backgroundColor=`#${randomNumber.toString()<10 ? 15 : randomNumber.toString()}1165 `
    randomColor[2].style.backgroundColor=`#${randomNumber.toString()<10 ? 15 : randomNumber.toString()}1298 `
}
colorGenerator('food-category')

//  function colorGenerator(element)
//  {  
//     let colorPalete=["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];

//     let  randomize = Math.floor(Math.random() * colorPalete.length);

//     let selectColor = colorPalete[randomize];
   
//       document.querySelectorAll(element).forEach(element=>
//     {
//             element.style.backgroundColor=selectColor
//     })


// }
 // colorGenerator('.food-category')

 //5

 

 
 let width =window.innerWidth;


 if (width <= 425)
{
    document.querySelector('.main').style.display = 'flex';
    document.querySelector('.main').style.flexDirection = 'column';
    document.querySelector('.main').style.alignItems = 'center';
    document.querySelectorAll('.food-category').forEach(element => element.style.width='250px')  
}
else
{
    document.querySelector('.main').style.display = 'flex'
    document.querySelector('.main').style.justifyContent = 'space-around'
    console.log(document.querySelectorAll('.food-category'));
    document.querySelectorAll('.food-category').forEach(element => element.style.width='30%')
    document.querySelectorAll('.food-category').forEach(element => element.style.marginRight='10px')  
}

//6
let warn = document.getElementById('warning');
console.log(warn);
warn.style.fontSize='24px';
warn.style.fontFamily='Time new roman'

//7

let test=document.querySelectorAll('.allergy-info');

for(let i = 0; i < test.length; i++)
{
    //console.log(test[i]);
    if(i%2 != 0)
    {
        //console.log(test[i]);
         test[i].style.backgroundColor = 'skyBlue'
    }
}








