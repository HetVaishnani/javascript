function ses() {
    let a = document.getElementById("data").value
    // console.log(a)

    switch (+a) {
        case 12:
            document.getElementById("ans").innerText = "Winter"
            break;
        case 1:
        case 2:
            document.getElementById("ans").innerText = "Winter"
            break;

        case 3:
        case 4:
        case 5:
            document.getElementById("ans").innerText = "Summer"
            break;

        case 6:
        case 7:
        case 8:
            document.getElementById("ans").innerText = "Autumn"
            break;

        case 9:
        case 10:
        case 11:
            document.getElementById("ans").innerText = "Spring"
            break;

        default:
            document.getElementById("ans").innerText = "Invalid"
            break;
    }

}

function het() {

    let val = document.getElementById("v").value
    console.log(val)
    switch (val) {
        case "a":
            document.getElementById("anss").innerText = "Vowel"
            break;
        case "e":
            document.getElementById("anss").innerText = "Vowel"
            break;
        case "i":
            document.getElementById("anss").innerText = "Vowel"
            break;
        case "o":
            document.getElementById("anss").innerText = "Vowel"
            break;
        case "u":
            document.getElementById("anss").innerText = "Vowel"
            break;

        default:
            document.getElementById("anss").innerText = "Consonant"
            break;
    }
}

function age(params) {

    let value = document.getElementById("data").value
    switch (true) {
        case value >= 0 && value <= 12:
            document.getElementById("ansss").innerText = "Child"
            break;
        case value >= 13 && value <= 19:
            document.getElementById("ansss").innerText = "Teen"
            break;
        case value >= 20 && value <= 59:
            document.getElementById("ansss").innerText = "Adult"
            break;
        case value >= 60:
            document.getElementById("ansss").innerText = "Senior"
            break;

        default:
            document.getElementById("ansss").innerText = "Invild"
            break;
    }
}