const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdowns => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

/*
multiple dropdown
*/

//Click to select element 

select.addEventListener('click',() =>  {

    //cliked style to slected element
    select.classList.toggle('select-clicked');
     
    //rotate style
    caret.classList.toggle('caret-rotate');

    menu.classList.toggle('menu-open');
});


options.forEach(option => {
    option.addEventListener('clcik', () => {

        select.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');

    })
        option.forEach(option => {
            option.classList.add('active');
        })
    
})


});