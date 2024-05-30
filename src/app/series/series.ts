export class Series{
    nombre : string;
    genero : string;
    duracion : string;
    pais : string;
    f_estreno : number;
    trailer : URL;
    e_produccion : URL;
    poster : File| null | undefined;
    director : string;
    protagonistas : string;
    idSeries : number;


    public constructor (idSeries:number,nombre:string,genero:string,duracion : string,pais : string,f_estreno : number,trailer : URL,e_produccion : URL,poster : File,director : string,protagonistas : string){
        
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
        this.pais = pais;
        this.f_estreno = f_estreno;
        this.trailer = trailer;
        this.e_produccion = e_produccion;
        this.poster = poster;
        this.director = director;
        this.protagonistas = protagonistas;
        this.idSeries = idSeries;



    }
}