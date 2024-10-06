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