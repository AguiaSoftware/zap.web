$(function(){
	
	var zopim = null;
	
    function init(){
    	zopim = $($('.zopim')[0]);
    	zopim.find('iframe').contents().find('.jx_ui_Widget').first().hide();
    	zopim.hide();
    	
    	events();
    	fixTextArea();
    }
    
    function wait(){
    	var handler = setInterval(function(){
        	if($('.zopim').length > 1){
        		clearInterval(handler);
        		init();
        	} 
        }, 100);
    }
    
    function events(){
    	$('.sac-online').click(function(){
    		var zopim = $($('.zopim')[0]);
    		
    		if(zopim.attr('display') == 'none'){
    			zopim.show();
    		}
    		
        	zopim.find('iframe').contents().find('.jx_ui_Widget').show().click();
        });
    }
    
    function fixTextArea(){
    	setTimeout(function(){
    		zopim.find('iframe').contents().find('textarea').attr('placeholder', 'Digite uma mensagem');
    	}, 2000);    	
    }
    
    wait();
});
    