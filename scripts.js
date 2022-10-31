window.onload = function(){
    let button = document.querySelector('button');
    let msg = document.querySelector('.message');

    button.addEventListener('click', function pressed(e){
        e.preventDefault();
        let email = document.querySelector('#email').value;
        if(email.length>0){
            msg.innerHTML = 'Thank you! Your email address ' +email+ ' has been added to the mailing list!';
        }else {
            msg.innerHTML = 'Please enter a valid email address';
        }
        
    });

}