class SocialProfile{
    private name:string;
    private homeTown:string;
    private currentLocation:string;
    private college:string;
    private work:string;
    private designation:string;
    private relationshipStatus:string;
    private dob:Date;
    private numberOfFollowers:number;
    constructor(name:string,homeTown:string,currentLocation:string,dob:Date,relationshipStatus:string,college:string,work?:string,designation?:string){
        this.name=name;
    }
}// end class