export class Animale{
	specie: string;
	zampe: number;
	habitat: string;
	alimentazione: string;
	vitamedia: number;

	constructor(specie:string ,zampe:number, habitat:string, alimentazione:string, vitamedia:number){
		this.specie= specie;
		this.zampe= zampe;
		this.habitat= habitat;
		this.alimentazione= alimentazione;
		this.vitamedia= vitamedia;}

	

	info() {
    
    return 'La specie si chiama ' + this.specie + ' numero zampe ' + this.zampe + ' il suo habitat ' + this.habitat + ' la sua alimentazione ' + this.alimentazione + ' la sua vita media è ' + this.vitamedia + '';
  }
  }