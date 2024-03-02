import { atom } from "recoil";
const defaultValue = [
    {
        A: 13,
        B: 13,
        C: 13,
        D: 13,
        EX: 13,
        F: 13,
        P: 13,
        ID: 1,
        avg: 7.4,
        median: 7.4,
        mode: 7.4,
        dept_code: "AE",
        course: "AE12345-Basic Aerospace Engineering",
        sub_code: "AE12345",
        total_students: 13,
    }
]

export const courseState = atom({
    key: "courseState" , 
    default: defaultValue, 
  });


export const searchedState = atom({
    key: "searchedState" , 
    default: defaultValue, 
  });
