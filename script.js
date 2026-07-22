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
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    // Hijri Date
    document.getElementById("hijri-date").textContent =
        new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(now);

}


/* ===========================
      INITIALIZE
=========================== */

updateClock();
updateDates();

setInterval(updateClock, 1000);
setInterval(updateDates, 60000);