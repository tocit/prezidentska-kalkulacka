var otazky = [
	['"Zasedání parlamentu a vlády bych se účastnil spíše vzácně."', '"Byl bych častým hostem na zasedáních kabinetu."'],
	['"Amnestii jako prezident nikdy nevyhlásím."', '"Z důvodu přeplněných věznic jsem byl pro amnestii."'],
	['"Kosovo splnilo požadavky na mezinárodní uznání."', '"Kosovo je teroristická diktatura financovaná narkomafiemi a demokratická země by ji uznat neměla."'],
	['"Jako občan jsem jednoznačně proti vydávání majetku církvím."', '"Co bylo ukradeno, má se vrátit. I když je to církev."'],
	['"Nepovažoval bych za užitečné, kdybychom byli závislí na Rusku, pokud jde o jadernou energetiku."', '"Rusko je kulturní součástí euroamerického prostoru a není třeba ho vnímat negativně."'],
	['"Zvýšení sazby DPH bylo jedním z kroků k nutné rozpočtové stabilizaci."', '"Jsem pro sníženou sazbu DPH na základní potraviny a léky a nebráním se zvýšení DPH na luxusní zboží."'],
	['"Adopce páry stejného pohlaví mohou fungovat spíše jako nouzové řešení."', '"Jsem pro adopce homosexuálními páry, umožní-li dítěti  život příjemnější než v dětských domovech."'],
	['"Ano, doporučil bych svým příbuzným spoření v soukromých penzijních fondech."', '"Nedoporučil bych svým příbuzným spoření v soukromých penzijních fondech."'],
	['"Česko by se nemělo aktivně podílet na záchraně eurozóny a nemělo by přispívat do záchranného fondu."', '"Pokud jde o aktivní pomoc při záchraně eurozóny, jistou formu solidarity bychom měli dodržet."'],
	['"V Česku nemá být zavedeno ani školné, ani zápisné."', '"Školné na vysokých školách má být zavedeno v potřebné míře."'],
	['"Důchodovou reformu pokládám za jeden z největších tunelů v dějinách České republiky."', '"Naše důchodová reforma je model, který v zahraničí docela dobře funguje."'],
	['"Palestinci mají zajisté právo na vlastní stát"', '"Palestinci nemají mít vlastní stát."'],
	['"Milosti ano, ale vždy bych se je pokusil tak vysvětlit, aby byly důvody každému srozumitelné."', '"Milosti bych jako prezident neuděloval."'],
	['"Podpořil bych ocenění bratřím Mašínovým."', '"Vyznamenání bratřím Mašínovým bych neudělil."']
	
],

kandidati = [	
//	 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 
	[1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, "Miloš", "Zeman"],
	[0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, "Karel", "Schwarzenberg"]		
],

vysledky = [
	[],
	[]
],

i = 0,

u = 630 / otazky.length, //progress bar

mojeOdpovedi = [],

seznamVysledku = "",

sirkaSloupce = [],

twtext = "";

function sectiKandidata(cislo) {
		var sum = 0;
		for (var y = 0; y < vysledky[cislo].length; y++) {			
			sum = sum + vysledky[cislo][y];			
		}
		kandidati[cislo].push(sum);
}


