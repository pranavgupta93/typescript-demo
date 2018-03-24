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
    constructor(name:string,homeTown:string,currentLocation:string,dob:Date,relationshipStatus:string,college:string,numberOfFollowers:number,work?:string,designation?:string){
        this.name=name;
        this.homeTown=homeTown;
        this.currentLocation=currentLocation;
        this.dob=dob;
        this.relationshipStatus=relationshipStatus;
        this.college=college;
        this.numberOfFollowers=numberOfFollowers;
        this.work=work;
        this.designation=designation;
    }
    public getName=():string=>{
        return this.name;
    }
    public editName=(newName:string):void=>{
        this.name=newName;
    }
    public addFollower=():void=>{
        this.numberOfFollowers++;
    }
    public getFollowerCount=():number=>{
        return this.numberOfFollowers;
    }
    public getHomeTown=():string=>{
        return this.homeTown;
    }
    public getCurrentLocation=():string=>{
        return this.currentLocation;
    }
    public editCurrentLocation=(newLocation:string):void=>{
        this.currentLocation=newLocation;
    }
    public getRelationshipStatus=():string=>{
        return this.relationshipStatus;
    }
    public getCollegeName=():string=>{
        return this.college;
    }
    public getWorkPlaceName=():string=>{
        return this.work;
    }
    public editWorkPlaceName=(newWorkPlace:string):void=>{
        this.work=newWorkPlace;
    }
    public getDesignation=():string=>{
        return this.designation;
    }
    public editDesignation=(newDesignation:string):void=>{
        this.designation=newDesignation;
    }
    public getDOB=():Date=>{
        return this.dob;
    }
    public getAge=():number=>{
        let today=new Date();
        let age:number=today.getFullYear()-this.dob.getFullYear();
        return age;
    }
}// end class

let profile1=new SocialProfile("Pranav","chamba","Pune",new Date("1993-07-25"),"single","Chitkara",44,"XYZ solutions","Software Engineer");
let profile2=new SocialProfile("Pranav Gupta","chamba","Chandigarh",new Date("1993-07-25"),"single","Chitkara",44);

console.log(profile1.getName());
console.log(profile1.getFollowerCount());
profile1.addFollower();
console.log(profile1.getFollowerCount());
console.log(profile1.getWorkPlaceName());
profile1.editWorkPlaceName("New company");
console.log(profile1.getWorkPlaceName());
console.log(profile2.getHomeTown());
console.log(profile2.getCurrentLocation());
console.log(profile2.getDOB());
console.log(profile2.getAge());