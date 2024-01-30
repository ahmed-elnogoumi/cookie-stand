const Seattle = {
  city_name: "Seattle",
  min_customer: 23,
  max_customer: 65,
  avg_cookies: 6.3,
  amount_of_customers: function(){
    let customerAmount = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1) + this.min_customer);
    return customerAmount;
  },
  cookies_purchased: function() {
    let cookies_purchased = Math.ceil(this.amount_of_customers() * this.avg_cookies);
    return cookies_purchased;
  },
  cookies_sold: function() {
    for (let hour = 0; hour <= 14; hour++){
      console.log(hour, this.cookies_purchased());
    }
  }
};

Seattle.cookies_sold();
