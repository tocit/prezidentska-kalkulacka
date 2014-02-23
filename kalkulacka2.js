var otazky = [
	['"Мы хотим, чтобы люди знали, на какие деньги сегодня живут чиновники и какие доходы они получают…"', '"Нужны молодые перспективные руководители и главные специалисты, способные оживить экономику, финансовую политику, инвестиционную деятельность…"'],
	['"Огосударствленная церковь - это опасность для истинной веры…"', '"Слава богу, наша церковь не болеет той заразой, которой заболела церковь на Западе…"'],
	['"Достаточно сильно воздействовала на меня американская литература: Фолкнер, Апдайк, Стейнбек, Хемингуэй…"', '"В современной белорусской литературе не должно быть цензуры или запретных тем, кроме, разумеется, антигуманных и аморальных…"'],
	['"Я уже не в том возрасте, чтобы стесняться провинциальности…"', '"Я работал в деревне и жил с мужиками…"'],
	['"В бане, опять же, свой ритуал: у нас есть дежурный по очереди, который назначается по очереди. И вот когда выпадает мне дежурить, то никто больше о том, как там должно быть и что там должно быть, не думает…"', '"Моему сыну даже в бане покоя нет — его информируют, если что-то не так…"']
],

kandidati = [	
//	 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 
	[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, "Uladzimir", "Niakliajeu"],
	[1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, "Alaksandr", "Lukasenka"]		
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
 	if (shodaTab.length == 0) {shodaTab = "<li>Nothing.</li>"};
 	if (neshodaTab.length == 0) {neshodaTab = "<li>Nothing.</li>"};
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
 		var procentShody = Math.round(kandidati[x][kandidati[x].length - 4] * 100 / otazky.length);
		var shodliSe = kandidati[x][kandidati[x].length - 3];
 		var neshodliSe = kandidati[x][kandidati[x].length - 2];
 		var odpovidalA = "odpovídal ";
 		var title = "<h2>" + krestniJmeno + " " + prijmeni + " and his opinions</h2><h3>What you would agree on:</h3><ul>" + shodliSe + "</ul><h3>What " + krestniJmeno + " " + prijmeni + " sais, but you disagree:</h3><ul>" + neshodliSe + "</ul>";	
 		sirkaSloupce[x] = Math.round(610 / 100 * procentShody);
 		seznamVysledku += "<div class='vysledek' id='v" + (x + 1) + "' title='" + title + "'>" + (x + 1) + ". " + krestniJmeno + " <strong>" + prijmeni + "</strong> " + procentShody + " %</div>";	
 	};

// tabulka s komplet vysledky
	var kompletVysledky = "<table id = 'tabulka'(><thead><tr><th>YOUR ANSWERS</th>";
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
    $("#titulek").html("Results: Which candidate is better for you");
    $("#leva, #prava, #nebo, .vysvetlivky").remove();
    $("#moznosti").append(seznamVysledku);
  	$("#moznosti").after("<div id='cudlik'>COMPARE ALL ANSWER</div>");
    $("#moznosti").after("<div id='sdilejte'></div>");
    if (kandidati[0][27] != kandidati[1][27]) {
    	$("#moznosti").after("<p class='vysvetlivky'>The better candidate for you would be <strong>" + kandidati[0][25] + " " + kandidati[0][26] + "</strong>.<br>Congratulations! Share your result with friends:</p>");
    	if (kandidati[0][25] == "Miloš") {   		
    		twtext = "S názory Miloše Zemana se shodnu na " + prvni + " procent. Se Schwarzenbergem na " + druhy + " procent. Co vyšlo vám? ";
    	} else {
    		twtext = "S názory Karla Schwarzenberga se shodnu na " + prvni + " procent. Se Zemanem na " + druhy + " procent. Co vyšlo vám? ";
    	} 
	} else {
		$("#moznosti").after("<p class='vysvetlivky'>It's a draw! Both <strong>Aleksandr Lukasenko</strong> and  <strong>Uladzimir Niakliajeu</strong> Are good for you.<br>Congratulations! Share your result with friends:</p>");
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
