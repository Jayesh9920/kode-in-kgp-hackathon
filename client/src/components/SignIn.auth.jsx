import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [errorMsg, setErrorMsg] = useState("");

    const SignIn = async () => {
        const { data: { session }, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        console.log(error)
        if (session != null) {
            navigate('/dashboard')
        } else {
            if (error.message == 'Email not confirmed') {
                setErrorMsg('Email not verified! Please check your inbox.')
                onOpen()

            } else if (error.message == 'Invalid login credentials') {
                setErrorMsg('Invalid login credentials! Please check your email and password.')
                onOpen()
            } else {
                console.log(error.message)
                setErrorMsg(error.message)
                onOpen()
            }
        }
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }


    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }



    return (
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <Modal isOpen={isOpen} backdrop="blur" onOpenChange={onOpenChange} className="dark:bg-black bg-white rounded-xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    {errorMsg}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose} className="bg-red-500 text-white ">
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Sign In</h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Sign in to your account to continue your learning journey and access all of the latest features.
            </p>
            <div className="mb-5 flex">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Your Institute email</label>
                <input type="email" id="in_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@kgpian.iitkgp.ac.in" required value={email} onChange={handleEmailInput} />
            </div>
            <div className="mb-5 flex">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Password</label>
                <input type="password" id="in_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required value={password} onChange={handlePasswordInput} />
            </div>
            <button href="#" onClick={SignIn} className="p-4 text-white dark:text-black bg-blue-600 dark:bg-blue-500 hover:underline font-medium text-lg inline-flex items-center">Sign In
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>


    )

}

export default SignInComponent;