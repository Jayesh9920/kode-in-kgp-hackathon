import Courses from "../components/Courses";
import SearchandFilter from "../components/SearchAndFilter";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
const Dashboard = () => {
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

    const checkuser = async (e) => {
        const { data } = await supabase.auth.getSession()
        console.log('a')
        console.log(data)
        if (data['session'] == null) {
            console.log('ice')
            navigate("/login")
        }
    }

  
    
    return (
        <div>
            <SearchandFilter />
            <Courses />
        </div>
    );
}

export default Dashboard;
