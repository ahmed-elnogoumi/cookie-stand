'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function hour_list(){
  let table_body = document.getElementById('table-body');
  let table_row = document.createElement('tr');

  let location_names = document.createElement('th');
  location_names.textContent = 'Locations';
  table_row.appendChild(location_names);

  for(let hour = 0; hour < hours.length; hour++){
    let table_data = document.createElement('th');
    table_data.textContent = hours[hour];
    table_row.appendChild(table_data);
  }

  let total_cell = document.createElement('th');
  total_cell.textContent = 'Daily Location Total';
  table_row.appendChild(total_cell);

  table_body.appendChild(table_row);
}


function City(city_name, address, hours_open, contact_information, min_customer, max_customer, avg_cookies){
  this.city_name = city_name;
  this.address = address;
  this.hours_open = hours_open;
  this.contact_information = contact_information;

  this.min_customer = min_customer;
  this.max_customer = max_customer;
  this.avg_cookies = avg_cookies;
}

City.prototype.amount_of_customers = function(){
  let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
  return customerAmount;
};

City.prototype.cookies_purchased = function(){
  let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
  return cookies_purchased;
};

City.prototype.toHTML = function() {
  let htmlContent = `
      <h2>${this.city_name}</h2>
      <ul>
        <li>Address: ${this.address}</li>
        <li>Hours: ${this.hours_open}</li>
        <li>Contact: ${this.contact_information}</li>
      </ul>
  `;
  return htmlContent;
};

document.addEventListener('DOMContentLoaded', function() {
  let cities = [Seattle, Tokyo, Dubai, Paris, Lima];
  let mainContent = document.querySelector('main');

  cities.forEach(city => {
    mainContent.innerHTML += city.toHTML();
  });
});

City.prototype.draw_row = function() {
  let total_cookies = 0;
  let table_body = document.getElementById('table-body');
  let table_row = document.createElement('tr');

  let city_name_cell = document.createElement('td');
  city_name_cell.textContent = this.city_name;
  table_row.appendChild(city_name_cell);

  for (let hour = 0; hour < hours.length; hour++) {
    let table_data = document.createElement('td');
    table_data.textContent = this.cookies_purchased();
    table_row.appendChild(table_data);
    total_cookies = this.cookies_purchased() + total_cookies;
  }

  let total_cell = document.createElement('td');
  total_cell.textContent = total_cookies;
  table_row.appendChild(total_cell);

  table_body.appendChild(table_row);
};

function footer_row() {
  let table = document.getElementById('sales-table'); // Assuming the table has an ID of 'sales-table'
  let tableFooter = document.getElementById('table-footer');
  tableFooter.innerHTML = ''; // Clear existing footer content
  let footerRow = document.createElement('tr');

  // Initialize totals array with zeros for each column
  let number_of_columns = table.rows[0].cells.length; // Number of columns in the first row
  let totals = new Array(number_of_columns).fill(0);

  // Calculate totals for each column
  for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
    let row = table.rows[rowIndex];
    for (let colIndex = 0; colIndex < number_of_columns; colIndex++) {
      let cellValue = parseInt(row.cells[colIndex].textContent) || 0;
      totals[colIndex] += cellValue;
    }
  }

  // Create cells for the footer row
  for (let i = 0; i < totals.length; i++) {
    let cell = document.createElement('td');
    cell.textContent = totals[i];
    footerRow.appendChild(cell);
  }

  tableFooter.appendChild(footerRow);
}


let Seattle = new City('Seattle', '123 Rainy Street, Seattle, WA 98101, USA', '8:00 AM - 8:00 PM, Monday to Sunday', '+1 (206) 123-4567', 23, 65, 6.3);
let Tokyo = new City('Tokyo', '456 Sakura Lane, Shibuya, Tokyo 150-0002, Japan', '9:00 AM - 9:00 PM, Monday to Sunday', '+81 3-1234-5678', 3, 24, 1.2);
let Dubai = new City('Dubai', '789 Desert Avenue, Downtown Dubai, UAE', '10:00 AM - 10:00 PM, Monday to Sunday', '+971 4 123 4567', 11, 38, 3.7);
let Paris = new City('Paris', '101 Eiffel Road, 75007 Paris, France', '8:00 AM - 8:00 PM, Monday to Sunday', '+33 1 23 45 67 89', 20, 38, 2.3);
let Lima = new City('Lima', '202 Inca Trail, Miraflores, Lima 15074, Peru', '7:00 AM - 7:00 PM, Monday to Sunday', '+51 1 234 5678', 2, 16, 4.6);


hour_list();
Seattle.draw_row();
Tokyo.draw_row();
Dubai.draw_row();
Paris.draw_row();
Lima.draw_row();
footer_row();

// Function to handle new city form submission
function handleNewCitySubmission() {
  // Get the form element
  const form = document.getElementById('new-city-form');
 
  // Create a new city container if it doesn't exist
  let container = document.getElementById('new-city-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'new-city-container';
    form.parentNode.insertBefore(container, form.nextSibling);
  }
 
  // Attach the submit event listener to the form
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
 
    // Extract values from form fields
    const city_name = document.getElementById('location-name').value;
    const address = ""; // Assuming address is not provided by the form
    const hours_open = ""; // Assuming hours are not provided by the form
    const contact_information = ""; // Assuming contact info is not provided by the form
    const min_customer = parseInt(document.getElementById('min-customers').value, 10);
    const max_customer = parseInt(document.getElementById('max-customers').value, 10);
    const avg_cookies = parseFloat(document.getElementById('avg-cookies').value);
 
    // Instantiate a new city with form data
    const newCity = new City(city_name, address, hours_open, contact_information, min_customer, max_customer, avg_cookies);
 
    // Append the new city's data to the container
    container.innerHTML += newCity.toHTML();
 
    // Move the footer below the new container
    const footer = document.getElementById('table-footer');
    footer.parentNode.insertBefore(footer, container.nextSibling);
 
    // Clear the form fields for new entries
    event.target.reset();
  });
}

// Call the function to set up the new city form submission handler
handleNewCitySubmission();