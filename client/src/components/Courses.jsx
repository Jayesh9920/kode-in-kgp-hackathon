import { useRecoilState, useRecoilValue } from "recoil";
import { courseState, searchedState } from "../store/atoms/subject.atom";
import { searchedString } from "../store/atoms/search.atom";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const Project_URL = import.meta.env.VITE_APP_PROJECT_URL;
const Anon_KEY = import.meta.env.VITE_APP_ANON_KEY;
const supabase = createClient(Project_URL, Anon_KEY);
const Courses = () => {
    const [courses, setCourses] = useRecoilState(searchedState);
    const [allCourses, setAllCourses] = useRecoilState(courseState)
    const searchString = useRecoilValue(searchedString);


    useEffect(()=>{
        let iscancelled = false;
        if (!iscancelled) {
            loaddata()
        }
        return () => {
            iscancelled = true
        };
    }, []);
    const loaddata = async (e) => {
        const {data, error} = await supabase.from('Colab Data').select('*')
        console.log(error)
        setCourses(data)
        setAllCourses(data)
        console.log('oo')
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg mx-auto border dark:border-gray-600" style={{ maxHeight: '75vh' }}>
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

                        </tr>
                    ))}
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
