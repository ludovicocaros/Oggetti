export class Giocatore{

    nome: string;
    cognome: string;
    numero: number;
    posizione: string;
  
 

   constructor(n:string,c:string,r:number,d:string) {
       this.nome=n;
       this.cognome=c;
       this.numero=r;
       this.posizione=d;
     

    }
 
  
    infoGioca(){ 
     return 'Nome:'+this.nome +' , Cognome:'+ this.cognome +' , Numero:'+ this.numero +' , Posizione:'+ this.posizione ;
    }

 }