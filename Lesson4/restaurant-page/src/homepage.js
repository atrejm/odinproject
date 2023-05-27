

const header = (restarauntName) => {
    let head = document.createElement("h1")
    head.classList.add("restaraunt")
    head.innerText = restarauntName
    let subtitle = document.createElement("p")
    subtitle.innerText = "A culinary project for shitters and pissbrains"
    subtitle.style.fontSize = '1ex'
    subtitle.classList.add("restaraunt");
    head.append(subtitle)

    const contentDiv = document.getElementById("content")

    contentDiv.appendChild(head)
}

const body = (bodyText) => {
    let body = document.createElement("p")
    body.innerText = bodyText

    const contentDiv = document.getElementById("content")

    contentDiv.appendChild(body)
}

const buildSite = () => {
    header("My Restaraunt: Aglio de pepe");
    body("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum fermentum est, ut faucibus ligula hendrerit quis. Vivamus congue, nulla id auctor scelerisque, tellus erat pretium nisl, id interdum felis dolor et urna. Praesent vel augue nec tortor interdum tempus quis a justo. Fusce et arcu sed quam sollicitudin faucibus. Cras tristique placerat vestibulum. Nunc vitae dolor non diam finibus iaculis. Quisque sit amet dui faucibus, porttitor quam sed, fermentum elit. Integer libero nisi, aliquam nec bibendum malesuada, finibus et risus.")
}

export default buildSite;