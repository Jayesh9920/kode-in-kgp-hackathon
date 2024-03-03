import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import SignInComponent from "../components/SignIn.auth";
import SignUpComponent from "../components/SignUp.auth";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let iscancelled = false;
        if (!iscancelled) {
            checkuser()
        }
        return () => {
            iscancelled = true
        };
    }, []);

    const checkuser = async () => {
        const { data } = await supabase.auth.getSession()
        if (data['session'] != null) {
            navigate("/dashboard")
        }
    }

    return (
        <>
            <section className="bg-white dark:bg-gray-900 p-0" style={{ height: "100%" }}>
                <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <SignInComponent />
                        <SignUpComponent />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Landing;
