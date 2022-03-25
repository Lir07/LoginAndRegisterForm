document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
})

var obj=document.getElementsByClassName('writable');
//[ element1, element2, element3, element4]

//element1.innerHTML=''
//element2.innerHTML=''
//element3.innerHTML=''
//element4.innerHTML=''
// obj[0].addEventListener('keyup',function(e){

// })
// obj[1].addEventListener('keyup',function(e){

// })
// obj[2].addEventListener('keyup',function(e){

// })
// obj[3].addEventListener('keyup',function(e){

// })
var data={}
// data['name']='arber'

for(var element of obj){
    element.addEventListener('keyup',function(e){
        data[e.target.name]=e.target.value
        if(e.target.name === 'password' ||e.target.name == 'confirmation-password' )
            PasswordValidation(e.target.value)

        
            for(var i=0;i<12;i++){
                
            }

        if(['password','confirmation-password'].forEach())
            PasswordValidation(e.target.value)
        
        if(e.target.name === 'username')
            UsernameValidation(e.target.value)
    })
}

function UsernameValidation(value){
    var tekstReg=/^[]+$/
    var lbl=document.getElementById('usernameLbl')
    var message='';
    var color='';
    if(!tekstReg.test(value)){
        message='Username nuk eshte valid.'
        color="red"
        lbl.classList.remove('hidden')
    }

    lbl.innerHTML=message;
    lbl.style.color=color;
}
function PasswordValidation(value){
    
}




var v1=document.getElementById('v1')
var v2=document.getElementById('v2')


// console.log('v1.value+v2.value')?
// console.log(Number(v1.value)+Number(v2.value))


// var obj1=document.getElementById('writable').innerHTML="";