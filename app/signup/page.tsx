import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"
import SignUp from "../Components/SignupPage";
import { redirect } from "next/navigation";


const SignupPage = async () => {
    const session = await getServerSession(NEXT_AUTH);
    if (session?.user) {
        redirect("/rssfeedsetup");
        
    }
    return (
        <SignUp/>
    );
}
export default SignupPage;