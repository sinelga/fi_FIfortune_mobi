'use strict';


var luckytellersmaker = angular.module('luckytellersmaker', []);

luckytellersmaker.service("makeluckytellers", function() {

this.luckytellers = [
{"name":"Anna","phone":"0700-96368","location":"Helsinki","moto":"Arvostettu Näkijä karman kirkastaja.","desc":"Nyt on line!"},
{"name":"Anina","phone":"0700-95587","location":"Tampere","moto":"Tarkka ennustus elämääsi rakkaus perhe työ raha terveys.","desc":"Nyt on line!"},
{"name":"Miia","phone":"0700-96369","location":"Turku","moto":"Ennustukset unitulkinnat luonneanalyysit ja onnenkivet.","desc":"Nyt on line!"},
{"name":"Emma","phone":"0700-95584","location":"Vanda","moto":"Tarot unien tulkitseminen. 24 H ennustaja jo kolmannessa polvessa.","desc":"Nyt on line!"},
{"name":"Aino","phone":"0700-95516","location":"Lahti","moto":"Intuitiivinen parantaja apua rakkaus - tai seksiasioihin.","desc":"Nyt on line!"},
{"name":"Ella","phone":"0700-95498","location":"Espoo","moto":"Kaikki henkimaailmalta. Vastauksia elämän kysymyksiin.","desc":"Nyt on line!"},
{"name":"Siiri","phone":"0700-95484","location":"Jyväskylä","moto":"Inhimillinen auttaja joka näkee elämänsuuntasi.","desc":"Nyt on line!"},
{"name":"Sara","phone":"0700-95463","location":"Oulu","moto":"Lappilainen näkijä ja kaukoparantaja jo kolmannessa polvessa.","desc":"Nyt on line!"},
{"name":"Lida","phone":"0700-95461","location":"Kouvola","moto":"Lämminhenkinen intuitiivinen näkijä. Osaavaa apua elämän eri ongelmatilanteissa.","desc":"Nyt on line!"},
{"name":"Emilia","phone":"0700-95448","location":"Joensuu","moto":"Intuitiivinen vahvan kokemuksen omaava näkijä. Vuosien kokemus. Selvännäkökyky jo lapsesta asti.","desc":"Nyt on line!"},
{"name":"Sofia","phone":"0700-94988","location":"Kuopio","moto":"Näen elämäntilanteesi ja tulevaisuutesi tapahtumat ja mahdollisuutesi vaikuttaa niihin. Saat välitöntä apua ja ohjausta mieltäsi askarruttavissa asioissa.","desc":"Nyt on line!"},
{"name":"Heidi","phone":"0700-94453","location":"Kajaani","moto":"Olen selvänäköinen ja tuntoinen unien tulkki. Minä näen sinut kun kosketat ajatuksellasi minua. Autan sinua elämäsi ratkaisuissa kuten rakkaus ihmissuhteet työ ja terveys.","desc":"Nyt on line!"}
]


});



