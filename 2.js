function showProps(obj, objKeyName) {
    console.log(objKeyName in obj);
}

const student1 = {
   name: "Alex", 
   ownCity: "Tver",
   age: 19,
   course: "Frontend"
 };


 showProps(student1, "same");  
 showProps(student1, "name"); 

