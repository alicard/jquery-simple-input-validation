(function ( $ ) {
    $.fn.simpleInput = function( options ) {

    // This is the easiest way to have default options.
    var defaults = {
        default: true,
        capitalizeAll: false,
        title: false,
    }

    var settings = $.extend({}, defaults, options);
    
    if(settings.default){
        $(this).on('change', function(){
        var val = $(this).val();
        val = val.
            replace (/(^\s*)|(\s*$)/gi, "").
            replace (/[ ]{2,}/gi," ").
            replace (/\n +/,"\n");
            
        val = val.substr(0,1).toUpperCase()+val.substr(1);

        $(this).val(val);
        });
        $(this).on('keypress', function(){
        var val = $(this).val();

        val = val.substr(0,1).toUpperCase()+val.substr(1);

        $(this).val(val);
        });
    }

    if(settings.capitalizeAll){
        $(this).on('keypress', function(e){
        var val = $(this).val();
        val = val.replace(/\w+/g, function(txt) {
            // uppercase first letter and add rest unchanged
            return txt.charAt(0).toUpperCase() + txt.substr(1);
        });// remove any spaces
        
        $(this).val(val);
        });
    }

    if(settings.title){
        $(this).on('keypress', function(e) {
        var val = $(this).val();
        var regex = new RegExp("^[a-zA-Z ]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else{
            return false;
        }

        val = val.replace(/\w+/g, function(txt) {
            // uppercase first letter and add rest unchanged
            return txt.charAt(0).toUpperCase() + txt.substr(1);
        });

        $(this).val(val);
        
        e.preventDefault();
        });
    }

    };
}( jQuery ));
