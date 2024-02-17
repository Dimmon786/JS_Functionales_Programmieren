const primarchs = [
    { id: 1, name: "Rogal", age: 300 },
    { id: 2, name: "Sanguinius", age: 450 },
];


const chapterMasters = [
    { id: 1, name: "Kantor", age: 300, legion: "Crimson Fists" },
    { id: 2, name: "Helbrecht", age: 450, legion: "Black Templars" },
];

const updateChapterMasters = chapterMasters.map(changeAge);
function changeAge(chapterMaster) {
    if (chapterMaster.id === 1) {
        return { ...chapterMaster, age: 350 };
    }
    return chapterMaster;
}

const reduceChapterMasters = chapterMasters.filter((chapterMaster) => {
    return chapterMaster.id !== 2;
});

const grades = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const total = grades.reduce((a, g) => a + g);
const avarege = total / grades.length;

const groupByGrade = (groups, grade) => {
    const { good = 0, ok = 0, bad = 0} = groups;
    if (grade >= 4) {
        return { ...groups, good: good + 1 };
    } else if (grade >= 2.5) {
        return { ...groups, ok: ok + 1};
    } else if (grade < 2.5) {
        return {...groups, bad: bad + 1};
    }
};
    const gradeGroups = grades.reduce(groupByGrade, {});
    console.log(gradeGroups);

