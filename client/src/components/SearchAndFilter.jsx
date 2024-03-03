import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { courseState, searchedState } from "../store/atoms/subject.atom";
import { searchedString } from "../store/atoms/search.atom";

const SearchandFilter = () => {
    const [searchString, setSearchString] = useRecoilState(searchedString);
    const allSubjects = useRecoilValue(courseState);
    const [selectedsub, setFilteredSubjects] = useRecoilState(searchedState);
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
        "Cryogenic Engineering": "CR",
        "Electornics and Electrical Comunication": "EC",
        "Electrical Engineering": "EE",
        "Energy Science and Engineering": "EN",
        "Environmental Studies": "EV",
        "Exploration Geophysics": "EX",
        "Humanities and Social Sciences": "HS",
        "Industrial Engineering and Management": "IM",
        "Instrumentation Engineering": "IE",
        "Mathematics and Computing": "MA",
        "Mechanical Engineering": "ME",
        "Metallurgical and Materials Engineering": "MT",
        "Mining Engineering": "MI",
        "Ocean Engineering and Naval Architecture": "NA",
        "Physics": "PH",
        "Quality Engineering": "QE",
        "Reliability Engineering": "RE",
        "Rubber Technology": "RT",
        "Geology": "GG",
    };
    

    const careerGoals = {
        "Select Career Goal": Object.values(coursesToDepartment),
        "Software Development": ["CS", "MA", "EC"],
        "Data Science / Analytics": ["MA", "CS", "AI", "ML"],
        "Finance / Consulting": ["RE", "HS", "BM", "EP", "QE"],
        "Management": ["RE", "HS", "BM", "EP", "QE"],
        "Quantitative Trading": ["CS", "MA", "EC"],
        "Embedded system": ["CS","MA" ,"EC", "EE", "IE"],
        "Core": ["ME", "CE", "EE", "CH", "AE", "BT", "MT", "NA", "PH", "CY", "HS", "AG", "MI"],
    };


//  reccomment those courses which are greater than the cgpa
// validate cgpa should be between 0 and 10
    const handleCgpaInput = (e) => {
        const cgpaInput = e.target.value;
        if (cgpaInput === "" || (cgpaInput >= 0 && cgpaInput <= 10)) {
            setCgpa(cgpaInput);
            const filteredSubject = allSubjects.filter(subject => subject.avg > cgpaInput);
            setFilteredSubjects(filteredSubject);
        }
    };

    const handleCareerGoal = (e) => {
        const selectedGoal = e.target.value;
        const filteredSubject = allSubjects.filter(subject => careerGoals[selectedGoal].includes(subject.dept_code));
        setFilteredSubjects(filteredSubject);
    };

    const handleSearch = (e) => {
        const searchInput = e.target.value.toLowerCase();
        setSearchString(searchInput);
        if (searchInput === "") {
            setFilteredSubjects(allSubjects);
            return;
        }
        const filteredSubject = allSubjects.filter(subject => subject.course.toLowerCase().includes(searchInput));
        setFilteredSubjects(filteredSubject);
    };

    const handleFilter = (e) => {
        const selectedDepartment = e.target.value;
        if (selectedDepartment === "All Departments") {
            setFilteredSubjects(allSubjects);
            return;
        }
        const filteredSubject = allSubjects.filter(subject => subject.dept_code=== coursesToDepartment[selectedDepartment]);
        setFilteredSubjects(filteredSubject);
    }

    return (
        <div>
            
            <input type="number" placeholder="CGPA" className="p-3 rounded-xl m-2 border dark:border-gray-600 w-36" value={cgpa} onChange={handleCgpaInput} />
            <select name="careerGoal" id="careerGoal" className="p-3 rounded-xl m-3 border dark:border-gray-600" onChange={handleCareerGoal}>
                {Object.keys(careerGoals).map((goal, index) => (
                    <option key={index} value={goal} className="p-3 rounded-xl m-3">{goal}</option>
                ))}
            </select>
            <input type="text" placeholder="Search by name / code" className="p-3 rounded-xl m-3 border dark:border-gray-600" value={searchString} onChange={handleSearch} />
            <select name="department" id="department" className="p-3 rounded-xl m-3 border dark:border-gray-600" onChange={handleFilter}>
                {Object.keys(coursesToDepartment).map((department, index) => (
                    <option key={index} value={department} className="p-3 rounded-xl m-3">{department}</option>
                ))}
            </select>
        </div>
    );
};

export default SearchandFilter;
