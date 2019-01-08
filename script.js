window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //klik på knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændre knap til 3 streger
        document.querySelector("#menuknap").textContent = "☰";

    } else {
        //menu er nu vist ændre knap til X
        document.querySelector("#menuknap").textContent = "X";
    }


}
