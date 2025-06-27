// script.js
function creaTabellaOrari() {
  const container = document.getElementById("tabella-orari");
  
  // crea elemento tabella
  const table = document.createElement("table");
  table.border = "1";

  // crea intestazione
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  ["Giorno", "Ora"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // crea corpo tabella
  const tbody = document.createElement("tbody");

  orariMesse.forEach(messa => {
    const tr = document.createElement("tr");
    const tdGiorno = document.createElement("td");
    tdGiorno.textContent = messa.giorno;
    const tdOra = document.createElement("td");
    tdOra.textContent = messa.ora;
    tr.appendChild(tdGiorno);
    tr.appendChild(tdOra);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

// chiama la funzione al caricamento della pagina
window.onload = () => {
  creaTabellaOrari();
};
