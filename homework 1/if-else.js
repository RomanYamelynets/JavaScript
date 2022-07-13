'use strict'

let login = 'admin'; 
let password = 'TheMaster';
if (login == 'admin') {
    if (password == 'TheMaster') {
        console.log('Welcome!');
    }
    else if (login == 'Cansel') {
      console.log('Canseled');
    }
    else{
        console.log('Wrong password')
    }
}
else if (login == 'Cansel') {
  console.log('Canseled')
}
else {
    console.log('I do not know you')
}