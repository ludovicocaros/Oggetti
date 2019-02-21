import {Impiegato}	from '../models/impiegato.model';
export class Azienda{
	nome:string;
	sedelegale:string;
	sedeoperativa:string;
	annodifondazione:number;
	listaimpiegati:Array<Impiegato>;


	constructor(
	nome:string,
	sedelegale:string,
	sedeoperativa:string,
	annodifondazione:number,
	listaimpiegati:Array<Impiegato>){


	this.nome= nome;
	this.sedelegale= sedelegale;
	this.sedeoperativa= sedeoperativa;
	this.annodifondazione= annodifondazione;
	this.listaimpiegati= listaimpiegati;
	}


	info(){

	var ris= '';

	for(var i=0; i<this.listaimpiegati.length; i++){

		ris= ris+ this.listaimpiegati[i].nome +',';
	}

	return 'Nome ' + this.nome + ' Sede legale ' + this.sedelegale + ' Sede operativa ' + this.sedeoperativa + ' Anno di fondazione' + this.annodifondazione + ''+ ris ;

	}
	
}