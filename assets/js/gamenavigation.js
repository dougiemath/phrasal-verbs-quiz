/**
 * Function to apply hover feature on buttons
 */

function hoverEffect() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
}

/**
 * Function to remove hover feature on buttons
 */

function hoverOffEffect() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

let buttons = document.getElementsByClassName('all-buttons');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', hoverEffect);
    buttons[i].addEventListener('mouseleave', hoverOffEffect);
    buttons[i].addEventListener('mouseup', hoverOffEffect);
    buttons[i].addEventListener('touchstart', hoverEffect);
    buttons[i].addEventListener('touchend', hoverOffEffect);
}

