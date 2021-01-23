/**
Author: Don Bowers
Creation Date: April 8, 2019
Purpose: Houses code to move clouds across the top of the screen. Clouds should continuously scroll across the top of the screen.
Requires: /img, /css, /js - including jquery > 3.3.1
 Note: This file is not really meant to give you a hint on how to solve the ball problem. The clouds are different in that once they go off the right side of the screen they appear on the left side of the screen, giving a revolving effect. This is more complex than you need for the ball problem.
**/
/** Some of this cloud code sourced from http://jsfiddle.net/jfriend00/rnWa2/ **/
function moveClouds() {
    var $theCloud = $(".cloud");
    var $theCloud2 = $(".cloud2");
    var $theCloudWidth = $theCloud.width();
    var $theScreenWidth = $(window).width();

    var amount = $theScreenWidth - (parseInt($theCloud.css("left"), 10) || 0);
    var amount2 = $theScreenWidth - (parseInt($theCloud.css("left"), 50) || 0);
    if (amount <=0 ) {
        $theCloud.css("left", -$theCloudWidth);
        amount = $theScreenWidth + $theCloudWidth;
    }
    if (amount2 <=0 ) {
        $theCloud2.css("left", -$theCloudWidth);
        amount = $theScreenWidth + $theCloudWidth;
    }
    var moveRate = 15;   // pixels per second to move for cloud1
    var moveRate2 = 12;   // pixels per second to move for cloud2
    var time = amount * 1000 / moveRate;
    var time2 = amount * 1000 / moveRate2;
    $theCloud.stop(true)
        .animate({left: "+=" + amount}, time, "linear", function() {
            // when animation finishes, start over
            moveClouds(this);
        });
    $theCloud2.stop(true)
        .animate({left: "+=" + amount}, time2, "linear", function() {
            // when animation finishes, start over
            moveClouds(this);
        })
}