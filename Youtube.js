var Youtube = /** @class */ (function () {
    function Youtube(videoName, videoLength, videoCategory, numberOfViews, uploadedBy, offlineDownloadAvailability, numberOflikes, numberofDislikes, publishDate, ageRestriction, commentsEnabled, numberOfComments) {
        var _this = this;
        this.addComment = function (comment) {
            if (_this.commentsEnabled) {
                _this.comments.push(comment);
                _this.numberOfComments += 1;
            }
            else {
                console.log("Comments are not enabled for this video");
            }
        };
        this.editVideoName = function (newName) {
            _this.videoName = newName;
        };
        this.getName = function () {
            return _this.videoName;
        };
        this.getViews = function () {
            return _this.numberOfViews;
        };
        this.getLikes = function () {
            return _this.numberOflikes;
        };
        this.getDislikes = function () {
            return _this.numberofDislikes;
        };
        this.isOfflineAvailable = function () {
            if (_this.offlineDownloadAvailability) {
                console.log(_this.videoName + " is available for offline view");
            }
            else {
                console.log("Video uploader doesn't make this video available for offline view");
            }
        };
        this.getUploadersName = function () {
            return _this.uploadedBy;
        };
        this.getCategory = function () {
            return _this.videoCategory;
        };
        this.addLike = function () {
            _this.numberOflikes++;
        };
        this.addDislike = function () {
            _this.numberofDislikes++;
        };
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        this.getRelatedVideos = function () {
            console.log("Method declared to get related videos of category " + _this.videoCategory);
        };
        this.isAgeRestricted = function () {
            return _this.ageRestriction;
        };
        this.videoName = videoName;
        this.videoLength = videoLength;
        this.videoCategory = videoCategory;
        this.numberOfViews = numberOfViews;
        this.uploadedBy = uploadedBy;
        this.offlineDownloadAvailability = offlineDownloadAvailability;
        this.numberOflikes = numberOflikes;
        this.numberofDislikes = numberofDislikes;
        this.publishDate = publishDate;
        this.ageRestriction = ageRestriction;
        this.commentsEnabled = commentsEnabled;
        this.numberOfComments = numberOfComments;
    }
    return Youtube;
}()); //End Class Declaration
var video1 = new Youtube("High End", 183, "music", 23000000, "T-series", false, 15000, 900, "21-FEB-10", false, true, 5000);
var video2 = new Youtube("DeadPool 2 | The Trailer", 159, "Film & Animation", 12000000, "20th century fox", true, 336000, 4700, "22-MAR-10", false, true, 2000);
console.log("Old name: " + video1.getName());
video1.editVideoName("High End | Diljit");
console.log("Updated name: " + video1.getName());
console.log("Total likes " + video1.getLikes());
video1.addLike();
video1.addLike();
console.log("Total likes after adding likes " + video1.getLikes());
video1.isOfflineAvailable();
console.log("Video category " + video2.getCategory());
console.log("Video Published by " + video2.getUploadersName());
video2.isOfflineAvailable();
video2.isAgeRestricted() ? console.log("Age restricted video") : console.log("This video is not age restricted");
