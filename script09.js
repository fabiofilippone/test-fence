
// --------------------------------------------
// FFF: xxx
// --------------------------------------------
function pippo(detail,PoolTab) {
   const ParentPoolTab   = document.getElementById(PoolTab.id);
   const idDetailPoolTab = "Detail_" + ParentPoolTab.id;
     let DetailPoolTab   = document.getElementById(idDetailPoolTab);

      if (!DetailPoolTab) {
         // Crea la tabella
         DetailPoolTab      = document.createElement("table");
         DetailPoolTab.id   = idDetailPoolTab;
         DetailPoolTab.classList.add("DetailPoolTab");


    const thead     = document.createElement("thead");
    const row1      = document.createElement("tr");
    const th1       = document.createElement("th");

    th1.textContent = "Dettaglio degli Assalti";
    th1.className   = "dph0-c0-poolAA";
  //  th1.style.border = "none";
    th1.colSpan     = 2;
    row1.appendChild(th1);
    thead.appendChild(row1);

    // Riga 2 intestazione (due colonne)
    const row2 = document.createElement("tr");
    const headers = ["Nr", "Athleta", "Athleta", "Score"];
    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.backgroundColor = "#f0f0f0";
        th.style.textAlign = "center";
        if (text === "Score") {th.colSpan = 2;}
        row2.appendChild(th);
    });


    thead.appendChild(row2);



    // Aggiunge thead alla tabella
    DetailPoolTab.appendChild(thead);


const rows = [
  ["A1 " + idDetailPoolTab,
   "B1 " + idDetailPoolTab],
  ["A2", "B2", "C2", "D2"]
];

 detail.forEach((cells, index) => {
   const row = DetailPoolTab.insertRow();
         row.insertCell().textContent = index + 1;
   cells.forEach(cellText => {
         row.insertCell().textContent = cellText;
  });
});

    // Inserisce subito dopo la tabella padre
    const parent = ParentPoolTab.parentNode;
    parent.insertBefore(DetailPoolTab, ParentPoolTab.nextSibling);
  } else {
    // Alterna visibilità
    DetailPoolTab.style.display =
      DetailPoolTab.style.display === "none" ? "table" : "none";
  }
} // end function pippo

