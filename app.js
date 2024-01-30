'use strict';

const Seattle = {
  city_name: 'Seattle',
  min_customer: 23,
  max_customer: 65,
  avg_cookies: 6.3,
  document_id: document.getElementById('Seattle-List'),
  amount_of_customers: function(){
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function() {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function() {
    let total = 0;
    for (let hour = 0; hour < 14; hour++){
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Tokyo = {
  city_name: 'Tokyo',
  min_customer: 3,
  max_customer: 24,
  avg_cookies: 1.2,
  document_id: document.getElementById('Tokyo-List'),
  amount_of_customers: function () {
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function () {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function () {
    let total = 0;
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Dubai = {
  city_name: 'Dubai',
  min_customer: 11,
  max_customer: 38,
  avg_cookies: 3.7,
  document_id: document.getElementById('Dubai-List'),
  amount_of_customers: function(){
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function() {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function() {
    let total = 0;
    for (let hour = 0; hour < 14; hour++){
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Paris = {
  city_name: 'Paris',
  min_customer: 20,
  max_customer: 38,
  avg_cookies: 2.3,
  document_id: document.getElementById('Paris-List'),
  amount_of_customers: function () {
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function () {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function () {
    let total = 0;
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

const Lima = {
  city_name: 'Lima',
  min_customer: 2,
  max_customer: 16,
  avg_cookies: 4.6,
  document_id: document.getElementById('Lima-List'),
  amount_of_customers: function () {
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function () {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold_hourly: function () {
    let total = 0;
    for (let hour = 0; hour < 14; hour++) {
      let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
      this.document_id.innerHTML += '<li>' + hours[hour] + ': ' + this.cookies_purchased() + '</li>';
      total = total + this.cookies_purchased();
    }
    this.document_id.innerHTML += '<li>Total: ' + total + ' cookies</li>';
  }
};

Seattle.cookies_sold_hourly();
Tokyo.cookies_sold_hourly();
Dubai.cookies_sold_hourly();
Paris.cookies_sold_hourly();
Lima.cookies_sold_hourly();