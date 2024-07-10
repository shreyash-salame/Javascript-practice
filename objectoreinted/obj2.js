function getbirthyear(){
    return new Date().getFullYear()-this.age
}
function createUser(firstname,lastname,age){
    const user={
        firstname: firstname ,
        lastname: lastname,
        age: age,
        getbirthyear   
    }
    
    return user
}
const user1=createUser('shreyash','salame',26)
const user2=createUser('sonu','salame',52)
console.log(user1);
console.log(user2);
console.log(user1.getbirthyear());
console.log(user2.getbirthyear());