// ---------------------------------------------------------------------
//
// ---------------------------------------------------------------------
function showPool(dati, detail, poolid) {
    let wpool     = "Pool";
    let wpoolnr   = poolid;
    let wstreep   = "Streep";
    let wstreepnr = "Yellow";
    let wtime     = "time";
    let wtimenr   = "14:30";

    const PoolTab = document.createElement("table");
    PoolTab.id        = "Pool_" + poolid;
    PoolTab.className = "pool-table";

    const thead = document.createElement("thead");
    const tr1   = document.createElement("tr");

    // Prima riga
    const th1   = document.createElement("th");
          th1.className   = "ph0-c0-pool";
          th1.colSpan     = 1;
          th1.textContent = wpool + " " + wpoolnr;
          tr1.appendChild(th1);
    const th2 = document.createElement("th");
          th2.className   = "ph0-c0-streep";
          th2.colSpan     = 5;
          th2.textContent = wstreep + " " + wstreepnr;
          tr1.appendChild(th2);
    const th3 = document.createElement("th");
          th3.className   = "ph0-c2-time";
          th3.colSpan     = 4;
          th3.textContent = wtime + " " + wtimenr;
          tr1.appendChild(th3);
          thead.appendChild(tr1);

    // Seconda riga (Athleta, Club, 1...7)
    const tr2       = document.createElement("tr");
    const thAthleta = document.createElement("th");
          thAthleta.textContent = "Athleta";
          thAthleta.className   = "ph1-c012";
          tr2.appendChild(thAthleta);
    const thRank = document.createElement("th");
          thRank.textContent = "Rank";
          thRank.className   = "ph1-c012";
          tr2.appendChild(thRank);
    const thClub = document.createElement("th");
          thClub.textContent = "Club";
          thClub.className   = "ph1-c012";
          tr2.appendChild(thClub);

    for (let i = 0; i < dati.length; i++) {
         let thval = document.createElement("th");
         thval.textContent = (i + 1);
         thval.classList.add("ph1-c01234567");
         tr2.appendChild(thval);
    }

    for (let i = dati.length; i <= 7; i++) {
        //console.log("87 val dati.length", i);

    let   separator = document.createElement("th");
          separator.style.border = "none";
          tr2.appendChild(separator);
    }
    const thts = document.createElement("th");
          thts.textContent = "TS";
          thts.className   = "ph1-c012";
          tr2.appendChild(thts);

    const thtr = document.createElement("th");
          thtr.textContent = "RS";
          thtr.className   = "ph1-c012";
          tr2.appendChild(thtr);
    const thtd = document.createElement("th");
          thtd.textContent = "Delta";
          thtd.className   = "ph1-c012";
          tr2.appendChild(thtd);
          separator = document.createElement("th");
          separator.style.border = "none";
          tr2.appendChild(separator);

    const thtv = document.createElement("th");
          thtv.textContent = "V";
          thtv.className   = "ph1-c012";
          tr2.appendChild(thtv);
    const thtp = document.createElement("th");
          thtp.textContent = "V/M";
          thtp.className   = "ph1-c012";
          tr2.appendChild(thtp);

    thead.appendChild(tr2);
    let j=0;
    dati.forEach(atleta => {
      const row = document.createElement("tr");
            atleta.club = atleta.club ?? null;
      // atleta
      const catleta = document.createElement("td");
            catleta.classList.add("pc0-athleta");
      const flag = document.createElement("span");
            flag.classList.add("fi", `fi-${atleta.flag.toLowerCase()}`);
            flag.style.marginRight = "6px";
            catleta.appendChild(flag);
            catleta.appendChild(document.createTextNode(atleta.atleta));
            row.appendChild(catleta);
      // rank
      const crank = document.createElement("td");
            crank.textContent = atleta.rank;
            crank.classList.add("pc1-rank");
            row.appendChild(crank);
      // club
      const cclub = document.createElement("td");
            cclub.textContent = atleta.club;
            cclub.classList.add("pc1-club");
            row.appendChild(cclub);
      atleta.won = 0;
      for (let i = 0; i < atleta.value.length-2; i++) {
           let cval = document.createElement("td");
               cval.textContent = atleta.value[i].slice(1);
               if (atleta.value[i][0] === "V") cval.classList.add("pc-victory");
               if (atleta.value[i][0] === "V") atleta.won++;
               if (atleta.value[i][0] === "D") cval.classList.add("pc-defeat");
               if (i === (j)) {cval.textContent = null; cval.classList.add("pc-null")};
               row.appendChild(cval);
      };

      for (let i = dati.length; i <= 7; i++) {
        separator = document.createElement("th");
        separator.style.border = "none";
        separator.style.width  = "3px";
        row.appendChild(separator);
      };
      // Ottieni gli ultimi due valori dall'array
      let cts = document.createElement("td");
          cts.textContent     = atleta.value[atleta.value.length - 2];
          cts.style.textAlign = "right";
          row.appendChild(cts);
      let ctr = document.createElement("td");
          ctr.style.textAlign = "right";
          ctr.textContent     = atleta.value[atleta.value.length - 1];
          row.appendChild(ctr);
      let delta = atleta.value[atleta.value.length - 2] - atleta.value[atleta.value.length - 1];
      let cd    = document.createElement("td");
          cd.style.textAlign = "right";
          cd.textContent     =  delta.toString();
          cd.classList.add("pc-victory");
          cd.classList.add(delta >= 0 ? "pc-victory" : "pc-defeat");
          row.appendChild(cd);
          separator = document.createElement("th");
          separator.style.border = "none";
          row.appendChild(separator);

      let aw = document.createElement("td");
          aw.textContent     = atleta.won;
          aw.style.textAlign = "center";
          row.appendChild(aw);

      let ap = document.createElement("td");
      let apn = (atleta.won/(atleta.value.length-3))
          ap.textContent     = apn.toFixed(2);
          ap.style.textAlign = "right";
          row.appendChild(ap);
      j++;
      thead.appendChild(row);
    });

    const tfoot = document.createElement("tfoot");
    const row   = document.createElement("tr");

    // Bottone 1
    const td1     = document.createElement("td");
      td1.colSpan = 5;
      td1.style.textAlign = "left";
      td1.style.border    = "none";
    const btn1 = document.createElement("button");
      btn1.classList.add("mio-bottone");
    const icon1 = document.createElement("i");
      icon1.classList.add("fa-solid", "fa-list");
      btn1.appendChild(icon1);
      btn1.title = "Details";

      btn1.onclick = () => {
          pippo(detail,PoolTab);
      };

      row.appendChild(td1);
    const td2 = document.createElement("td");
      td2.colSpan = 5;
      td2.style.textAlign = "right";
      td2.style.border = "none";
    const icon2 = document.createElement("i");
      icon2.classList.add("fa", "fa-flag");
    const btn2 = document.createElement("button");
      btn2.classList.add("mio-bottone");
      btn2.appendChild(icon2);
      btn2.title = "Referee";

      td1.appendChild(btn1);
      td2.appendChild(btn2);

      row.appendChild(td2);
      tfoot.appendChild(row);
      PoolTab.appendChild(thead);
      PoolTab.appendChild(tfoot);
      document.body.appendChild(PoolTab);
      console.log("Tabella creata con ID:", PoolTab.id);

} // end function showPool

