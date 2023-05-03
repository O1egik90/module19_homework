function checkKeyValue (obj){
    for (let key in obj) {
     console.log(key+ ': ' + obj[key]);
     }
   }
    
   const userIvanov = {
     name: 'Иван',
     surname: 'Иванов',
     age: '25'
   }
   
   checkKeyValue(userIvanov);