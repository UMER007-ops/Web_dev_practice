const courses = ["PHP", "ReactJS", "Angular", "Javascript"];

const newCourses = courses.map((c) => {
    return `<li> ${c} </li>`;
});

console.log(courses);
console.log(newCourses);

const series = [1,2,3,4,5,7,8,9,10];

const num = 5;

const table = series.map((s) => s * num);
console.log(table);