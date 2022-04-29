'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
     // removemos las clases que tenga, ('xxx', 'bbb', 'aaa')  
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++ )
    btnsOpenModal[i].addEventListener('click', openModal);
    
// btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

//Podemos simplicar el cod anterior
const closeModal = function(){
    // agregamos las clases que tenga, ('xxx', 'bbb', 'aaa')  
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    // if (e.key === 'Escape'){
    //     if (!modal.classList.contains('hidden')){
    //         closeModal();
    //     }
    // }
    // podemos refactorizar asi:
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});

