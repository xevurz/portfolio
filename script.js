function showTab(tabId) {

    // hide all sections
    let sections = document.querySelectorAll(".content");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // remove active tab style
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // show selected section
    document.getElementById(tabId).classList.add("active");

    // highlight clicked tab
    event.target.classList.add("active");
}