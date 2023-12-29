function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x =
        Math.random() *
        (window.innerWidth -
            document.getElementById("noButton").offsetWidth);
    var y =
        Math.random() *
        (window.innerHeight -
            document.getElementById("noButton").offsetHeight);
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
}

function goToCalenderPage() {
    let dt = document.getElementById("yesButton").value
    let datetimevalue = new Date(dt)
    const locale = 'en-IN';

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false, // Use 24-hour clock
        timeZoneName: 'short',
    };

    const indianDateTime = new Intl.DateTimeFormat(locale, options).format(datetimevalue);


    if (dt.length > 0) {
        alert("ok so finalised time is " + indianDateTime)
    }
    else {
        console.log("hi ", indianDateTime)
    }
}
