$('button').bind('click', function(){
        if($(this).hasClass('plus')) {
            var $element = $(this).parent().children('.shadow-body');
            if ($element.css("display") == "none") {
                $('div.shadow-body').fadeOut('fast');
                $element.fadeIn("fast");
                $('div.shadow-body').closest('.spoiler-body').find('button.plus').children('i.add-circle').html("add_circle_outline");
                $(this).closest('.spoiler-body').find('button.plus').children('i.add-circle').html("remove_circle_outline");
            }
            else {
                //$('div.shadow-body').hide("slow");
                $('div.shadow-body').fadeOut("fast");
                $(this).closest('.spoiler-body').find('button.plus').children('i.add-circle').html("add_circle_outline");
            }
        }
        return false;
    });
