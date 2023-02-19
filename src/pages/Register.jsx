import Header from "../components/Header";
import Register from "../components/Register";

export default function RegisterPage(){
    return(
        <>
            <Header
                heading="Register to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Register/>
        </>
    )
}