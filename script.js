//Get the home link element
const homeLink=document.querySelector('a[href="home.html"]');

//Attach a click event listner to the home link
homeLink.addEventListener('click', (event)=>{
    //prevent the default link behaviour
    event.preventDefault();

    //load the product page
    window.location.href='home.html';
})
//Get the product link element
const productLink=document.querySelector('a[href="product.html"]');

//Attach a click event listner to the product link
productLink.addEventListener('click', (event)=>{
    //prevent the default link behaviour
    event.preventDefault();

    //load the product page
    window.location.href='product.html';
})

//Get the contact link element
const contactlink = document.querySelector('a[href="contact.html"]');

//attach a click event listner to the contact link
contactlink.addEventListener('click', (event)=>{
    //prevent the default link behaviour
    event.preventDefault();

    //load contact page
    window.location.href='contact.html'
})