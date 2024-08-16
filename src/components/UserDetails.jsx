import { useState } from "react"

const [user , userdata] = useState(null);

const getdata = async (event) =>{
    event.preventDefault();
        try{
            const reponse = fetch("http://localhost:3001/api/users",{
                method:"put",
                headers:{
                    "Content-Type" : "application/json" 
                },
                body: JSON.stringify({userdata})
            })  
        }catch(error){console.log("there was an error with the user")}
}

const userDetails = () => {
    return(
        <div>
            <p>{user.name}</p>
        </div>
    )
}