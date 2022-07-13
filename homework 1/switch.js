let login = 'admin';
let password = 'TheMaster';
switch (login) {
    case 'admin':{
        switch (password){
            case 'TheMaster':{
                console.log('Welcome!');break;
            }
            case 'cansel':{
                console.log('Canseled');break;
            }
            case 'other':{
                console.log('Wrong Password');
            }
        }
        break;
    }
    case 'cansel':{
        console.log('Canseled');
    }
    case 'other':{
        console.log('I do not know you');
    }
}