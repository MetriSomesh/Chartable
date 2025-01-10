import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"
import SignUp from "../Components/SignupPage";


const SignupPage = async () => {
    const session = await getServerSession(NEXT_AUTH);
    if (session?.user) {
        // redirect("/");
        console.log(session)
    }
    return (
        <SignUp/>
    );
}
export default SignupPage;