// ---------------------------------------------------------------------
//
// ---------------------------------------------------------------------
function AshowPool(dati, detail, poolid) {

  const FFTab = document.createElement("table");
  FFTab.classList.add("APoolTab");

  const FFthead  = document.createElement("thead");
  const FFtbody  = document.createElement("tbody");
  const FFtr2h   = ["Athleta","Rank","Club","1","2","3","4","5","6","7","FF","TS","RS","Delta","V","V/M"];
  const FFtr2    = document.createElement("tr");




//
//// Aggiunge intestazione
//const headers = ["Nr", "Athleta", "Athleta", "Score"];
//const headerRow = document.createElement("tr");
//
//FFtr2h.forEach(text => {
//  const th = document.createElement("th");
//  th.textContent = text;
//
//  // Styling intestazione
//
//  if (text === "FF") {
//     console.log("dddsdd  ",text);
//    // th.style.backgroundColor = "none";
//
//  } else {
//     th.style.backgroundColor = "#e0e0e0";
//     th.style.textAlign = "center";
//     th.style.padding = "8px";
//  }
//
//
//  // Gestione colspan per "Score"
//  if (text === "Score") {
//    th.colSpan = 2;
//  }
//
//  FFtr2.appendChild(th);
//});
//
FFthead.appendChild(FFtr2);
FFTab.appendChild(FFthead);
//
//// Aggiunge righe di esempio
//const data = [
//  ["Alice", "Bob", "D1", "V5"],
//  ["Carol", "Dave", "V5", "D3"]
//];
//
//data.forEach((rowData, index) => {
//  const row = document.createElement("tr");
//
//  // Colonna numero riga
//  const numberCell = document.createElement("td");
//  numberCell.textContent = index + 1;
//  numberCell.style.textAlign = "center";
//  row.appendChild(numberCell);
//
//  // Celle con i dati
//  rowData.forEach(cellText => {
//    const td = document.createElement("td");
//    td.textContent = cellText;
//    td.style.textAlign = "center";
//    row.appendChild(td);
//  });
//
//  tbody.appendChild(row);
//});
//
//table.appendChild(tbody);
//
//// Styling base della tabella
//table.style.borderCollapse = "collapse";
//table.style.width = "100%";
//table.style.marginTop = "10px";
//table.querySelectorAll("th, td").forEach(cell => {
//  cell.style.border = "1px solid #999";
//});
//
//// Aggiunge la tabella al documento
  document.body.appendChild(table);
  document.body.appendChild(FFTab);
} // end function AshowPool

