/*In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.

La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore
porte
carburante

Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()

BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile".
 La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e
  ne aggiunge alcuni specifici per le automobili.

Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.*/

// creo una classe veicolo

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;
    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }
    //metodo per ottenere informazioni
    getInformation() {
        return `${marca}, ${anno}, ${colore}, ${porte}, ${carburante}`
    }
    //metodo per ottenere l'età
    getcalculateage(){
        return 2024 - this.anno;
    }

}
//informazioni sul veicolo
const veicolo = new Veicolo('Fiat', 2019, 'blue')
//stampare le informazioni in console
console.log(veicolo);
const eta = veicolo.getcalculateage()
console.log('questo veicolo ha:', eta, 'anni');


