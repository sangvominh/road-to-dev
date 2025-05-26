typeImg = "snakes/"
// typeImg = "cats/"

function genCalendar(date) {
  let body = document.getElementById("body");
  body.innerHTML = ""; // xóa lịch cũ

  let now = date;
  let y = now.getFullYear();
  let m = now.getMonth();

  let day1_month = new Date(y, m, 1);
  let startDay = (day1_month.getDay() + 6) % 7; // Monday = 0

  let row = document.createElement("tr");
  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  let lastDay = new Date(y, m + 1, 0);
  let lastDate = lastDay.getDate();

  for (let day = 1; day <= lastDate; day++) {
    let cell = document.createElement("td");
    if (day <= 9) {
      let img = document.createElement("img");
      img.src = "imgs-calendar/" + typeImg + day + ".jpg";
      cell.appendChild(img);
    } else {
      let n1 = parseInt(day.toString()[0]);
      let n2 = parseInt(day.toString()[1]);

      let img1 = document.createElement("img");
      let img2 = document.createElement("img");

      img1.src = "imgs-calendar/" + typeImg + n1 + ".jpg";
      img2.src = "imgs-calendar/" + typeImg + n2 + ".jpg";

      cell.appendChild(img1);
      cell.appendChild(img2);
    }

    row.appendChild(cell);

    if ((day + startDay) % 7 === 0 || day === lastDate) {
      body.appendChild(row);
      row = document.createElement("tr");
    }
  }
}

let currDate = new Date();
genCalendar(currDate);
document.getElementById("currM").innerText =
  currDate.getMonth() + 1 + "/" + currDate.getFullYear();

// btn action
function previousMonth() {
  currDate.setMonth(currDate.getMonth() - 1);
  genCalendar(currDate);
  document.getElementById("currM").innerText =
    currDate.getMonth() + 1 + "/" + currDate.getFullYear();
}

function currentMonth() {
  currDate = new Date();
  genCalendar(currDate);
  document.getElementById("currM").innerText =
    currDate.getMonth() + 1 + "/" + currDate.getFullYear();
}

function nextMonth() {
  currDate.setMonth(currDate.getMonth() + 1);
  genCalendar(currDate);
  document.getElementById("currM").innerText =
    currDate.getMonth() + 1 + "/" + currDate.getFullYear();
}
