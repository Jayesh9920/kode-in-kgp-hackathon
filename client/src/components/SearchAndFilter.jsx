import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState, searchedState } from "../store/atoms/subject.atom";
import { searchedString } from "../store/atoms/search.atom";

const SearchandFilter = () => {
    const [searchString, setSearchString] = useRecoilState(searchedString);
    const allSubjects = useRecoilValue(courseState);
    const setFilteredSubjects = useSetRecoilState(searchedState);
    const [cgpa, setCgpa] = useState("");

    const coursesToDepartment = {
        "All Departments": "",
        "Agricultural and Food Engineering": "AG",
        "Architecture": "AR",
        "Aerospace Engineering": "AE",
        "Biotechnology": "BT",
        "Chemical Engineering": "CH",
        "Chemistry": "CY",
        "Civil Engineering": "CE",
        "Computer Science and Engineering": "CS",
        "Electrical Engineering": "EE",
        "Humanities and Social Sciences": "HS",
        "Mathematics and Computing": "MA",
        "Mechanical Engineering": "ME",
        "Metallurgical and Materials Engineering": "MMT",
        "Mining Engineering": "MI",
        "Ocean Engineering and Naval Architecture": "NA",
        "Physics": "PH"
    };
    

    const careerGoals = {
        "Select Career Goal": ['CS', 'EE', 'ME', 'CE', 'CH', 'AE', 'BT', 'MMT', 'NA', 'PH', 'CY', 'MA', 'HS', 'AR', 'AG', 'MI'],
        "Software Development": ["CS", "MA", "EE"],
        "Data Science / Analytics": ["CS", "MA", "EE", "PH", "CY"],
        "Finance / Consulting": ["CS", "MA", "EE", "PH", "CY"],
        "Management": ["CS", "MA", "EE", "PH", "CY"],
        "Quantitative Trading": ["CS", "MA", "EE", "PH", "CY"],
        "Embedded system": ["CS", "EE", "MA"],
        "Core": ["CS", "EE", "ME", "CE", "CH", "AE", "BT", "MMT", "NA", "PH", "CY", "MA", "HS", "AR", "AG", "MI"]
    };

    const handleCgpaInput = (e) => {
        const inputCgpa = e.target.value;
        if (inputCgpa > 10 || inputCgpa < 0 || isNaN(inputCgpa)) {
            alert("Please enter a valid CGPA between 0 and 10");
        } else {
            setCgpa(inputCgpa);
        }
    };

    const handleCareerGoal = (e) => {
        const selectedGoal = e.target.value;
        const filteredSubject = allSubjects.filter(subject => careerGoals[selectedGoal].includes(subject.code.substring(0, 2)));
        setFilteredSubjects(filteredSubject);
    };

    const handleSearch = (e) => {
        const searchInput = e.target.value.toLowerCase();
        setSearchString(searchInput);
        const filteredSubject = allSubjects.filter(subject => subject.name.toLowerCase().includes(searchInput));
        setFilteredSubjects(filteredSubject);
    };

    const handleFilter = (e) => {
        const selectedDepartment = e.target.value;
        const filteredSubject = allSubjects.filter(subject => subject.code.startsWith(coursesToDepartment[selectedDepartment]));
        setFilteredSubjects(filteredSubject);
    };

    return (
        <div>
            <input type="number" placeholder="CGPA" className="p-3 rounded-xl m-2 border dark:border-gray-600 w-36" value={cgpa} onChange={handleCgpaInput} />
            <select name="careerGoal" id="careerGoal" className="p-3 rounded-xl m-3 border dark:border-gray-600" onChange={handleCareerGoal}>
                {Object.keys(careerGoals).map((goal, index) => (
                    <option key={index} value={goal} className="p-3 rounded-xl m-3">{goal}</option>
                ))}
            </select>
            <input type="text" placeholder="Search by course name" className="p-3 rounded-xl m-3 border dark:border-gray-600" value={searchString} onChange={handleSearch} />
            <select name="department" id="department" className="p-3 rounded-xl m-3 border dark:border-gray-600" onChange={handleFilter}>
                {Object.keys(coursesToDepartment).map((department, index) => (
                    <option key={index} value={department} className="p-3 rounded-xl m-3">{department}</option>
                ))}
            </select>
        </div>
    );
};

export default SearchandFilter;
