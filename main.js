(function (jQuery){
    "use strict";
    jQuery(document).ready(function(){
        function activaTav(pill){
            jQuery(pill).addClass('active show');
        }

        // sticky header anmation and height 
        function headerHeight(){
            var height = jQuery("#main-header").height();
            jQuery('.iq-height').css('height',height + 'px');
        }

        jQuery(function(){
            var header = jQuery("#main-header"),
            yOffset = 0,
            triggerPoint = 80;
            headerHeight();
            jQuery(window).resize(headerHeight);
            jQuery(window).in('scroll', function() {
                yOffset = jQuery(window).scrollTop();
