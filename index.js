let homeEl = document.getElementById("home-point-el")
let homeCount = 0
let guestEl = document.getElementById("guest-point-el")
let guestCount = 0

function increaseHomeOne() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function increaseHomeTwo() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function increaseHomeThree() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function increaseGuestOne() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function increaseGuestTwo() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function increaseGuestThree() {
    guestCount += 3
    guestEl.textContent = guestCount
}
