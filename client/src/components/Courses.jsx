import { useRecoilState, useRecoilValue } from "recoil";
import { courseState, searchedState } from "../store/atoms/subject.atom";
import { searchedString } from "../store/atoms/search.atom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
const Courses = () => {
    const [courses, setCourses] = useRecoilState(searchedState);
    const [allCourses, setAllCourses] = useRecoilState(courseState)
    const searchString = useRecoilValue(searchedString);
    const [loded, setLoded] = useState(false);


    useEffect(()=>{
        let iscancelled = false;
        if (!iscancelled) {
            loaddata()
        }
        return () => {
            iscancelled = true
        };
    }, []);
    const loaddata = async () => {
        const {data, error} = await supabase.from('Collab Data').select('*')
        console.log(error)
        setCourses(data)
        setAllCourses(data)
        setLoded(true)
    }


    const highlightName = (name) => {
        const index = name.toLowerCase().indexOf(searchString.toLowerCase());
        if (index === -1) {
            return name;
        }
        return (
            <>
                {name.substring(0, index)}
                <span className="bg-blue-600 text-white  dark:bg-blue-500 dark:text-white">{name.substring(index, index + searchString.length)}</span>
                {name.substring(index + searchString.length)}
            </>
        )
    }
    const highlightCode = (code) => {
        const index = code.toLowerCase().indexOf(searchString.toLowerCase());
        if (index === -1) {
            return code;
        }
        return (
            <>
                {code.substring(0, index)}
                <span className="bg-blue-600 text-white  dark:bg-blue-500 dark:text-white">{code.substring(index, index + searchString.length)}</span>
                {code.substring(index + searchString.length)}
            </>
        )
    }



    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg mx-auto border dark:border-gray-600" style={{ maxHeight: '75vh', maxWidth: "70vw" }}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Subject code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Subject name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Avg Grade
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Median Grade
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mode Grade
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Students Enrolled
                        </th>
                        <th scope="col" className="px-6 py-3">
                            EX
                        </th>
                        <th scope="col" className="px-6 py-3">
                            A
                        </th>
                        <th scope="col" className="px-6 py-3">
                            B
                        </th>
                        <th scope="col" className="px-6 py-3">
                            C
                        </th>
                        <th scope="col" className="px-6 py-3">
                            D
                        </th>
                        <th scope="col" className="px-6 py-3">
                            P
                        </th>
                        <th scope="col" className="px-6 py-3">
                            F
                        </th>f
                    </tr>
                </thead>
                <tbody>
                    {courses.length > 0 && courses.map((course, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {highlightCode(course.sub_code)}
                            </th>
                            <td className="px-6 py-4">
                                {/* remove the frist 8 characters from begining */}
                                {highlightName(course.course.substring(8))}
                            </td>

                            <td className="px-6 py-4">
                                {course.avg}
                            </td>
                            <td className="px-6 py-4">
                                {course.median}
                            </td>
                            <td className="px-6 py-4">
                                {course.mode}
                            </td>
                            <td className="px-6 py-4">
                                {course.total_students}
                            </td>
                            <td className="px-6 py-4">
                                {course.EX}
                            </td>
                            <td className="px-6 py-4">
                                {course.A}
                            </td>
                            <td className="px-6 py-4">
                                {course.B}
                            </td>
                            <td className="px-6 py-4">
                                {course.C}
                            </td>
                            <td className="px-6 py-4">
                                {course.D}
                            </td>
                            <td className="px-6 py-4">
                                {course.P}
                            </td>
                            <td className="px-6 py-4">
                                {course.F}
                            </td>
                        </tr>
                    ))}
                    {
                        !loded && (
                            <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                            style={{ marginTop: '20vh', marginLeft: "28vw", marginBottom: '20vh' }}>
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"
                            />
                            </svg>
                            Loading...
                            </button>
                        )
                    }
                    {
                        courses.length === 0 && (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td colSpan="5" className="px-6 py-4 text-center">
                                    No courses found
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Courses;
