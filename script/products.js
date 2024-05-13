const genericsDetails = document.getElementById('genericsDetails');

const brandsDetails = document.getElementById('brandsDetails');

const OTCDetails = document.getElementById('OTCDetails');

const generics = document.getElementById('Generics');

const brands = document.getElementById('Brands');

const OTC = document.getElementById('OTC');


document.querySelectorAll('.brandSwitch').forEach(anchor =>{
    anchor.addEventListener('click', (e)=>{
        e.preventDefault();
    })
})

function displayGeneries(){
    generics.classList.add('fade_in')
    brands.classList.remove('fade_in')
    OTC.classList.remove('fade_in')


    genericsDetails.style.display = 'flex'
    brandsDetails.style.display = 'none'
    OTCDetails.style.display = 'none'

}

function displayBrands(){
    generics.classList.remove('fade_in')
    brands.classList.add('fade_in')
    OTC.classList.remove('fade_in')


    genericsDetails.style.display = 'none'
    brandsDetails.style.display = 'flex'
    OTCDetails.style.display = 'none'
}

function displayOTC(){
    generics.classList.remove('fade_in')
    brands.classList.remove('fade_in')
    OTC.classList.add('fade_in')


    genericsDetails.style.display = 'none'
    brandsDetails.style.display = 'none'
    OTCDetails.style.display = 'flex'

}
