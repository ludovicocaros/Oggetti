import { Component } from '@angular/core';
import { Animale } 	from  '../models/animale.model';
import {Utente}		from 	'../models/utente.model';
import {Auto}		from 	'../models/auto.model';
import {Apparecchio} from 	'../models/apparecchio.model';
import {Impiegato}	 from 	'../models/impiegato.model';
import {Azienda}	from 	'../models/azienda.model';
import {Giocatore}	from	'../models/giocatore.model';
import {Squadra}	from	'../models/squadra.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'razza';

  lista:Array<Animale> = [
    new Animale('leone', 4 ,'savana','carnivora', 20),
    new Animale('tartaruga', 4,'oceano','vegetariana', 80),];

Lista:Array<Utente> = [
	new Utente('Dario Cardoni', 'maggiante',34, 33485756484,'gas',155 ),
	new Utente( 'Ludovico Carosi', 'vallerosa',65, 335465768,'gas', 123),
	new Utente( 'Luca darosi', 'valle',23, 335465768,'gas', 78)
];

vetture:Array<Auto> = [
	new Auto('Audi', 'jdoe',155,5,1600,2016,23456),
	new Auto('Fiat', 'Panda',15,5,1600,2016,2356),
	new Auto('Ferrari', 'Enzo',355,3,3000,2017,2456)

];

apparecchi:Array<Apparecchio> = [
	new Apparecchio('pgd', 'cratter', 2000, 300, 1979),
	new Apparecchio('pgd', 'cratter',1989,224, 2000),
	new Apparecchio('pgd', 'cratter',1989,224, 2000)
		];

impiegati:Array<Impiegato> = [
	new Impiegato('Dario', 'Cardoni', 1989, 23, 'segreteria','triennale',6, 1800, 22000),
	new Impiegato('Marco', 'Cardoni', 1999, 21, 'segreteria','triennale',6, 1800, 22000),
	new Impiegato('Luca', 'Cardoni', 1987, 17, 'segreteria','triennale',6, 1800, 22000)
	];
  
aziende:Array<Azienda> = [
	new Azienda('Mars','Londra','Milano', 1960, this.impiegati),
	new Azienda('Fiat','Torino','Torino', 1890, this.impiegati),
	new Azienda('Granarolo','Pescara','Vicenza', 1899, this.impiegati)
];

giocatori:Array<Giocatore> = [
	new Giocatore('Francesco','Totti', 10,'attacco'),
	new Giocatore('Ronaldo', 'il fenomeno', 9,'attaccante'),
	new Giocatore('Alessandro', 'Del Piero', 10 ,'attaccante')
];

squadre: Array<Squadra> = [
    new Squadra("AsRoma","Olimpico",1927,"Serie A", this.giocatori),
    new Squadra("FcInter","SanSiro",1899,"Serie A", this.giocatori),
    new Squadra("Juventus","JuventusStadium",1900,"Serie A", this.giocatori)
    
  ]

}
