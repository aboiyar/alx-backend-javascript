"use strict";
exports.__esModule = true;
function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
function createStudent(ctor, firstName, lastName) {
    return new ctor(firstName, lastName);
}
exports.createStudent = createStudent;
