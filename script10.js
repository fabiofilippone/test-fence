
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

//// ---------------------------------------------------------------------
////
//// ---------------------------------------------------------------------
//function AshowPool(dati, detail, poolid) {
//
//  const FFTab = document.createElement("table");
//  FFTab.classList.add("APoolTab");
//
//  const FFthead  = document.createElement("thead");
//  const FFtbody  = document.createElement("tbody");
//  const FFtr2h   = ["Athleta","Rank","Club","1","2","3","4","5","6","7","FF","TS","RS","Delta","V","V/M"];
//  const FFtr2    = document.createElement("tr");
//
//
//
//
////
////// Aggiunge intestazione
////const headers = ["Nr", "Athleta", "Athleta", "Score"];
////const headerRow = document.createElement("tr");
////
////FFtr2h.forEach(text => {
////  const th = document.createElement("th");
////  th.textContent = text;
////
////  // Styling intestazione
////
////  if (text === "FF") {
////     console.log("dddsdd  ",text);
////    // th.style.backgroundColor = "none";
////
////  } else {
////     th.style.backgroundColor = "#e0e0e0";
////     th.style.textAlign = "center";
////     th.style.padding = "8px";
////  }
////
////
////  // Gestione colspan per "Score"
////  if (text === "Score") {
////    th.colSpan = 2;
////  }
////
////  FFtr2.appendChild(th);
////});
////
//FFthead.appendChild(FFtr2);
//FFTab.appendChild(FFthead);
////
////// Aggiunge righe di esempio
////const data = [
////  ["Alice", "Bob", "D1", "V5"],
////  ["Carol", "Dave", "V5", "D3"]
////];
////
////data.forEach((rowData, index) => {
////  const row = document.createElement("tr");
////
////  // Colonna numero riga
////  const numberCell = document.createElement("td");
////  numberCell.textContent = index + 1;
////  numberCell.style.textAlign = "center";
////  row.appendChild(numberCell);
////
////  // Celle con i dati
////  rowData.forEach(cellText => {
////    const td = document.createElement("td");
////    td.textContent = cellText;
////    td.style.textAlign = "center";
////    row.appendChild(td);
////  });
////
////  tbody.appendChild(row);
////});
////
////table.appendChild(tbody);
////
////// Styling base della tabella
////table.style.borderCollapse = "collapse";
////table.style.width = "100%";
////table.style.marginTop = "10px";
////table.querySelectorAll("th, td").forEach(cell => {
////  cell.style.border = "1px solid #999";
////});
////
////// Aggiunge la tabella al documento
//  document.body.appendChild(table);
//  document.body.appendChild(FFTab);
//} // end function AshowPool


