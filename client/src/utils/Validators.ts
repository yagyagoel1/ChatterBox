


export const usernameValidator = (username: string|undefined) => { 
    if(!username) return {isValid:false,errorMessage:"username is required"}
    if(username.length > 20) return {isValid:false,errorMessage:"username is too long"}
    if(username.length < 4) return {isValid:false,errorMessage:"username is too short"}
    
}