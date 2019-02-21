export class Auto{
	marca:string;
	modello:string;
	cavalli:number;
	porte:number;
	cilindrata:number;
	annoimmatricolazione:number;
	numerotelaio:number;

	constructor(
	marca:string,
	modello:string,
	cavalli:number,
	porte:number,
	cilindrata:number,
	annoimmatricolazione:number,
	numerotelaio:number){

	this.marca=marca;
	this.modello=modello;
	this.cavalli=cavalli;
	this.porte=porte;
	this.cilindrata=cilindrata;
	this.annoimmatricolazione=annoimmatricolazione;
	this.numerotelaio=numerotelaio;}


	
info(){
	
	return 'La marca dell auto '+ this.marca + ' il suo modello è ' + this.modello + ' cavalli ' + this.cavalli + ' porte '+ this.porte + ' la sua cilindrata ' + this.cilindrata + ' il suo anno di immatricolazione ' + this.annoimmatricolazione + ' il suo numero di telaio è ' + this.numerotelaio + '';}

}