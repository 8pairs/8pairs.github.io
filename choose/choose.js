function closeFirst() {
  roller = document.getElementById("roll");
  cover = document.getElementById("cover");
  other = document.getElementById("cover2");

  roll.innerHTML = "Out of spins!";
  cover.style.display = "block";
  other.style.display = "none";
}

function closeSecond() {
  roller2 = document.getElementById("roll2");
  cover2 = document.getElementById("cover2");
  other2 = document.getElementById("cover3");

  roller2.innerHTML = "Out of spins!";
  cover2.style.display = "block";
  other2.style.display = "none";
}

function closeThird() {
  roller3 = document.getElementById("roll3");
  cover3 = document.getElementById("cover3");

  roller3.innerHTML = "Out of spins!";
  cover3.style.display = "block";
}

function rollEr() {
  var textArray = [
    "Islands",
    "Red Robin",
    "North Park",
    "NPBC Bankers" + "<br>" + "Hill",
    "In-N-Out",
    "Dukes Onion" + "<br>" + "Burgers",
    "At Home",
    "Chili's",
    "BJ's",
    "Panda",
    "Panda Chef",
    "Otay Mandarin",
    "The Friendly",
    "Vougue",
    "Five Guys",
    "Slaters 50/50",
    "Sonic",
    "Texas Road" + "<br>" + "House",
    "Cheesecake" + "<br>" + "Factory",
    "Broady's" + "<br>" + "Burgers",
    "Annie's" + "<br>" + "Burgers",
    "Burger Deck",
    "Sushi Deli 3",
    "Eureka!",
    "Taco Bell",
  ];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("result1").innerHTML = textArray[randomNumber];
  setInterval(show, 200);
}

var opacity = 0;
var intervalID = 0;

function show() {
  var body = document.getElementById("result1");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function show2() {
  var body = document.getElementById("result2");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function show3() {
  var body = document.getElementById("result3");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function draw() {
  let op1 = document.getElementById("op1");
  let op2 = document.getElementById("op2");
  let op3 = document.getElementById("op3");
  let op4 = document.getElementById("op4");
  let op5 = document.getElementById("op5");
  let str1 = op1.value;
  let str2 = op2.value;
  let str3 = op3.value;
  let str4 = op4.value;
  let str5 = op5.value;
  var textArray = [str1, str2, str3, str4, str5];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("result1").innerHTML = textArray[randomNumber];
  setInterval(show, 200);
}

function closeFifth() {
  but1 = document.getElementById("but1");
  coverop = document.getElementById("cover4");

  but1.innerHTML = "Out of draws!";
  coverop.style.display = "block";
}

function validateForm() {
  var uname1 = document.getElementById("op1").value;
  var uname2 = document.getElementById("op2").value;
  var uname3 = document.getElementById("op3").value;
  var uname4 = document.getElementById("op4").value;
  var uname5 = document.getElementById("op5").value;
  if (uname1 == ""
  ) {
    setTimeout(() => {
      coverop = document.getElementById("cover4");
      result0 = document.getElementById("result1");
      dr = document.getElementById("but1");

      coverop.style.display = "none";
      result0.innerHTML = "Feild(s) Are Empty!";
      dr.innerHTML = "Draw From List";
    }, 20);
    return false;
  }
  if (uname2 == "") {
    setTimeout(() => {
      coverop = document.getElementById("cover4");
      result0 = document.getElementById("result1");
      dr = document.getElementById("but1");

      coverop.style.display = "none";
      result0.innerHTML = "Feild(s) Are Empty!";
      dr.innerHTML = "Draw From List";
    }, 20);
    return false;
  }
  if (uname3 == "") {
    setTimeout(() => {
      coverop = document.getElementById("cover4");
      result0 = document.getElementById("result1");
      dr = document.getElementById("but1");

      coverop.style.display = "none";
      result0.innerHTML = "Feild(s) Are Empty!";
      dr.innerHTML = "Draw From List";
    }, 20);
    return false;
  }
  if (uname4 == "") {
    setTimeout(() => {
      coverop = document.getElementById("cover4");
      result0 = document.getElementById("result1");
      dr = document.getElementById("but1");

      coverop.style.display = "none";
      result0.innerHTML = "Feild(s) Are Empty!";
      dr.innerHTML = "Draw From List";
    }, 20);
    return false;
  }
  if (uname5 == "") {
    setTimeout(() => {
      coverop = document.getElementById("cover4");
      result0 = document.getElementById("result1");
      dr = document.getElementById("but1");

      coverop.style.display = "none";
      result0.innerHTML = "Feild(s) Are Empty!";
      dr.innerHTML = "Draw From List";
    }, 20);
    return false;
  }
}
