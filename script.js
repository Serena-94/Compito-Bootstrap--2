

// 1) Conta quante card ci sono nella pagina
function countTrips() {
    const totalCards = document.querySelectorAll('.card').length
    alert("Ci sono attualmente " + totalCards + " mete disponibili sulla pagina!")
}

// 2) Rimuove tutte le card dal DOM 
function removeAllCards() {
    const allCards = document.querySelectorAll('.card')
    
    for (const card of allCards) {
        card.style.display = "none"
    }
}

// 3) Collassa o mostra la sezione "Offerte della Settimana"
function toggleSection() {
    const targetSection = document.getElementById('offer-week')
    if (targetSection.style.display === "none") {
        targetSection.style.display = "block"
    } else {
        targetSection.style.display = "none"
    }
}


document.getElementById('btn-count').addEventListener('click', countTrips)
document.getElementById('btn-remove').addEventListener('click', removeAllCards)
document.getElementById('btn-collapse').addEventListener('click', toggleSection)