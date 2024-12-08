// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Declares a global variable
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Modifies the global variable
}

const leastFavoriteCustomer = 'angry piece of shit';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'you'; // This will throw an error
}
