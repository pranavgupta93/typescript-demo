var SocialProfile = /** @class */ (function () {
    function SocialProfile(name, homeTown, currentLocation, dob, relationshipStatus, college, numberOfFollowers, work, designation) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.editName = function (newName) {
            _this.name = newName;
        };
        this.addFollower = function () {
            _this.numberOfFollowers++;
        };
        this.getFollowerCount = function () {
            return _this.numberOfFollowers;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.getCurrentLocation = function () {
            return _this.currentLocation;
        };
        this.editCurrentLocation = function (newLocation) {
            _this.currentLocation = newLocation;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getCollegeName = function () {
            return _this.college;
        };
        this.getWorkPlaceName = function () {
            return _this.work;
        };
        this.editWorkPlaceName = function (newWorkPlace) {
            _this.work = newWorkPlace;
        };
        this.getDesignation = function () {
            return _this.designation;
        };
        this.editDesignation = function (newDesignation) {
            _this.designation = newDesignation;
        };
        this.getDOB = function () {
            return _this.dob;
        };
        this.getAge = function () {
            var today = new Date();
            var age = today.getFullYear() - _this.dob.getFullYear();
            return age;
        };
        this.name = name;
        this.homeTown = homeTown;
        this.currentLocation = currentLocation;
        this.dob = dob;
        this.relationshipStatus = relationshipStatus;
        this.college = college;
        this.numberOfFollowers = numberOfFollowers;
        this.work = work;
        this.designation = designation;
    }
    return SocialProfile;
}()); // end class
var profile1 = new SocialProfile("Pranav", "chamba", "Pune", new Date("1993-07-25"), "single", "Chitkara", 44, "XYZ solutions", "Software Engineer");
var profile2 = new SocialProfile("Pranav Gupta", "chamba", "Chandigarh", new Date("1993-07-25"), "single", "Chitkara", 44);
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