// ---------------------------------------------------------------------
//
// ---------------------------------------------------------------------
function BshowPool(dati, detail, pool) {

console.log("169 id " + pool.nr);
console.log("169 streepnr " + pool.streepnr);
console.log("169 streepcolor " + pool.streepcolor);
console.log("169 time " + pool.time);

  const container = document.createElement("div");
        container.classList.add("APoolContainer");

  const FFTab = document.createElement("table");
        FFTab.classList.add("APoolTab");

        FFTab.id        = "Pool_" + pool.nr;

  // Creo thead e tbody
  const FFthead = document.createElement("thead");
  const FFtbody = document.createElement("tbody");

  // ------------------------------------------------
  // Tab Header 01
  // ------------------------------------------------
  const FFTabHeader1 = document.createElement("tr");
  //const streep="Streep " + pool.streepnr + " " + val

 
 
const streep = (pool.streepcolor === "" || pool.streepcolor === undefined) 
  ? pool.streepnr 
  : pool.streepnr + " (" +pool.streepcolor + ")";



console.log ("193 ->" + streep);
  const headersRow1 = ["Pool " + pool.nr, "Streep " + streep,"time " + pool.time];
  headersRow1.forEach(text => {
  const th = document.createElement("th");
        th.textContent = text;
            th.style.fontWeight = "normal"; 
            th.style.fontStyle  = "italic";
        if (text.startsWith("Pool"))   {
            th.style.textAlign  = "left";
            th.style.fontWeight = "bold"; 
            th.style.fontStyle  = "normal";
        };
        if (text.startsWith("Streep")) th.colSpan = 3;
        if (text.startsWith("time")) th.colSpan = dati.length-1;
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
      const flag = document.createElement("span");
            flag.classList.add("fi", `fi-${atleta.flag.toLowerCase()}`);
            flag.style.marginRight = "6px";
            catleta.appendChild(flag);
            catleta.appendChild(document.createTextNode(atleta.atleta));
            catleta.classList.add("FFTab-colAA");
            //catleta.style.border = "1px solid #ccc";
            if (j === 0)  catleta.style.minWidth = "250px";
            row.appendChild(catleta);
      // rank
      const crank = document.createElement("td");
            crank.textContent = atleta.rank;
            //crank.style.border    = "5px solid #ccc"; .FFTab-colAAfadd
            //crank.classList.add("FFTab-colAA");
            crank.style.fontSize  = "12px";
            crank.style.textAlign = "right";
            row.appendChild(crank);
      // club
      const cclub = document.createElement("td");
            cclub.textContent    = atleta.club;
           // cclub.style.border   = "1px solid #ccc";
            cclub.style.fontSize = "12px";
            row.appendChild(cclub);
      atleta.won = 0;
      for (let i = 0; i < atleta.value.length-2; i++) {
           let cval = document.createElement("td");
              // cval.style.border    = "1px solid #ccc";
               cval.style.textAlign = "center";
               cval.textContent     = atleta.value[i].slice(1);
               if (atleta.value[i][0] === "V") cval.style.color = "green";
               if (atleta.value[i][0] === "D") cval.style.color = "red";
               if (atleta.value[i][0] === "V") atleta.won++;
               if (i === (j)) {cval.textContent = null; cval.style.backgroundColor = "#007bff";};
               row.appendChild(cval);
      };

      for (let i = dati.length; i <= 7; i++) {
        separator = document.createElement("th");
        separator.style.border = "none";
        separator.style.background = "white";
        row.appendChild(separator);
      };
      // Ottieni gli ultimi due valori dall'array
      let cts = document.createElement("td");
          cts.textContent     = atleta.value[atleta.value.length - 2];
          cts.style.textAlign = "right";
          //cts.style.border    = "1px solid #ccc";
          row.appendChild(cts);
      let ctr = document.createElement("td");
          ctr.style.textAlign = "right";
         // ctr.style.border    = "1px solid #ccc";
          ctr.textContent     = atleta.value[atleta.value.length - 1];
          row.appendChild(ctr);
      let delta = atleta.value[atleta.value.length - 2] - atleta.value[atleta.value.length - 1];
      let cd    = document.createElement("td");
          cd.style.textAlign = "right";
        //  cd.style.border    = "1px solid #ccc";
          cd.textContent     =  delta.toString();
          cd.style.color = delta >= 0 ? "green" : "red";
       //   row.style.backgroundColor = (j % 2 === 0) ? "#ffffff" : "#f2f2f2";
          row.appendChild(cd);

          separator = document.createElement("th");
          separator.style.background = "white";
          row.appendChild(separator);

      let aw = document.createElement("td");
          aw.textContent     = atleta.won;
          //aw.style.border    = "1px solid #ccc";
          aw.style.textAlign = "center";
          row.appendChild(aw);

      let ap = document.createElement("td");
      let apn = (atleta.won/(atleta.value.length-3))
          ap.textContent      = apn.toFixed(2);
          //ap.style.border     = "1px solid #ccc";
          ap.style.textAlign  = "right";
          ap.style.fontWeight = "bold";
          row.appendChild(ap);
      j++;
      FFthead.appendChild(row);
  });

  // ------------------------------------------------
  // Tab Foot
  // ------------------------------------------------
  const FFtfoot = document.createElement("tfoot");
  const row   = document.createElement("tr");
  // Detail Button
  const td1     = document.createElement("td");
        td1.colSpan = 5;
        td1.style.textAlign = "left";
        td1.style.border    = "none";
  const btn1 = document.createElement("button");
        btn1.classList.add("FFTab-button");
  const icon1 = document.createElement("i");
        icon1.classList.add("fa-solid", "fa-list");
        btn1.appendChild(icon1);
        btn1.title = "Details";
        td1.appendChild(btn1);
        td1.colSpan = 2;
        row.appendChild(td1);
  const td2 = document.createElement("td");
        td2.colSpan = 13;
        row.appendChild(td2);

        // Terza cella con un altro pulsante
  const td3 = document.createElement("td");
  const icon = document.createElement("i");
        icon.classList.add("fa", "fa-flag");
  const btn2 = document.createElement("button");
        btn2.title = "Referee";
      btn2.classList.add("FFTab-button");
        btn2.appendChild(icon);
        td3.colSpan = 2;
        td3.style.textAlign = "right";

        td3.appendChild(btn2);
        row.appendChild(td3);

  FFtfoot.appendChild(row);


 





  // Aggiungi thead e tbody alla tabella
  FFTab.appendChild(FFthead);
  FFTab.appendChild(FFtbody);
  FFTab.appendChild(FFtfoot);  
  container.appendChild(FFTab);
  document.body.appendChild(container);

} // end function BshowPool

// ----------- MAIN ---------------
//
// --------------------------------

const idValue     = 11;
const streepnr    = 14;
const streepcolor = "Yellow";
const starttime   = "14:45";

const pool = {"nr":          idValue, 
	            "streepnr":    streepnr, 
	            "streepcolor": streepcolor,
	            "time":        starttime, 
	    referee1: {"name": "Fabio Filippone", "flag": "it", "country": "ITA" },
	    referee2: {"name": "Arbitro 2",       "flag": "al", "country": "ALB" },
	    referee3: {"name": "Arbitro 3",       "flag": "ph", "country": "PHI" },
	    refereeV: {"name": "Fabio Filippone", "flag": "mx", "country": "MEX" }
	    };



  BshowPool(datia,detaila,pool);
  BshowPool(datib,detaila,pool);
  BshowPool(datic,detaila,pool);
  BshowPool(datid,detaila,pool);
  BshowPool(datie,detaila,pool);






