document.getElementById('submit').addEventListener('click', function(){
    const emailId = document.getElementById('email')
    const passwordId = document.getElementById('password')

    
        if(emailId.value == 'omar.lu86@gmail.com' && passwordId.value == '1234'){
            console.log('Success')
            emailId.value = ''
            passwordId.value = ''
            window.location.href = 'banking.html'
        }else{
            console.log('please Enter valid Email and Password')
            emailId.value = ''
            passwordId.value = ''
        }

     console.log('hi')
})
