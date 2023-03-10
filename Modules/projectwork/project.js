

class restaurant {
      static restaurentidcounter = 0;

      restaurantinfo = {
            rId: 0,
            rName: 'default name',
            rcityname: 'default city',
            rmaxguestcapacity: 0,
            remployees: 0,
            rcurrentguestcount: 0,
            rstatus: 'close',
      }




      constructor(rname, rcityname, rmaxguestcapacity, remployees) {
            if (rmaxguestcapacity <= 0 || remployees <= 0) {
                  console.log('maxguestcapacity and employee cannot be less or equal to 0');
                  throw 'invalid data'
            }
            else {
                  this.restaurantinfo.rName = rname;

                  this.restaurantinfo.rcityname = rcityname;

                  this.restaurantinfo.rmaxguestcapacity = rmaxguestcapacity;
                  this.restaurantinfo.remployees = remployees;

                  restaurant.restaurentidcounter++;
                  this.restaurantinfo.rId = restaurant.restaurentidcounter++;

                  console.log('\n congratulation for seccessfully registration');
                  console.log('\n restaurant id: ${this.restaurantinfo.rid}');
            }

      }


      clean() {
            console.log('restaurant is cleaned now');
      }


      addguest(numofguest) {
            if (numofguest <= 0) {
                  console.log('please provide valid number of guest');
            }
            else if (numofguest > this.restaurantinfo.rmaxguestcapacity) {
                  console.log('there is no space in restaurant');

            }
            else {
                  (this.restaurantinfo.rcurrentguestcount += numofguest)
                  console.log('guests are increasing');
            }
      }





      removeguest(numofguest) {
            if (this.restaurantinfo.rcurrentguestcount -= numofpeople) {
                  console.log('guests are decreasing');
            }

            console.log('current guestcount is:${this.restaurantinfo.rcurrentguestcount');
      }

      addemployees(numofemployees) {
            if (this.restaurantinfo.remployees += numofemployees) {
                  console.log('employees are increasing');
            }
      }

      removeemployees(numofemployees) {
            if (this.restaurantinfo.remployees -= numofemployees) {
                  console.log('employees are decreasing');
            }

      }


      showtotalnumberofemployee() {
            console.log(`total number of employees:${this.restaurantinfo.remployees}`);
      }


      open() {
            if (this.restaurantinfo.rstatus.toLowerCase === 'close') {
                  this.restaurantinfo.rstatus.toLowerCase = 'open';
                  console.log('restaurant is open');
            }
            else {
                  console.log('restaurant is already open');
            }

      }

      close() {
            if (this.restaurantinfo.rstatus.toLowerCase === 'open') {
                  this.restaurantinfo.rstatus.toLowerCase = 'close'
                  console.log('restaurant is close');
            }
            else {
                  console.log('restaurant is already close');
            }



      }
      showmydetails() {
            console.log(`\n restaurant id: ${this.restaurantinfo.rid}`);
            console.log(`\n restaurant name:${this.restaurantinfo.rname}`);
            console.log(`\n restaurant cityname:${this.restaurantinf.rcityname}`);
            console.log(`\n restaurant employee:${this.restaurantinfo.remployees}`);
            console.log(`\n restaurant maxguestcapasity:${this.restaurantinfo.rmaxguestcapacity} `);
            console.log(`\n currentguestcount:${this.restaurantinfo.rcurrentguestcount}`);
            console.log(`\n restaurant status is:${this.restaurantinfo.rstatus} `);

      }
}

module.export = restaurant;

class house {

      static houseidcounter = 0;
      houseinfo = {
            hname: '',
            hcityname: '',
            htotalmember: 0,
            hstatus: 'close',
            hid: 0,
      }
      constructor(hname, hcityname, htotalmember) {
            house.houseidcounter++;
            this.houseinfo.hid = house.houseidcounter++;
            throw 'invalid data';
      }

      unlock() {
            if (this.houseinfo.hstatus === Lock) {
                  this.houseinfo.hstatus = unlock;
                  console.log('house is unlock');
            }
            else {
                  console.log('house is already unlock');
            }
      }



      lock() {
            if (this.houseinfo.hstatus === unLock) {
                  this.houseinfo.hstatus = lock;
                  console.log('house is lock');
            }
            else {
                  console.log('house is already lock');
            }
      }

      constructor(hname, hcityname, htotalmember) {
            house.houseidcounter++;
            this.houseinfo.hid = house.houseidcounter++;
      }

      unlock() {
            if (this.houseinfo.hstatus === Lock) {
                  this.houseinfo.hstatus = unlock;
                  console.log('house is unlock');
            }
            if (this.houseinfo.hstatus === unLock) {
                  this.houseinfo.hstatus = lock;
                  console.log('house is lock');
            }
            else {
                  console.log('house is already lock');
            }
      }


      clean() {
            console.log('house is cleaned now');
      }


      addmembers(numofmembers) {
            (this.houseinfo.htotalmember += numofmembers)
            console.log('we are adding members');
      }



      removemembers(numofmembers) {
            (this.houseinfo.htotalmember -= numofmembers)
            console.log('numberof members were removed ');

      }




      showtotalnumberofmember() {
            console.log(this.houseinfo.htotalnumberofmember);
      }

      showhousedetails() {
            console.log(`\n house id is :${this.houseinfo.hid}`);
            console.log(`\n house city name is :${this.houseinfo.hcityname}`);
            console.log(`\n house status is:${this.houseinfo.hstatus}`);
            console.log(`\n house total members are :${this.houseinfo.htotalmember}`);

      }




}


module.export = house;