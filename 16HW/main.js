function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.attendance = Array(25).fill(null); 
}

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthDate;
};

Student.prototype.getAverage = function () {
    return this.assessments.length ? this.assessments.reduce((sum, grade) => sum + grade, 0) / this.assessments.length : 0;
};

Student.prototype.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) this.attendance[index] = true;
    return this;
};

Student.prototype.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) this.attendance[index] = false;
    return this;
};

Student.prototype.summary = function () {
    const averageGrade = this.getAverage();
    const totalClasses = this.attendance.filter(Boolean).length + this.attendance.filter((x) => x === false).length;
    const averageAttendance = totalClasses ? this.attendance.filter((x) => x === true).length / totalClasses : 0;

    if (averageGrade > 90 && averageAttendance > 0.9) return "Молодець!";
    if (averageGrade > 90 || averageAttendance > 0.9) return "Добре, але можна краще";
    return "Банан!";
};

const student1 = new Student('Олег', 'Мишко', 1999, [100, 99, 80, 1]);
const student2 = new Student('Тимур', 'Орел', 1998, [0, 2]);

student1.present().absent().present();
console.log(student1.summary());