function BshowPool(dati, detail, poolid) {
  const container = document.createElement("div");
        container.classList.add("APoolContainer");

  const FFTab = document.createElement("table");
        FFTab.classList.add("APoolTab");

        FFTab.id        = "Pool_" + poolid;

  // Creo thead e tbody
  const FFthead = document.createElement("thead");
  const FFtbody = document.createElement("tbody");

  // ------------------------------------------------
  // Tab Header 01
  // ------------------------------------------------
  const FFTabHeader1 = document.createElement("tr");
  const headersRow1 = ["Pool " + poolid, "Streep Yellow ","time 14:30"];
  headersRow1.forEach(text => {
  const th = document.createElement("th");
        th.textContent = text;
        if (text.startsWith("Streep")) th.colSpan = 3;
        if (text.startsWith("time"))   {
        	  th.colSpan = dati.length-1;
            th.style.textAlign = "right";
        };
        FFTabHeader1.appendChild(th);
   });
   FFthead.appendChild(FFTabHeader1);

  let wpool   = 1;
  let wpoolnr = 1;

  // ------------------------------------------------
  // Tab Header 02
  // ------------------------------------------------
  const FFTabHeader2 = document.createElement("tr");
    let headersRow2  = ["Athleta", "Rank", "Club"];
        for (let i = 0; i < dati.length; i++)  headersRow2.push(i+1);
        for (let i = dati.length ; i < 8; i++) headersRow2.push("");
        headersRow2.push("TS", "RS", "Delta", "","V", "V/M");
        headersRow2.forEach(text => {
  const th = document.createElement("th");
        th.textContent = text;
        if (text !== "" ) th.classList.add("FFTabHeader2Cell");
        FFTabHeader2.appendChild(th);
  });
  FFthead.appendChild(FFTabHeader2);


  // ------------------------------------------------
  // Tab Rows
  // ------------------------------------------------
  let j=0;
  dati.forEach(atleta => {
      const row = document.createElement("tr");
            atleta.club = atleta.club ?? null;
      const catleta = document.createElement("td");
  //          catleta.classList.add("pc0-athleta");
      const flag = document.createElement("span");
            flag.classList.add("fi", `fi-${atleta.flag.toLowerCase()}`);
            flag.style.marginRight = "6px";
            catleta.appendChild(flag);
            catleta.appendChild(document.createTextNode(atleta.atleta));
            catleta.classList.add("FFTabCell");
            if (j === 0)  catleta.style.minWidth = "250px";
            row.appendChild(catleta);
      // rank
      const crank = document.createElement("td");
            crank.textContent = atleta.rank;
            crank.classList.add("FFTabCell");
            crank.style.fontSize = "12px";
            crank.style.textAlign = "right";
            row.appendChild(crank);
      // club
      const cclub = document.createElement("td");
            cclub.textContent = atleta.club;
            cclub.classList.add("FFTabCell");
            cclub.style.fontSize = "12px";
            row.appendChild(cclub);
      atleta.won = 0;
      for (let i = 0; i < atleta.value.length-2; i++) {
           let cval = document.createElement("td");
               cval.textContent = atleta.value[i].slice(1);
               cval.classList.add("FFTabCell");
               cval.style.textAlign = "center";
               if (atleta.value[i][0] === "V") cval.classList.add("pc-victory");
               if (atleta.value[i][0] === "V") cval.style.color = "green";
               cval.style.textAlign = "right";
               if (atleta.value[i][0] === "V") atleta.won++;
               if (atleta.value[i][0] === "D") cval.style.color = "red";
               if (i === (j)) {cval.textContent = null; cval.style.backgroundColor = "#399CFF";};
               row.appendChild(cval);
      };

      for (let i = dati.length; i <= 7; i++) {
        separator = document.createElement("th");
        separator.style.border = "none";
        separator.style.width  = "3px";
        row.appendChild(separator);
      };
      // Ottieni gli ultimi due valori dall'array
      let cts = document.createElement("td");
          cts.textContent     = atleta.value[atleta.value.length - 2];
          cts.style.textAlign = "right";
          row.appendChild(cts);
      let ctr = document.createElement("td");
          ctr.style.textAlign = "right";
          ctr.textContent     = atleta.value[atleta.value.length - 1];
          row.appendChild(ctr);
      let delta = atleta.value[atleta.value.length - 2] - atleta.value[atleta.value.length - 1];
      let cd    = document.createElement("td");
          cd.style.textAlign = "right";
          cd.textContent     =  delta.toString();
          cd.classList.add("pc-victory");
          //cd.classList.add(delta >= 0 ? "pc-victory" : "pc-defeat");
          cd.style.color = delta >= 0 ? "green" : "red";
          row.appendChild(cd);
          separator = document.createElement("th");
          separator.style.border = "none";
          row.appendChild(separator);
          row.style.backgroundColor = (j % 2 === 0) ? "#ffffff" : "#f2f2f2";

      let aw = document.createElement("td");
          aw.textContent     = atleta.won;
          aw.style.textAlign = "center";
          row.appendChild(aw);

      let ap = document.createElement("td");
      let apn = (atleta.won/(atleta.value.length-3))
          ap.textContent     = apn.toFixed(2);
          ap.style.textAlign = "right";
          ap.style.fontWeight = "bold";          
          row.appendChild(ap);
      j++;
      FFthead.appendChild(row);
    });

  // Aggiungi thead e tbody alla tabella
  FFTab.appendChild(FFthead);
  FFTab.appendChild(FFtbody);
  container.appendChild(FFTab);
  document.body.appendChild(container);


  // ------------------------------------------------
  // Tab Foot
  // ------------------------------------------------
  const tfoot = document.createElement("tfoot");
  const row   = document.createElement("tr");

  // Crea 3 celle <td> e aggiungi del contenuto (testo)
  for (let i = 0; i < 3; i++) {
      const cell = document.createElement("td");
      cell.textContent = `Cella ${i + 1}`;  // puoi mettere quello che vuoi
      row.appendChild(cell);
  }

  // Aggiungi la riga al <tfoot>
  tfoot.appendChild(row);
//
//
//  // Bottone 1
//  const td1     = document.createElement("td");
//      td1.colSpan = 5;
//      td1.style.textAlign = "left";
//      td1.style.border    = "none";
//  const btn1 = document.createElement("button");
//      btn1.classList.add("mio-bottone");
//  const icon1 = document.createElement("i");
//      icon1.classList.add("fa-solid", "fa-list");
//      btn1.appendChild(icon1);
//      btn1.title = "Details";
//
//      btn1.onclick = () => {
//          pippo(detail,PoolTab);
//      };
//
//      row.appendChild(td1);
//  // Bottone 2
//  const td2 = document.createElement("td");
//      td2.colSpan = 5;
//      td2.style.textAlign = "right";
//      td2.style.border = "none";
//  const icon2 = document.createElement("i");
//      icon2.classList.add("fa", "fa-flag");
//  const btn2 = document.createElement("button");
//      btn2.classList.add("mio-bottone");
//      btn2.appendChild(icon2);
//      btn2.title = "Referee";
//      row.appendChild(td2);
//



//      // aggiungi
//      td1.appendChild(btn1);
//      td2.appendChild(btn2);
//
//      tfoot.appendChild(row);





 

  // Aggiungi thead e tbody alla tabella
  FFTab.appendChild(FFthead);
  FFTab.appendChild(FFtbody);
  FFTab.appendChild(FFtfoot);  
  container.appendChild(FFTab);
  document.body.appendChild(container);
  console.log("Tabella creata con ID:", PoolTab.id);


} // end function BshowPool

// ----------- MAIN ---------------
//
// --------------------------------

  //showPool(datib,detaila,"1");
  BshowPool(datia,detaila,"1");
  BshowPool(datib,detaila,"2");
  BshowPool(datic,detaila,"3");
  BshowPool(datid,detaila,"4");
  BshowPool(datie,detaila,"5");






