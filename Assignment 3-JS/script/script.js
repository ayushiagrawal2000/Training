//to render years
function Years() {
  let d = new Date();
  let currentyear = d.getFullYear();
  
  for(let i = 2050;i >= 1950; i--) {
    var yearsDiv = document.createElement("div");
    yearsDiv.classList.add('year-name');
    var text = document.createTextNode(i);
    yearsDiv.appendChild(text);
    var yearsContainer = document.getElementById("years");
    yearsContainer.appendChild(yearsDiv);
    if (i == currentyear) {
      yearsDiv.classList.add('current-year');
      let yearElement = document.querySelector('.current-year');
      yearElement.scrollIntoView();
      yearElement.classList.add('firstElement-to-scroll');
      yearElement.style.color = " #00e6b8 ";
    }
  }
}
//to hide the sroll-panel
function closeNav() {
  document.getElementById("myScrollpanel").style.height = "0";
}

$(document).ready(function() {
  Date.prototype.getWeek = function (dowOffset) {
    dowOffset = typeof(dowOffset) == 'number' ? dowOffset : 0; //dowoffset is the day from 0 - 6
    var newYear = new Date(this.getFullYear(),0,1);
    var day = newYear.getDay() - dowOffset; 
    day = (day >= 0 ? day : day + 7);
    var daynum = Math.floor((this.getTime() - newYear.getTime() - 
    (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
    var weeknum;
    if (day < 4) {
      weeknum = Math.floor((daynum+day-1)/7) + 1;
      if (weeknum > 52) {
        nYear = new Date(this.getFullYear() + 1,0,1);
        nday = nYear.getDay() - dowOffset;
        nday = nday >= 0 ? nday : nday + 7;
        weeknum = nday < 4 ? 1 : 53;
      }
    }
    else {
      weeknum = Math.floor((daynum+day-1)/7);
    }
    return weeknum;
  };
  var title = document.getElementById('modal-title');
  var body = document.querySelector('.modal-body p');
  var event_date = document.getElementById('event-date');
  function triggerModal(obj) {
    title.innerHTML = obj.title;
    body.innerHTML = obj.discription;
    event_date.innerHTML = obj.date;
    $('#myModal').modal('show');
  }
  //to open scroll-panel
  document.getElementsByClassName('current-year-name')[0].addEventListener('click', () => {
    document.getElementById("myScrollpanel").style.height = "120px";
  });
  
  let arrowUp = document.getElementById('icon1');
  
  arrowUp.addEventListener('click',function() {
    var scrollElement = document.querySelector('.firstElement-to-scroll');
    var value = parseInt(scrollElement.innerHTML);
    value = value + 10;
    var year_names = document.getElementsByClassName('year-name');
      for(let i = 0; i < year_names.length; i++) {
        var check = year_names[i].innerHTML;
        if (check == value) {
          scrollElement.classList.remove('firstElement-to-scroll');
          year_names[i].classList.add('firstElement-to-scroll');
          let nextScroll = document.querySelector('.firstElement-to-scroll');
          nextScroll.scrollIntoView();
        }
        if (value > 2050) {
          var scroll = year_names[0];
          scroll.scrollIntoView();
        }
      }
  });
  
  let arrowDown = document.getElementById('icon2');
    arrowDown.addEventListener('click',function() {
    var scrollElement = document.querySelector('.firstElement-to-scroll');
    var value = parseInt(scrollElement.innerHTML);
    value = value - 10;
    var year_names = document.getElementsByClassName('year-name');
      for(let i = 0; i < year_names.length; i++) {
        var check = year_names[i].innerHTML;
        if (check == value) {
          scrollElement.classList.remove('firstElement-to-scroll');
          year_names[i].classList.add('firstElement-to-scroll');
          let nextScroll = document.querySelector('.firstElement-to-scroll');
          nextScroll.scrollIntoView();
        } 
        if (value < 1950) {
          var scroll = year_names[99];
          scroll.scrollIntoView();
        }
      }
  });
  
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDate = date.getDate();
  var monthDays = document.getElementsByClassName('days')[0];
  var weekDays = document.getElementById('week-number');
  var monthArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
  var events = {
    "january-1": {
      title: "Happy New year",
      date: "1 January",
      discription: `A New Year is like a blank book, 
      and the pen is in your hands. It is your chance 
      to write a beautiful story for yourself. Happy New Year.`
    },
    "january-26": {
      title: "Republic day",
      date: "6 January ",
      discription: `Our nation is the greatest country in 
      the world, but let that never stop us from striving to 
      make it even better. I wish you a very Happy Republic Day!`
    },
    "february-14": {
      title: "Baby's Birthday",
      date: "14 Fabruary",
      discription: `I feel so lucky to have you as my friend.
      Hope your birthday is as special as you are.May all of 
      your dreams come true. Thanks for being such a great 
      friend. Happy birthday!`
    },
    "october-2": {
      title: "Gandhi Jayanti",
      date: "2 October",
      discription: `A man is the sum of his actions,
      of what he has done, of what he can do, nothing 
      else. Happy Gandhi Jayanti`
    },
    "august-15": {
      title: "Indipendence Day",
      date: "15 August",
      discription: `Freedom is the way God intended us; it 
      is something we are born with. Something that no one can
      take away from you. Let’s celebrate Freedom! Happy Independence Day.`
  
    },
    "june-5": {
      title:"World's Environment Day",
      date: "5 June",
      discription:`For most of history, man has had to fight 
      nature to survive; in this century he is beginning to 
      realise that, in order to survive, he must protect it.`
    }
  }
   
  const renderCalendar = (month,year) => {
   
    document.getElementsByClassName('month-name')[0].innerHTML = monthArray[month];
    document.getElementsByClassName('current-year-name')[0].innerHTML = year;

    const firstDay = new Date(year, month,1).getDay();//to get the first day of current month
    const lastDay = new Date(year,month + 1, 0).getDate();//to get the last day of current month
  
    const lastDaysIndex = new Date(year,month+1,0).getDay();//to get the  starting days of next month
    const nextDays = 7 - lastDaysIndex - 1;//calculate the starting days of next month
    
    const prevLastDays = new Date(year,month,0).getDate();//get the last days of previous month
    //to get the week number on every end date of a week in a month
    var weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate();

    let dayOfWeekCounter = firstDate.getDay();

    for (let date = 1; date <= numDays; date++) {
      if (dayOfWeekCounter === 0 || weeks.length === 0) {
        weeks.push([]);
      }
      weeks[weeks.length - 1].push(date);
      dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }
    var result = weeks
    .filter((w) => !!w.length)
    .map((w) => ({
      start: w[0],
      end: w[w.length - 1],
      dates: w,
    }));
    let week = "";
    for(let j in result) {
      var endDateofWeeks = result[j].end;
      var checkWeekNum = new Date(year,month,endDateofWeeks);
      var arr = [checkWeekNum.getWeek()];
      week += `<div class="week">${arr}</div>`;
    } 
    weekDays.innerHTML = week;
  
    monthDays.innerHTML = "";
    //set the last days of previous month
    for(let x = firstDay; x > 0; x--) {
      var daysDiv = document.createElement('div');
      daysDiv.classList.add('number-of-days');
      var text = document.createTextNode(prevLastDays-x+1);
      daysDiv.appendChild(text);
      daysDiv.classList.add('prev-days');
      monthDays.appendChild(daysDiv);
    }
    //set the current month days
    for(let i = 1; i <= lastDay; i++) {
      var daysDiv = document.createElement('div');
      var newDate = new Date(year,month,i);
      var result;
      var isEventPresent = false;
      for(let j in events) {
        result = j.split("-");
        var fristString = result[0];
        var secondString = result[1];
        if (monthArray[month] == fristString && i == parseInt(secondString)) {
          isEventPresent = true;
          break;
        }
      }
      if (newDate.getDay()==0) {   //if Sunday
        var daysDiv = document.createElement('div');
        daysDiv.classList.add('number-of-days');
        var text = document.createTextNode(i);
        daysDiv.appendChild(text);
        daysDiv.classList.add('sunday');
        monthDays.appendChild(daysDiv);
      } else if (newDate.getDate() == currentDate && newDate.getMonth() == currentMonth) {
        var daysDiv = document.createElement('div');
        daysDiv.classList.add('number-of-days');
        var text = document.createTextNode(i);
        daysDiv.appendChild(text);
        daysDiv.classList.add('today');
        monthDays.appendChild(daysDiv);
      } else {
        var daysDiv = document.createElement('div');
        var text = document.createTextNode(i);
        daysDiv.classList.add('number-of-days');
        daysDiv.appendChild(text);
        monthDays.appendChild(daysDiv);
      }
      if(isEventPresent) {
        daysDiv.classList.add('event');
        daysDiv.setAttribute('data',fristString+"-"+secondString);
      }
    } 
    //set the starting days of next month
    for(let y = 1; y <=  nextDays; y++) { 
      var daysDiv = document.createElement('div');
      daysDiv.classList.add('number-of-days');
      var text = document.createTextNode(y);
      daysDiv.appendChild(text);
      daysDiv.classList.add('next-days');  
      monthDays.appendChild(daysDiv);
    }   
  }
  monthDays.addEventListener('click', (eve) => {
    var target = eve.target;
    var data = target.getAttribute('data');
    for(let k in events) {
      if (k == data) {
        triggerModal(events[k]);
      }
    }
  });
  //click on years
  document.getElementById('years').addEventListener("click", (eve) => {
    var target = eve.target;
    var selectedYear = target.innerHTML;
    renderCalendar(currentMonth,selectedYear);
    closeNav();
  });
  
  document.querySelector(".prev").addEventListener("click", () => {
    var monthcheck = document.querySelector('.month-name').innerHTML;
    var yearcheck = document.querySelector('.current-year-name').innerHTML;
    
    var monthIndex = monthArray.indexOf(monthcheck.toLowerCase());
    if( monthIndex == 0) {
      renderCalendar(11 ,parseInt(yearcheck)-1);
    } else {
      renderCalendar(monthIndex-1,parseInt(yearcheck));
    }
  });

  document.querySelector(".next").addEventListener("click", () => {
    var monthcheck = document.querySelector('.month-name').innerHTML;
    var yearcheck = document.querySelector('.current-year-name').innerHTML;
    
    var monthIndex = monthArray.indexOf(monthcheck.toLowerCase());
    if (monthIndex == 11) {
      renderCalendar(0,parseInt(yearcheck)+1);
    } else {
      renderCalendar(monthIndex+1,parseInt(yearcheck));
    }
  });
  
  renderCalendar(currentMonth,currentYear);
  
});
