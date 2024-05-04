const menuBar = document.getElementById('meunBar');
const navBarNavDetailsDirectoryMobileView = document.getElementById('nav_Bar-navDetails-directory_mobileView');
const closeMenuBar = document.getElementById('closeMenuBar')
menuBar.addEventListener('click', ()=>{
    navBarNavDetailsDirectoryMobileView.classList.toggle('showdetails')
})
closeMenuBar.addEventListener('click', ()=>{
    navBarNavDetailsDirectoryMobileView.classList.toggle('showdetails')
})