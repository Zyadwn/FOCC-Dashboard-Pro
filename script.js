/* =====================================================
   FOCC Dashboard
   Fire Operations Control Center
   ===================================================== */


/* ===========================
        CLOCKS
=========================== */

function updateClock() {

    const now = new Date();

    // Local Time
    document.getElementById("local-time").textContent =
        now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });

    // Zulu Time (UTC)
    document.getElementById("zulu-time").textContent =
        now.toLocaleTimeString("en-GB", {
            timeZone: "UTC",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });

}


/* ===========================
        DATES
=========================== */

function updateDates() {

    const now = new Date();

    // Gregorian Date
document.getElementById("gregorian-date").textContent =
    now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    // Hijri Date
    document.getElementById("hijri-date").textContent =
    new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(now);

/* ===========================
        RUNWAY
=========================== */

async function loadRunway() {

    try {

        const response = await fetch("runway.txt");

        const text = await response.text();

        document.getElementById("runway").innerHTML =
            text.trim().replace(/\n/g, "<br>");

    } catch (error) {

        document.getElementById("runway").innerHTML = "N/A";

    }

}
/* ===========================
      INITIALIZE
=========================== */

updateClock();
updateDates();
loadRunway();

setInterval(updateClock, 1000);
setInterval(updateDates, 60000);
setInterval(loadRunway, 10000);