function dalsi() {
	
//porovnání odpovědí
	if (i > 0) {
    if ($(this).attr("id") == "leva") {
    	var odpoved = 0;
    } else if ($(this).attr("id") == "prava"){
    	var odpoved = 1;
    }
    
    for (var k = 0; k < kandidati.length; k++) {
    	if (odpoved == kandidati[k][i-1]) {
			vysledky[k][i-1] = 1;
    	} else {
    		vysledky[k][i-1] = 0;
    	}
    }
    
    mojeOdpovedi.push(odpoved);

    }
	
//načtení další otázky
	if (i < otazky.length) {
	
    $("#prava, #leva").hide();    
    $("#leva").replaceWith('<div id="leva"><div class="varianty">' + otazky[i][0] + '</div></div>');
    $("#prava").replaceWith('<div id="prava"><div class="varianty">' + otazky[i][1] + '</div></div>');
    
   
    i++;
 
    if (i == 1) { //progress bar
    	$("#hr1").width(10);	
    } else {
	    $("#hr1").width(u * (i - 1));
    }
    $("#prava, #leva").show();
    $("#prava, #leva").click(dalsi);
    }
    
    else {  // výsledková listina
    




 // sečti výsledky
    for (var z = 0; z < vysledky.length; z++) {
 		sectiKandidata(z);
 	}

// vyrob srovnávací tabulky
	var shodaTab = "",
	neshodaTab = "",
	neodpovedelTab = "";

	for (var s = 0; s < kandidati.length; s++) {
 		for (var t = 0; t < vysledky[s].length; t++) {
 			if (vysledky[s][t] == 0) {
 				if (kandidati[s][t] == 1) {
 					neshodaTab += "<li><em>" + otazky[t][1] + "</em></li>"; 
 				} else {
 					neshodaTab += "<li><em>" + otazky[t][0] + "</em></li>";
 				}

	 		} else {
 				if (kandidati[s][t] == 1) {
	 				shodaTab += "<li><em>" + otazky[t][1] + "</em></li>";
 				} else {
 					shodaTab += "<li><em>" + otazky[t][0] + "</em></li>";
 				}
 		}
 	}
 	if (shodaTab.length == 0) {shodaTab = "<li>V ničem.</li>"};
 	if (neshodaTab.length == 0) {neshodaTab = "<li>Nic.</li>"};
 	kandidati[s].push(shodaTab);
 	kandidati[s].push(neshodaTab);
 	kandidati[s].push(neodpovedelTab);
 	shodaTab = "";
 	neshodaTab = "";
 	neodpovedelTab = "";
}

// seřaď kandidáty podle výsledku
 	kandidati.sort(function(a,b) {return b[27] - a[27];});
 	
// vypiš kandidáty do HTML proměnné
	for (var x = 0; x < kandidati.length; x++) {
 		var krestniJmeno = kandidati[x][kandidati[x].length - 6];
 		var prijmeni = kandidati[x][kandidati[x].length - 5];
 		//var nezodpOtazky = 0;
 		//if (prijmeni == "Zeman") {nezodpOtazky = 4;};
 		/*for (var g = 0; g < kandidati[x].length; g++) {
 			if (kandidati[x][g] == "x") {
 				nezodpOtazky = nezodpOtazky + 1; 
 				console.log(nezodpOtazky);
 			};
 		}*/
 		var procentShody = parseInt(kandidati[x][kandidati[x].length - 4] * 100 / otazky.length);
 		if (x == 0 && procentShody != 50 && procentShody != 100) {procentShody++};
		var shodliSe = kandidati[x][kandidati[x].length - 3];
 		var neshodliSe = kandidati[x][kandidati[x].length - 2];
 		var odpovidalA = "odpovídal ";
 		var title = "<h2>" + krestniJmeno + " " + prijmeni + " a jeho názory</h2><h3>V čem byste se shodli:</h3><ul>" + shodliSe + "</ul><h3>Co říká " + krestniJmeno + " " + prijmeni + ", ale vy s tím nesouhlasíte:</h3><ul>" + neshodliSe + "</ul>";	
 		sirkaSloupce[x] = parseInt(610 / 100 * procentShody);
 		seznamVysledku += "<div class='vysledek' id='v" + (x + 1) + "' title='" + title + "'>" + (x + 1) + ". " + krestniJmeno + " <strong>" + prijmeni + "</strong> " + procentShody + " %</div>";	
 	};

// tabulka s komplet vysledky
	var kompletVysledky = "<table id = 'tabulka'(><thead><tr><th>VAŠE ODPOVĚDI</th>";
	for (var m = 0; m < kandidati.length; m++) {
		kompletVysledky += "<th>" + kandidati[m][kandidati[m].length - 6] + " " + kandidati[m][kandidati[m].length - 5] + "</th>";	
	}
	kompletVysledky += "</tr></thead><tbody><tr>";

	for (var n = 0; n < otazky.length; n++) {
		kompletVysledky += "<td class = 'oran vase'>" + otazky[n][mojeOdpovedi[n]] + "</td>";
		for (var p = 0; p < kandidati.length; p++) {if (kandidati[p][n] == mojeOdpovedi[n]) {
				kompletVysledky += "<td class = 'oran'>" + otazky[n][kandidati[p][n]] + "</td>";
			} else {
				kompletVysledky += "<td>" + otazky[n][kandidati[p][n]] + "</td>";
			}
		}	
	kompletVysledky += "</tr><tr>";	
	}
	kompletVysledky += "</tbody></table>";

// nakresli výsledky
	var prvni = parseInt(kandidati[0][kandidati[0].length - 4] * 100 / otazky.length);
 	if (prvni != 50 && prvni != 100) {prvni++};

 	var druhy = parseInt(kandidati[1][kandidati[1].length - 4] * 100 / otazky.length);

    $("#hr1").width(630);
    $("#moznosti").height("auto");
    $("#titulek").html("Výsledky: S kým jste se lépe shodli?");
    $("#leva, #prava, #nebo, .vysvetlivky").remove();
    $("#moznosti").append(seznamVysledku);
  	$("#moznosti").after("<div id='cudlik'>POROVNEJTE SI VŠECHNY ODPOVĚDI</div>");
    $("#moznosti").after("<div id='sdilejte'></div>");
    if (kandidati[0][27] != kandidati[1][27]) {
    	$("#moznosti").after("<p class='vysvetlivky'>Lepším kandidátem by pro vás byl <strong>" + kandidati[0][25] + " " + kandidati[0][26] + "</strong>.<br>Blahopřejeme! Sdílejte svůj výsledek s přáteli:</p>");
    	if (kandidati[0][25] == "Miloš") {   		
    		twtext = "S názory Miloše Zemana se shodnu na " + prvni + " procent. Se Schwarzenbergem na " + druhy + " procent. Co vyšlo vám? ";
    	} else {
    		twtext = "S názory Karla Schwarzenberga se shodnu na " + prvni + " procent. Se Zemanem na " + druhy + " procent. Co vyšlo vám? ";
    	} 
	} else {
		$("#moznosti").after("<p class='vysvetlivky'>Nerozhodně! <strong>Karel Schwarzenberg</strong> i <strong>Miloš Zeman</strong> jsou pro vás stejně dobří kandidáti.<br>Blahopřejeme! Sdílejte svůj výsledek s přáteli:</p>");
			twtext = "S Karlem Schwarzenbergem i s Milošem Zemanem se shodnu na 50 procent. Co teď? A co vyšlo vám?";
	};
 
//čudlík
    $("#cudlik").after(kompletVysledky);
    $("#cudlik").on("click", function() {
    	$("#tabulka").slideToggle("slow");
    });

//facebook
	$("#sdilejte").append($("#fb-like"));
	$("#fb-like").show();

//twitter
 	$("#sdilejte").append("<a href='//twitter.com/share' class='twitter-share-button' data-url='http://data.blog.ihned.cz/c1-59115400-prezidentska-kalkulacka' data-text='" + twtext + "' data-via='dataIHNED' data-lang='cs'>Tweet</a>");   
 	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='http://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');

// graf
    for (var w = 0; w < sirkaSloupce.length; w++) {
 		var idecko = "#v" + (w + 1);
		$(idecko).width(sirkaSloupce[w]); 	
 	}

 	$("div[title]").qtip({
		position: {
			my: "top left",
			target: "mouse",
//			viewport: $(window),
			adjust: {
			x: 10,  y: 10
			}
		},
		hide: {
			fixed: true
		},
		style: "qtip-shadow"
		});

    
    }   	
}   	    	    	    	

$(document).ready(dalsi);
