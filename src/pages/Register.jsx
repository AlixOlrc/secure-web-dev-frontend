import Header from "../components/Header";
import Register from "../components/Register";

export default function RegisterPage(){
    return(
        <>
            <Header
                heading="Register to create an account"
                paragraph="Or log into your account : "
                linkName="Login"
                linkUrl="/"
            />
            <Register/>
        </>
    )
}