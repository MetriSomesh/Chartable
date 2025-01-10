import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"
import SignIn from "../Components/SigninPage";
// import { redirect } from "next/navigation";


const Signin = async () => {
    const session = await getServerSession(NEXT_AUTH);
    console.log(session);
    if (session?.user) {
        // redirect("/");
    }
    return (
        <SignIn/>
    );
}
export default Signin;