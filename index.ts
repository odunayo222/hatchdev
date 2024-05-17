// class Human {
//     hasHands: boolean;
//     hasLegs: boolean;
//     hasHead: boolean;
//     hasBrain: boolean;
//     canReason: boolean;
//     name: string;
// }

// class account {
//     balance: number;
//     name: string;
//     currency: string;
// }
// // class art{
// //     colors: string[] = ["orange", "blue", "green", "red", "yellow", "purple", "black", "white", "brown", "pink"];
// // }

// class art {
//     colors: Array<string>;
// }

// const monalisa = new art();
// monalisa.colors = ["orange", "blue", "green", "red", "yellow", "purple", "black", "white", "brown", "pink"];

// console.log(monalisa.colors);



class HatchDevClass {
    private pupils: string[] = [];

    constructor(student: string[]) {
        this.pupils = student;
    }

    getStudentNames() {
        return this.pupils;
    }

    private getTotalNumberOfStudents() {
        return this.pupils.length;
    }
}
const excelSheet = ["Odun", "Doe", "Jane", "Doe", "James"];
const HC = new HatchDevClass(excelSheet);	
console.log(HC);
console.log(HC['getTotalNumberOfStudents']);


const chl = ['arsenal', 'bayern','real-madrid','man-city'];
const disPeople: string[] = [];

// declarative
chl.filter((club: string) => {
    if (club === 'arsenal' || club == 'man-city') {
        disPeople.push(club);
    }
});

// imperative
// for (let i = 0; i < chl.length; i++) {
//     disPeople.push(chl[i]);
//     const club = chl[i];
//     if (club === 'arsenal' || club === 'man-city') {
//         disPeople.push(club);
//     }
// }
console.log(disPeople);


