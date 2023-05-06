// 1.ans code----

// let studentRecord=[{name:"john",id:123,mark:98},
//                    {name:"Baba",id:101,mark:23},
//                    {name:"yoga",id:200,mark:45},
//                    {name:"Wick",id:115,mark:75}
//                 ];
// let studentName=studentRecord.map(function(student){
//     return student.name.toUpperCase();
// });
// console.log(studentName);

//2. ans code--

// let studentRecord=[{name:"john",id:123,mark:98},
//                    {name:"Baba",id:101,mark:23},
//                    {name:"yoga",id:200,mark:45},
//                    {name:"Wick",id:115,mark:75}
//                 ];
//     let highMark=studentRecord.filter((student)=>{
//         return student.mark>50;
//     });
//     console.log(highMark);


// 3. Ans code----

// let studentRecord=[{name:"john",id:123,mark:98},
//                    {name:"Baba",id:101,mark:23},
//                    {name:"yoga",id:200,mark:45},
//                    {name:"Wick",id:115,mark:75}
//                 ];
//     let result=studentRecord.filter(student=>student.mark>50 && student.id>120);
//     console.log(result);


// 4.Ans code----

// let studentRecord=[{name:"john",id:123,mark:98},
//                    {name:"Baba",id:101,mark:23},
//                    {name:"yoga",id:200,mark:45},
//                    {name:"Wick",id:115,mark:75}
//                 ];
//     let TotalMark=studentRecord.reduce((pre,cur)=>pre+cur.mark,0);
//     console.log(TotalMark);             


//5.Ans code---

// let studentRecord=[{name:"john",id:123,mark:98},
//                    {name:"Baba",id:101,mark:23},
//                    {name:"yoga",id:200,mark:45},
//                    {name:"Wick",id:115,mark:75}
//                 ];

//         let process1=studentRecord.filter(student=>student.mark>50);

//         let studentNameOnly=process1.map(student=>student.name);
//             console.log(studentNameOnly);
//             //By using spread output....
//             console.log(...studentNameOnly);

//6.Ans code----

// let studentRecord=[{name:"john",id:123,mark:98},
//                    {name:"Baba",id:101,mark:23},
//                    {name:"yoga",id:200,mark:45},
//                    {name:"Wick",id:115,mark:75}
//                 ];

//         let process=studentRecord.filter(student=>student.id>120);
        
//         let Sum=process.reduce((pre,cur)=>pre+cur.mark,0);
//             console.log(Sum);

// 7.Ans---

// let studentRecords = [
//     {name: 'John', id: 123, marks : 98 },
//     {name: 'Baba', id: 101, marks : 23 },
//     {name: 'yaga', id: 200, marks : 45 },
//     {name: 'Wick', id: 115, marks : 75 }
//   ];
  
//   let updated= studentRecords.map(student => {
//     if (student.marks < 50) {
//       return { ...student, marks: student.marks + 15 };
//     } else {
//       return student;
//     }
//   });
  
//   let filteredRecords = updated.filter(record => record.marks > 50);
//   let totalMarks = filteredRecords.reduce((pre,cur) => pre+cur.marks, 0);
//   console.log(totalMarks);
                
// 8. Ans---

let student1={name:"Niyaz",class:"first",rollNo:101};
let student2={name:"Sonu",class:"second",rollNo:102};
let student3={name:"John",class:"third",rollNo:103};
let student4={name:"Saif",class:"fourth",rollNo:104};
let student5={name:"Munna",class:"fifth",rollNo:105};
let student6={name:"Azad",class:"sixth",rollNo:106};

let AllStudents=[student1,student2,student3,student4,student5,student6];

console.log(AllStudents);







