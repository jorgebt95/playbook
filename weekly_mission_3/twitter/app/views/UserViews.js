const UserServices = require('./../services/UserServices')
class UserViews{

    static createUser(payload){
        
        if(payload === null){            
            return {error: "payload no existe"}
        }else if((typeof payload.username !== 'string' || payload.username === null) || (typeof payload.name !== 'string' || payload.name === null) || (typeof payload.id !== 'number' || payload.id === null)){
            return {error: "necesita tener valor valido"}
        }else{
            
            return UserServices.create(payload.id, payload.username, payload.name)
        } 
    }
}


module.exports = UserViews;