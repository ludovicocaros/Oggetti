export class Utente{
	nome:string;
	
	residenza:string;
	domicilio:number;
	telefono:number;
	contrattodel:string;
	ultimabolletta:number;

	constructor(
	nome:string,
	
	residenza:string,
	domicilio:number,
	telefono:number,
	contrattodel:string,
	ultimabolletta:number){

	
	this.nome= nome;
	this.residenza= residenza;
	this.domicilio= domicilio;
	this.telefono= telefono;
	this.contrattodel= contrattodel;
	this.ultimabolletta= ultimabolletta;}



info(){
	
	return 'L utente si chiama ' + this.nome + ' vive in via ' + this.residenza + ' numero ' + this.domicilio + ' numero telefonico ' + this.telefono + ' contratto del '+ this.contrattodel + ' quantificativo dell ultima bolletta ' + this.ultimabolletta + '';
}
}