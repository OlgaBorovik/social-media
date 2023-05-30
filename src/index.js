const body = document.querySelector('body')
const toggle = document.querySelector(".toggle")

let getMode = localStorage.getItem("mode")
if (getMode && getMode === "light") {
    body.classList.add("light")
    toggle.classList.add("active")
} else {
    body.classList.add("dark")
}

toggle.addEventListener("click", () => {
    body.classList.toggle("light")
    body.classList.toggle("dark")

    if (body.classList.contains("light")) {
        return localStorage.setItem("mode", "light")
    }
    localStorage.setItem("mode", "dark")
})

toggle.addEventListener("click", () => toggle.classList.toggle("active")
    )