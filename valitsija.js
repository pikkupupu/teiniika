// Lue sanalista
fetch('sanalista.txt')
 .then(response => response.text())
 .then(data => {
  // Jaa sanat rivinvaihdon perusteella ja tallenna ne taulukkoon
    const sanat = data.split('\n')
			    
  // Arvo satunnainen indeksi sanat-taulukosta
    const satunnainenIndeksi = Math.floor(Math.random() * sanat.length)
			    
  // Näytä arvottu sana käyttäjälle
  document.getElementById('botti').textContent = sanat[satunnainenIndeksi]
})