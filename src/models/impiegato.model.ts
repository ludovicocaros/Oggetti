export class Impiegato{
	nome:string;
	cognome:string;
	datadinascita:number;
	domicilio:number;
	mansione:string;
	stipulacontrattuale:string;
	anzianita:number;
	stipendiolordomensile:number;
	stipendiolordoannuo:number;

	constructor(
	nome:string,
	cognome:string,
	datadinascita:number,
	domicilio:number,
	mansione:string,
	stipulacontrattuale:string,
	anzianita:number,
	stipendiolordomensile:number,
	stipendiolordoannuo:number){

	this.nome=nome;
	this.cognome= cognome;
	this.datadinascita= datadinascita;
	this.domicilio= domicilio;
	this.mansione= mansione;
	this.stipulacontrattuale= stipulacontrattuale;
	this.anzianita= anzianita;
	this.stipendiolordomensile= stipendiolordomensile;
	this.stipendiolordoannuo= stipendiolordoannuo;}
	


info(){
	
	return 'Nome' + this.nome + ' Cognome '+ this.cognome + ' data di nascita ' + this.datadinascita + ' domicilio ' + this.domicilio + ' mansione ' + this.mansione + ' stipulazionecontrattuale ' + this.stipulacontrattuale + ' annidianzianita ' + this.anzianita + ' stipendiolordomensile ' + this.stipendiolordomensile + ' stipendiolordoannuo ' + this.stipendiolordoannuo + '';}


	}