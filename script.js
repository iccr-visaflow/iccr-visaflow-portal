// Mobile navigation toggle
const toggleBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        toggleBtn.classList.toggle("open");
        mobileMenu.classList.toggle("open");
    });
}

// Visa tracking logic
function trackStatus() {
    const ref = document.getElementById("refInput").value.trim().toUpperCase();
    const resultBox = document.getElementById("result");

    if (ref === "") {
        resultBox.style.display = "block";
        resultBox.innerHTML =
            '<p class="no-result">Enter a reference number</p>';
        return;
    }

    if (ref === "VIS-H0024705753") {
        resultBox.style.display = "block";

        resultBox.innerHTML =
            '<div class="visa-header">' +
            '<img src="images/user.png" class="applicant-photo">' +
            '<div class="personal-info">' +
            '<p><strong>VIS-H0024705753</strong></p>' +
            '<p><strong>Name:</strong> Shabbir Hussain</p>' +
            '<p><strong>Status:</strong> Approved</p>' +
            '</div>' +
            '</div>' +
            '<table class="visa-table">' +
            '<tr><th>Nationality</th><td>Pakistan</td></tr>' +
            '<tr><th>Passport No</th><td>BT6895662</td></tr>' +
            '<tr><th>Date of Birth</th><td>02 January 1986</td></tr>' +
            '<tr><th>Sex</th><td>Male</td></tr>' +
            '<tr><th>Submission Date</th><td>14 Oct 2025</td></tr>' +
            '<tr><th>Expiry Date</th><td>29 Oct 2025</td></tr>' +
            '</table>';
    } else {
        resultBox.style.display = "block";

        resultBox.innerHTML =
            '<p class="no-result">Reference not found. Confirm your tracking code.</p>';
    }
}
