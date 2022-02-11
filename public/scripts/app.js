
 const contactForm = document.querySelector('.contact-form');
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();

     let name = document.getElementById('name-f18c')
     let email = document.getElementById('email-f18c')
     let phone = document.getElementById('phone-cbff')
     let date = document.getElementById('date-33f9')
     let message = document.getElementById('message-1015')

     let formData = {
         name: name.value,
         email: email.value,
         phone: phone.value,
         date: date.value,
         message: message.value
     }

     let xhr = new XMLHttpRequest();
     xhr.open('POST', '/sendmail');
     xhr.setRequestHeader('content-type', 'application.json');
     xhr.onload = function() {
         if(xhr.responseText == 'success'){
             alert('E-mail sent!')
             name.value = ''
             email.value = ''
             phone.value = ''
             date.value = ''
             message.value = ''
         } else {
             return
         }
     }

     xhr.send(JSON.stringify(formData))
 })

