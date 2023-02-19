import { useState } from 'react';
import { registerFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import {useNavigate} from 'react-router-dom';

const fields=registerFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Register(){
    const [registerState,setRegisterState]=useState(fieldsState);

    const navigate = useNavigate();

    const handleChange=(e)=>setRegisterState({...registerState,[e.target.id]:e.target.value});

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(registerState);
        if(registerState.password===registerState.confirmPassword){
            createAccount();
        }else{
            alert("The password and the confirm password does not match")
        }

    }

    const createAccount=()=> {
        fetch("https://secure-web-dev.fly.dev/users/register", {
            method: 'POST',
            redirect: 'follow',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                    username: registerState.username,
                    password: registerState.password,
                    role:registerState.role,
            })
        }).then((response) => {
            if(response.ok){
                alert("Your account has been created, you will be redirected to the login page.");
                navigate('/');
            }else{
                alert("The username is already taken.")
            }
        })
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={registerState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Register" />
            </div>
        </form>
    )
}