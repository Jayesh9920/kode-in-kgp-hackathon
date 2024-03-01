import { useRecoilState, useRecoilValue } from "recoil";
import { courseState, searchedState } from "../store/atoms/subject.atom";
import { searchedString } from "../store/atoms/search.atom";

const SearchandFilter = () => {
    const [searchString, setSearchString] = useRecoilState(searchedString);
    const allSubject = useRecoilValue(courseState);
    const [, setSubject] = useRecoilState(searchedState);
    const coursesToDepartment = {
        "Departments": "",
        "Mathamatics and Computing": "MA",
        "Computer Science and Engineering": "CS",
        "Electrical Engineering": "EE",
        "Mechanical Engineering": "ME",
        "Civil Engineering": "CE",
        "Chemical Engineering": "CH",
        "Aerospace Engineering": "AE",
        "Biotechnology": "BT",
        "Metallurgical and Materials Engineering": "MMT",
        "Ocean Engineering and Naval Architecture": "NA",
        "Physics": "PH",
        "Chemistry": "CY",
        "Mathematics": "MA",
        "Humanities and Social Sciences": "HS",
        "Architecture": "AR",
        "Agricultural and Food Engineering": "AG",
        "Mining Engineering": "MI",
    }

    const careerGoals = {
        "Select Career Goal": ['CS', 'EE', 'ME', 'CE', 'CH', 'AE', 'BT', 'MMT', 'NA', 'PH', 'CY', 'MA', 'HS', 'AR', 'AG', 'MI'],
        "Software Development": ["CS", "MA", "EE"],
        "Data Science / Analytics": ["CS", "MA", "EE", "PH", "CY"],
        "Finance / Consulting": ["CS", "MA", "EE", "PH", "CY"],
        "Management": ["CS", "MA", "EE", "PH", "CY"],
        "Quantative Trading": ["CS", "MA", "EE", "PH", "CY"],
        "Embeded system": ["CS", "EE", "MA"],
        "Core": ["CS", "EE", "ME", "CE", "CH", "AE", "BT", "MMT", "NA", "PH", "CY", "MA", "HS", "AR", "AG", "MI"]
    }

        
    const handleCareerGoal = (e) => {
        const filteredSubject = allSubject.filter((subject) => {
            return careerGoals[e.target.value].includes(subject.code.substring(0, 2));
        })
        setSubject(filteredSubject);
    }

    const handleSearch = (e) => {
        setSearchString(e.target.value);
        const filteredSubject = allSubject.filter((subject) => {
            return subject.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setSubject(filteredSubject);
    }

    const handleFilter = (e) => {
        const filteredSubject = allSubject.filter((subject) => {
            return subject.code.startsWith(coursesToDepartment[e.target.value]);
        })
        setSubject(filteredSubject);
    }

    return (
        <div>
            <input type="number" placeholder="CGPA" className="p-3 rounded-xl m-2 border dark:border-gray-600 w-36"/>
            <select name="careerGoal" id="careerGoal" className="p-3 rounded-xl m-3 border dark:border-gray-600" onChange={handleCareerGoal}>
                {Object.keys(careerGoals).map((goal, index) => (
                    <option key={index} value={goal} className="p-3 rounded-xl m-3">{goal}</option>
                ))}
            </select>
            <input type="text" placeholder="Search by course name" className="p-3 rounded-xl m-3 border dark:border-gray-600" value={searchString} onChange={handleSearch}/>
            <select name="" id="" className="p-3 rounded-xl m-3 border dark:border-gray-600" onChange={handleFilter}>
                {Object.keys(coursesToDepartment).map((department, index) => (
                    <option key={index} value={department} className="p-3 rounded-xl m-3">{department}</option>
                ))}
            </select>
        </div>
    )
}

export default SearchandFilter;