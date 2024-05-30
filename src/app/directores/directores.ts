export class Directores{
    nombre : string;
    nacionalidad : string;
    f_nacimiento : string;
    biografia : string;
    idDirector : number;


    public constructor (idDirector:number,nombre:string,biografia:string,nacionalidad : string,f_nacimiento : string){
        
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.f_nacimiento = f_nacimiento;
        this.biografia = biografia;
        this.idDirector = idDirector;


    }
}