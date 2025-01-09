"use client"

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { signIn } from 'next-auth/react';


export default function SignIn() {
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [checkingPassword, setCheckingPassword] = useState(false);

    const passwordRef = useRef<HTMLInputElement>(null);
     const [requiredError, setRequiredError] = useState({
       emailReq: false,
       passReq: false,
     });
    const emailRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
      const email = useRef("");
      const password = useRef("");


    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState: any) => !prevState);
    }

    function handleEmailChange(e:React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        email.current = value;
    }

    async function handleSubmit(e?:React.FormEvent<HTMLButtonElement>) {
        const loadId = toast.loading('Signing in...');
        if (e) {
            e.preventDefault();
        }


        if (!email.current || !password.current) {
            setRequiredError({
              emailReq: email.current ? false : true,
              passReq: password.current ? false : true,
            });

            toast.dismiss(loadId);
            return;
        }

        setCheckingPassword(true);
        // const res = await 
   }

    return (
        <div>
            hello
        </div>
    );
}