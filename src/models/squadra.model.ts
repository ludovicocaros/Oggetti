import {Giocatore}  from  '../models/giocatore.model';

export class Squadra{

    nome: string;
    stadio: string;
    nascita: number;
    campionato: string;
    giocatori: Array<Giocatore>;
  
 

   constructor(n:string,c:string,r:number,d:string,gioc:Array<Giocatore>) {
       this.nome=n;
       this.stadio=c;
       this.nascita=r;
       this.campionato=d;
       this.giocatori=gioc;

    }
    infoSquadra(){
        var ris='';
        for (var i=0; i<this.giocatori.length;i++){
            ris= ris +this.giocatori[i].cognome + ','}

     return 'Nome:'+ this.nome +' , Stadio:'+ this.stadio +' , Nascita:'+ this.nascita +' , Campionato:'+ this.campionato + ' , Lista giocatori: '+ ris + ''   }
    

 

 }