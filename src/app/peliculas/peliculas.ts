export class Peliculas{
    nombre : string;
    genero : string;
    duracion : string;
    pais : string;
    f_estreno : string;
    trailer : string;
    e_produccion : string;
    poster : string;
    id : number;
    

    public constructor (id:number,nombre:string,genero:string,duracion : string,pais : string,f_estreno : string,trailer :string,e_produccion : string,poster : string){
        
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
        this.pais = pais;
        this.f_estreno = f_estreno;
        this.trailer = trailer;
        this.e_produccion = e_produccion;
        this.poster = poster;
        this.id = id;



    }
}