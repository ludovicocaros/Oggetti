export class Apparecchio{
	marca:string;
	modello:string;
	annodicostruzione:number;
	numeroseriale:number;
	acquistoil:number;
	

	constructor(
	marca:string,
	modello:string,
	annodicostruzione:number,
	numeroseriale:number,
	acquistoil:number){

	this.marca= marca;
	this.modello= modello;
	this.annodicostruzione= annodicostruzione;
	this.numeroseriale= numeroseriale;
	this.acquistoil= acquistoil;
	}


	info(){

		return 'Marca ' + this.marca + ' modello ' + this.modello + ' costruito nel ' + this.annodicostruzione + ' numero di serie ' + this.numeroseriale + ' acquistato nel ' + this.acquistoil + '';
	}
	}