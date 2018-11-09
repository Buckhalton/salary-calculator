$(document).ready(handleReady);

class Employee {
    constructor(first, last, id, title, salary) {
        this.first = first;
        this.last = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    } // end constructor
} //end Employee class

let employees = [];

function addEmployee() {
    // if(){
        // alert('Please fill out all fields.');
    // }
    // else {
        //new employee for class using inputs from DOM
        let tempEmployee = new Employee(
            $('#firstNameIn').val(),
            $('#lastNameIn').val(),
            $('#idIn').val(),
            $('#titleIn').val(),
            $('#salaryIn').val()
        );
        //pushing new employees into the array
        employees.push(tempEmployee);
            console.log('adding:', tempEmployee);
        // empty inputs
    $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#salaryIn').val()
    // }
}

function handleReady() {
    $('#submitButton').on('click', addEmployee);
} // end handleReady