const menuBar = document.getElementById('meunBar');
const navBarNavDetailsDirectoryMobileView = document.getElementById('nav_Bar-navDetails-directory_mobileView');
const closeMenuBar = document.getElementById('closeMenuBar')
menuBar.addEventListener('click', ()=>{
    navBarNavDetailsDirectoryMobileView.classList.toggle('showdetails')
})
closeMenuBar.addEventListener('click', ()=>{
    navBarNavDetailsDirectoryMobileView.classList.toggle('showdetails')
})

const nav_BarNavDetailsSearchAndContactSearchbar = document.getElementById('nav_Bar-navDetails-searchAndContact_searchbar');
const searchBarClose = document.getElementById('searchBar_close');
const nav_BarNavDetailsSearchAndContactSearchBarCover = document.getElementById('nav_Bar-navDetails-searchAndContact_SearchBarCover');
nav_BarNavDetailsSearchAndContactSearchbar.addEventListener('click', ()=>{
    nav_BarNavDetailsSearchAndContactSearchBarCover.classList.toggle('showdetails')
});
searchBarClose.addEventListener('click', ()=>{
    nav_BarNavDetailsSearchAndContactSearchBarCover.classList.toggle('showdetails')
})
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('click', ()=>{
    nav_BarNavDetailsSearchAndContactSearchBarCover.classList.toggle('showdetails')
});



const dropDown = document.getElementById('nav_Bar-navDetails-directory_mobileViewLink_dropdown');
const dropDownDetails = document.getElementById('nav_Bar-navDetails-directory_mobileViewLink_dropdownDetails');
dropDown.addEventListener('click', ()=>{
    dropDownDetails.classList.toggle('dropdownShown')
console.log(dropDownDetails);

})