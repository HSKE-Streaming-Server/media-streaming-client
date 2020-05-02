export class Source{

    public id:string;
    public name:string;
    public image:string;
	public type:string;
    public description:string;
    
    constructor(id:string, name:string, image:string, type:string, description:string){
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
        this.description = description;
    }

}