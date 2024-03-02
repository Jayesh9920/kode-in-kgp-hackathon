import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useRecoilValue } from "recoil";
import { userState } from "../store/atoms/user.atom";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
const NavBar = () => {
    const currUser = useRecoilValue(userState)
    const navigate = useNavigate();
    const SignOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error != null) {
            alert(error.message)
        } else {
            navigate("/login");
        }

    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/auth" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Breath Recomendation System</span>
                    </a>
                    <div className="flex md:order-2">
                        <div className="flex items-center space-x-4 p-3">
                        {
                            
                            currUser && currUser.session.user.email
                        }
                        </div>
                        {useLocation().pathname != "/login" &&
                            <button href="#" onClick={SignOut} className=" text-white  bg-blue-600 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-600 font-medium text-lg inline-flex items-center p-4">SignOut
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar;