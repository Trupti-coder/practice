import { Link } from "react-router-dom";
function SignUpNavigation(){

    return(
        <>
        <ul>
            
            <li>
                <Link to="/signup">SignUp</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </>
    )

}
export default SignUpNavigation;