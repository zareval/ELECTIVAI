export class Actores{
    nombre : string;
    nacionalidad : string;
    f_nacimiento : string;
    biografia : string;
    idActor : number;


    public constructor (idActor:number,nombre:string,biografia:string,nacionalidad : string,f_nacimiento : string){
        
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.f_nacimiento = f_nacimiento;
        this.biografia = biografia;
        this.idActor = idActor;


    }
}