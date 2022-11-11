function valid() {
    let d = Number(day.value);
    let m = Number(month.value);
    let y = Number(year.value);
    

    leapYear = y % 400 == 0 || y % 4 == 0 && y % 100 != 0;

    cas1 = y > 0 && (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (d >= 1 && d <= 31);
    cas2 = y > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && (d >= 1 && d <= 30);
    cas3 = y > 0 && m == 2 && !leapYear && (d >= 1 && d <= 28);
    cas4 = y > 0 && m == 2 && leapYear && (d >= 1 && d <= 29);

    if (cas1 || cas2 || cas3 || cas4) {
        document.getElementById('result').innerHTML = m + "/" + d + "/" + y + " The date you entered is correct";
    } else {
        document.getElementById('result').innerHTML = m + "/" + d + "/" + y + " The date you entered is isn't correct !!";
    }
}