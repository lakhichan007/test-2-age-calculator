
function calculate() {
    let idate = document.getElementById("date").value
    let imonth = document.getElementById("month").value
    let iyear = document.getElementById("year").value
    let display = document.getElementById("display")

    if (idate === "" || isNaN(idate)) {
        if (imonth === "" || isNaN(imonth)) {

            if(iyear === "" || isNaN(iyear)){
                display.innerHTML = "Date,Month and Year should be a valid number"
            }
            else{
                display.innerHTML = "Date and Month should be a valid number"
            }
            
        }

        else {
            display.innerHTML = "Date should be a valid number"
        }

    }
    else if (imonth === "" || isNaN(imonth)) {
        if(iyear === "" || isNaN(iyear)){
            display.innerHTML = "Month and year should be a valid number"
        }
        else{
            display.innerHTML = "Month should be a valid number"
        }
        
    }

    else if (iyear === "" || isNaN(iyear)) {
        display.innerHTML = "Year should be a valid number"
    }

    else {



        let date = new Date();
        let cdate = date.getDate();
        let cmonth = 1 + date.getMonth()
        let cyear = date.getFullYear();

        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (idate > cdate) {
            cdate = cdate + month[cmonth - 1];
            cmonth = cmonth - 1
        }
        if (imonth > cmonth) {
            cmonth = cmonth + 12;
            cyear = cyear - 1
        }
        let myDate = cdate - idate
        let mymonth = cmonth - imonth
        let myyear = cyear - iyear

        display.innerHTML = `Your age is ${myyear} years ${mymonth} Months and ${myDate} Days`
    }

}