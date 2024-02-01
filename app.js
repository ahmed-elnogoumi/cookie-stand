'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function hour_list(){
  let table_body = document.getElementById('table-body');
  let table_row = document.createElement('tr');

  let empty_cell = document.createElement('th');
  table_row.appendChild(empty_cell);

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
  let table = document.getElementById('table-body');
  let number_of_columns = table.rows[0].cells.length;
  let totals = new Array(number_of_columns).fill(0);

  for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
    let row = table.rows[rowIndex];
    for (let colIndex = 0; colIndex < number_of_columns; colIndex++) {
      let cellValue = parseInt(row.cells[colIndex].textContent) || 0;
      totals[colIndex] += cellValue;
    }
  }

  let footerRow = document.createElement('tr');
  footerRow.appendChild(document.createElement('td'));

  for (let i = 1; i < totals.length; i++) {
    let cell = document.createElement('td');
    cell.textContent = totals[i];
    footerRow.appendChild(cell);
  }
  table.appendChild(footerRow);
}


let Seattle = new City('Seattle', 23, 65, 6.3);
let Tokyo = new City('Tokyo', 3, 24, 1.2);
let Dubai = new City('Dubai', 11, 38, 3.7);
let Paris = new City('Paris', 20, 38, 2.3);
let Lima = new City('Lima', 2, 16, 4.6);

hour_list();
Seattle.draw_row();
Tokyo.draw_row();
Dubai.draw_row();
Paris.draw_row();
Lima.draw_row();
footer_row();
