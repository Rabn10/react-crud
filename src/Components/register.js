import { useState } from "react"
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const {http} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setpassword] = useState();

    const submitForm = () => {
        // console.log(email + ' ' + password);
        http.post('/register',{name:name,email:email,password:password}).then((res)=>{
            navigate('/login');
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={e=>setName(e.target.value)} id="name" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={e=>setpassword(e.target.value)} id="pwd"/>
                    </div>

                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>               
        </div>
    )
}