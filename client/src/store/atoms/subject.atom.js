import { atom } from "recoil";
const defaultValue = [
    {
        code: 'ME1234',
        name: 'Basic Engineering Mechanics',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'PH1234',
        name: 'Physics of Waves',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CH1234',
        name: 'Chemistry',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'MA1234',
        name: 'Advanced Calculus',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CS1234',
        name: 'Data Structures',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CS1235',
        name: 'Data Base management',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CS1236',
        name: 'Operating Systems',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CS1237',
        name: 'Computer Networks',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CS1238',
        name: 'Artificial Intelligence',
        credit: 4,
        avgCgpa: 8.9,
    },
    {
        code: 'CS1239',
        name: 'Machine Learning',
        credit: 4,
        avgCgpa: 8.99,
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
