const bcrypt = require('bcrypt');
const pass = '!]m:#$xDY@p/QDeW';

//hash from 2^10 until 2^20
for (let saltRounds = 10; saltRounds <= 15; saltRounds++) { 
  bcrypt.hash(pass, saltRounds)
  .then((passHashed)=> {
    console.time(`Time: ${saltRounds}`);
        console.log(passHashed);
    console.timeEnd(`Time: ${saltRounds}`);
  });
}

//form
let userPass = '!]m:#$xDY@p/QDeW'


async function check(username, pass){

    //searching for user's password in the database
    let passHashedDB = '$2b$12$dbstSfo1FN9jnZOSQ96N7eMMMe9FFI2QmYWo6E44WhutEUg9kZOcW'
    
    const match = await bcrypt.compare(pass, passHashedDB )

    if(match) {
        console.log('Granted!')
    }else {
        console.log('Access Denied')
    }
}

check('JediMaster',userPass)