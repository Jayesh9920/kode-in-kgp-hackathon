import { useRecoilValue } from "recoil";
import { searchedState } from "../store/atoms/subject.atom";
import { searchedString } from "../store/atoms/search.atom";

const Courses = () => {
    const courses = useRecoilValue(searchedState);
    const srarchString = useRecoilValue(searchedString);
    const highlightName = (name) => {
        const index = name.toLowerCase().indexOf(srarchString.toLowerCase());
        if (index === -1) {
            return name;
        }
        return (
            <>
                {name.substring(0, index)}
                <span className="bg-blue-600 text-white  dark:bg-blue-500 dark:text-white">{name.substring(index, index + srarchString.length)}</span>
                {name.substring(index + srarchString.length)}
            </>
        )
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg mx-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Subject code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Subject name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Credit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Avg CGPA
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.length > 0 && courses.map((course, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {course.code}
                            </th>
                            <td className="px-6 py-4">
                                {highlightName(course.name)}
                            </td>
                            <td className="px-6 py-4">
                                {course.credit}
                            </td>
                            <td className="px-6 py-4">
                                {course.avgCgpa}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
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