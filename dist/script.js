let eventDiv;
let events = [];

function load() {
    eventDiv = document.getElementById('event-list');
    getEvents();
}

function getEvents() {
    fetch(window.location.href + 'getEvents')
        .then(res => res.json())
        .then(data => {
            events = data;
            displayEvents();
        });
}

function addEvent(event) {
    fetch(window.location.href + 'addEvent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    }).then(res => res.json())
        .then(data => console.log(data));
}

function displayEvents() {
    events.forEach(event => {
        const starts = new Date(event.starts);
        const ends = new Date(event.starts);

        let str = '';
        str += `<div class="event">`;
        str += `<div class="event-head">`;
        str += `<div class="event-head-left">`;

        str += `<span class="event-date">`;
        str += `${('0' + starts.getDate()).slice(-2)}/${('0' + (starts.getMonth() + 1)).slice(-2)}`;
        str += `</span>`;
        str += `<span class="event-time">`;
        str += `à ${('0' + starts.getHours()).slice(-2)}:${('0' + starts.getMinutes()).slice(-2)}`;
        str += `</span>`;

        str += `</div>`;
        str += `<div class="event-head-right">`;

        str += `<span class="event-title">`;
        event.name ? str += event.name : str += 'Sans titre :c';
        str += `</span>`;
        str += `<span class="event-description">`;
        event.description ? str += event.description : str += 'Sans titre :c';
        str += `</span>`;

        str += `</div>`;
        str += `</div>`;
        str += `</div>`;
        eventDiv.innerHTML += str;
    });
}