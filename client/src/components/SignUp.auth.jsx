import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const SignUpComponent = () => {
    const [email, setEmail] = useState("");
    const [roll, setRoll] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [cg, setCGPA] = useState("");
    const [goals, setCareerGoal] = useState("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [errorMsg, setErrorMsg] = useState("");

    const careerGoals = [
        "Select Career Goal",
        "Software Development",
        "Data Science / Analytics",
        "Finance / Consulting",
        "Management",
        "Quantitative Trading",
        "Embedded system",
        "Core"
    ];

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleRollInput = (e) => {
        setRoll(e.target.value);
    }

    const handlePasswordInput = (e)=>{
        setPassword(e.target.value);
    }

    const handleConfirmPasswordInput = (e)=>{
        setConfirmPassword(e.target.value);
    }
    const handleCGPAInput = (e) => {
        setCGPA(e.target.value);
    }

    const handleCareerGoalInput = (e) => {
        setCareerGoal(e.target.value);
    }
    const SignUp = async () => {
        
        //add code to check insti mail and same password and other fields are filled or not
        if (email.endsWith('iitkgp.ac.in') && password == confirm_password && cg != '' && goals != '') {
            const { data: { user }, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            console.log(error)
            if (user == null) {
                if (error.message == 'Email rate limit exceeded') {
                    setErrorMsg('Email rate limit exceeded. Try in some time.')
                    onOpen()
                } else if (error.message == 'Signup requires a valid password') {
                    setErrorMsg('Signup requires a valid password')
                    onOpen()
                } else if (error.message == 'To signup, please provide your email') {
                    setErrorMsg('To signup, please provide your email')
                    onOpen()
                } else if (error.message == 'Password should be at least 6 characters.') {
                    setErrorMsg('Password should be at least 6 characters.')
                    onOpen()
                } else {
                    console.log(error.message)
                    setErrorMsg('Account not created check console')
                    onOpen()
                }

            } else {
                const { errors } = await supabase.from('UserData').insert({ email: email, name: 'jayesh', roll: roll, cg: cg, goal: goals })
                setErrorMsg("Account successfully created! please check your Institute email's inbox and click over the verification url")
                onOpen()
            }
        } else {
            if (!email.endsWith('iitkgp.ac.in')) {
                setErrorMsg('Use Institute Email only')
                onOpen()
            }

            if (password != confirm_password) {
                // show error
                setErrorMsg('Password and Confirm Password should be same.')
                onOpen()
            }
            if (cg == '') {
                setErrorMsg('Please enter a your actual CGPA.')
                onOpen()
            }
        }

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
           
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Sign Up</h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Sign in to your account to continue your learning journey and access all of the latest features.
            </p>
            <div className="mb-5 flex">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Your Institute email</label>
                <input type="email" id="up_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@kgpian.iitkgp.ac.in" required value={email} onChange={handleEmailInput} />
            </div>
            <div className="mb-5 flex">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Enter Your Roll</label>
                <input type="text" id="up_roll" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ME10031" required value={roll} onChange={handleRollInput}/>
            </div>
            <div className="mb-5 flex">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Password</label>
                <input type="password" id="up_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required value={password} onChange={handlePasswordInput}/>
            </div>
            <div className="mb-5 flex">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Confirm Password</label>
                <input type="password" id="up_confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required value={confirm_password} onChange={handleConfirmPasswordInput}/>
            </div>
            <div className="mb-5 flex">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Current CGPA</label>
                <input type="number" id="up_cg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9.2" required onChange={handleCGPAInput} value={cg}/>
            </div>
            <div className="mb-5 flex">
                <label htmlFor="goals" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Select Career Goals</label>
                <select name="careerGoal" id="goals" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleCareerGoalInput} value={goals}>
                    {careerGoals.map((goal, index) => (
                        <option key={index} value={goal} className="p-3 rounded-xl m-3">{goal}</option>
                    ))}
                </select>
            </div>
            <button href="#" onClick={SignUp} className="p-4 text-white dark:text-black bg-blue-600 dark:bg-blue-500 hover:underline font-medium text-lg inline-flex items-center">Sign Up
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>


    )
}


export default SignUpComponent;