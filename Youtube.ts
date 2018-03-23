class Youtube{
    private videoName:string;
    private videoLength:number;
    private videoCategory:string;
    private numberOfViews:number;
    private uploadedBy:string;
    private offlineDownloadAvailability:boolean;
    private numberOflikes:number;
    private numberofDislikes:number;
    private publishDate:string;
    private commentsEnabled:boolean;
    private numberOfComments:number;
    private ageRestriction:boolean;
    private comments:string[];
    constructor(videoName:string,videoLength:number,videoCategory:string,numberOfViews:number,uploadedBy:string,offlineDownloadAvailability:boolean,numberOflikes:number,numberofDislikes:number,publishDate:string,ageRestriction:boolean,commentsEnabled:boolean,numberOfComments?:number){
        this.videoName=videoName;
        this.videoLength=videoLength;
        this.videoCategory=videoCategory;
        this.numberOfViews=numberOfViews;
        this.uploadedBy=uploadedBy;
        this.offlineDownloadAvailability=offlineDownloadAvailability;
        this.numberOflikes=numberOflikes;
        this.numberofDislikes=numberofDislikes;
        this.publishDate=publishDate;
        this.ageRestriction=ageRestriction;
        this.commentsEnabled=commentsEnabled;
        this.numberOfComments=numberOfComments;
    }
    public addComment=(comment:string):void=>{
        if(this.commentsEnabled)
        {
            this.comments.push(comment);
            this.numberOfComments+=1;
        }
        else
        {
            console.log("Comments are not enabled for this video");
        }
    }
    public editVideoName=(newName:string):void=>{
        this.videoName=newName;
    }
    public getName=():string=>{
        return this.videoName;
    }
    public getViews=():number=>{
        return this.numberOfViews;
    }
    public getLikes=():number=>{
        return this.numberOflikes;
    }
    public getDislikes=():number=>{
        return this.numberofDislikes;
    }
    public isOfflineAvailable=():void=>{
        if(this.offlineDownloadAvailability)
        {
            console.log(`${this.videoName} is available for offline view`);
        }
        else
        {
            console.log("Video uploader doesn't make this video available for offline view");
        }
    }
    public getUploadersName=():String=>{
        return this.uploadedBy;
    }
    public getCategory=():string=>{
        return this.videoCategory;
    }
    public addLike=():void=>{
        this.numberOflikes++;
    }
    public addDislike=():void=>{
        this.numberofDislikes++;
    }
    public getPublishDate=():string=>{
        return this.publishDate;
    }
    public getRelatedVideos=():any=>{
        console.log(`Method declared to get related videos of category ${this.videoCategory}`);
    }
    public isAgeRestricted=():boolean=>{
        return this.ageRestriction;
    }
}//End Class Declaration

let video1=new Youtube("High End",183,"music",23000000,"T-series",false,15000,900,"21-FEB-10",false,true,5000);
let video2=new Youtube("DeadPool 2 | The Trailer",159,"Film & Animation",12000000,"20th century fox",true,336000,4700,"22-MAR-10",false,true,2000);

console.log(`Old name: ${video1.getName()}`);
video1.editVideoName("High End | Diljit");
console.log(`Updated name: ${video1.getName()}`);
console.log(`Total likes ${video1.getLikes()}`);
video1.addLike();
video1.addLike();
console.log(`Total likes after adding likes ${video1.getLikes()}`);
video1.isOfflineAvailable();
console.log(`Video category ${video2.getCategory()}`);
console.log(`Video Published by ${video2.getUploadersName()}`);
video2.isOfflineAvailable();
video2.isAgeRestricted()?console.log("Age restricted video"):console.log("This video is not age restricted");