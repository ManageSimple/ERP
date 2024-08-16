import {useState } from "react"

const RegistrationForm = () => {
    const [isPopopVisible, setPopupVisible] = useState(false);
    const [formData ,setData] = useState({
        name : '',
        email : '',
        password : '',
        phone : ''
    })

    const togglepopup= () => {
        setPopupVisible(!isPopopVisible);
    }

    const handleChange = (e) => {
        const{id , value} = e.target ; 
        setData((prevdata) =>({
            ...prevdata,
            [id] : value , 
        }));
    };

    const handleSubmit = async (event) =>{
        event.preventDefault() ;
        try{
            const response = await fetch("http://localhost:3001/api/users",{
                method: "post",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();

            if(response.ok){
                setData({
                    name : '',
                    email : '',
                    password : '',
                    phone : '',
                });
                console.log("submitted and recieved")
            }
        }catch(error){console.log("there was an error uploading data" , error)}
    }

    return(
        <div>
            <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            onClick={togglepopup}
            >register</button>

            {isPopopVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Registration</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="enter your name"
                            />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="enter your email"
                            />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                password 
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="enter your new Password"
                            />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                PhoneNo
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="Phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="enter your Phone no "
                            />
                            </div>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded"
                                onClick={togglepopup}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
};

export default RegistrationForm ; 