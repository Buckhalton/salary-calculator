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
    if($('#firstNameIn').val() === '' || $('#lastNameIn').val() === '' || $('#idIn').val() === '' || $('#titleIn').val() === '' || $('#salaryIn').val() === ''){
        alert('Please fill out all fields.');
    } // end empty fields
    else {
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
        $('#firstNameIn').val(''),
        $('#lastNameIn').val(''),
        $('#idIn').val(''),
        $('#titleIn').val(''),
        $('#salaryIn').val('')
        calcCosts(employees);
        displayEmployee();
    } // end no empty fields
} // end addEmployee

function calcCosts() {
    console.log('In calcCosts');
    let totalAnnual = 0;
    for(employee of employees) {
        totalAnnual = parseInt(employee.salary) + totalAnnual;
        console.log(totalAnnual);
    } // end for of
    let totalMonthlyCost = totalAnnual / 12;
    console.log(totalMonthlyCost);
    let el = $('#monthlyCostOut');
    el.empty();
    if(totalMonthlyCost > 20000){
        el.append(`<h3 class="card bg-danger">Total Monthly: $${totalMonthlyCost.toFixed(2)}</h3>`);
    } // end greater than 20000
    else {
        el.append(`<h3 class="card bg-success">Total Monthly: $${totalMonthlyCost.toFixed(2)}</h3>`);
    } // end less than 20000
} // end calcCosts

function displayEmployee() {
    console.log('in displayEmployee');
    //target the table by ID
    let el = $('#employeeData');
    //empty the table
    el.empty();
    //loop through the employees and display each in the table
    for(employee of employees) {
        let displayString = `<tr id="${employee.id}"><td>${employee.first}</td><td>${employee.last}</td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.salary}</td><td><button id="${employee.id}" class="deleteEmployee btn btn-outline-danger">Delete</button></td></tr>`;
        el.append(displayString);
    } // end for of
} // end displayEmployee

function deleteEmployee() {
    for(employee of employees) {
        if($(this).attr('id') === employee.id) {
            let index = employees.indexOf(employee);
            employees.splice(index, 1);
            $(this).parent().parent().remove();
        } // end employee match
    } // end for of
    calcCosts();
} // end deleteEmployee

function handleReady() {
    $('#submitButton').on('click', addEmployee);
    $('#employeeData').on('click', '.deleteEmployee', deleteEmployee);
} // end handleReady 