'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function City(city_name, min_customer, max_customer, avg_cookies){
  this.city_name = city_name;
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


City.prototype.cookies_sold = function(element_id){
  let total = 0;
  this.document_id = document.getElementById(element_id);
  for (let hour = 0; hour < 14; hour++){
    this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
    total = total + this.cookies_purchased();
  }
  this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
};

let Seattle = new City('Seattle', 23, 65, 6.3);
Seattle.cookies_sold('Seattle-List');
