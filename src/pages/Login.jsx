import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <>
            <Header
                logo="Welcome on the app"
                heading="Please log into your account"
                paragraph="Or register right here : "
                linkName="Register"
                linkUrl="/register"
            />
            <Login/>

        </>
    )
}