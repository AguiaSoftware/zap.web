$(function () {

    centraliza($('.mapa'), 200);
    centraliza($('.dialog-contato'), -200);
    
    eventosMouseEstadosMapa();
    
    $.get('http://www.telize.com/geoip', function(json){
    	selectEstadoMapa(json.region);
    });

    function eventosMouseEstadosMapa() {
        $('.estado').mouseover(function () {
        	var e = $(this);
        	
        	if(e.attr('selecionado') == 'sim') return;
        	
            var original = e.children().attr('fill');

//            e.children().attr('fill', 'url(#redGradient)').attr('old-fill', original);
        });

        $('.estado').mouseleave(function () {
        	var e = $(this);
        	
        	if(e.attr('selecionado') == 'sim') return;
        	
            var original = e.children().attr('old-fill');

            e.children().attr('fill', original);
        });

        $('.estado').poshytip({
            className: 'tip-twitter',
            //followCursor: true,
            //slide: false
        });
    }

    function getDimension(e) {
        return {
            width: e.width(),
            height: e.height()
        };
    }
    
    function NowDate(){
    	var date = new Date();
    	var d = date.getDate();
    	var m = date.getMonth() + 1;
    	var y = date.getFullYear();
    	
    	if(d < 10) d = '0' + d;
    	if(m < 10) m = '0' + m;
    	
    	return d + '/' + m + '/' + y; 
    }
    
    function NowHours(){
    	var date = new Date();
    	var h = date.getHours();
    	var m = date.getMinutes();
    	
    	if(h < 10) h = '0' + d;
    	if(m < 10) m = '0' + m;
    	
    	return h + ':' + m 
    }

    function centraliza(e, offset) {
        var dw = getDimension($(window));
        var dl = getDimension(e);

        e.css('left', (dw.width - dl.width - offset) / 2);
    }
    
    
    //limpa campo formulario 
   $(".fechar").click(function () {
       $(".content-mensagem-error").hide(300);
       $("#ligaremos-nome").removeClass('error-input');
       $("#ligaremos-telefone").removeClass('error-input');
       $("#ligaremos-data").removeClass('error-input');
       $("#ligaremos-hora").removeClass('error-input');
       $("#ligaremos-nome").val('');
       $("#ligaremos-telefone").val('');
       $("#ligaremos-data").val(NowDate());
       $("#ligaremos-hora").val(NowHours());
       $("#ligaremos-assunto").val('');
              
       $(".content-mensagem-error").hide(300);
       $("#orcamento-nome").removeClass('error-input');
       $("#orcamento-telefone").removeClass('error-input');
       $("#orcamento-email").removeClass('error-input');
       $("#orcamento-nome").val('');
       $("#orcamento-telefone").val('');
       $("#orcamento-email").val('');
       $("#orcamento-praga-alvo").val('');
       $("#orcamento-descricao").val('');
   });
    
    //validação do formulario de te ligaremos
     $("#ligaremos-nome").keyup(function () {
         if($(this).val().length > 0){
             $(".content-mensagem-error").hide(300);
         }  
     });
     $("#ligaremos-telefone").keyup(function () {
         if($(this).val().length > 0){
             $(".content-mensagem-error").hide(300);
         }  
     });
     $("#ligaremos-data").keyup(function () {
         if($(this).val().length > 0){
             $(".content-mensagem-error").hide(300);
         }  
     });
     
     if($("#ligaremos-hora").val() != '0'){
           $(".content-mensagem-error").hide(300);
     }
     
     
     
    //validação do formulario de te ligaremos
     $("#orcamento-nome").keyup(function () {
         if($(this).val().length > 0){
             $(".content-mensagem-error").hide(300);
         }  
     });
     $("#orcamento-telefone").keyup(function () {
         if($(this).val().length > 0){
             $(".content-mensagem-error").hide(300);
         }  
     });
     $("#orcamento-email").keyup(function () {
         if($(this).val().length > 0){
             $(".content-mensagem-error").hide(300);
         }  
     });
     
     
     
    $(".ligaremos").click(function () {
       
        if ($("#ligaremos-nome").val().length == 0) {
            $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong> nome </strong> é obrigatório!');
            $("#ligaremos-nome").addClass('error-input');
            $("#ligaremos-telefone").removeClass('error-input');
            $("#ligaremos-data").removeClass('error-input');
            $("#ligaremos-hora").removeClass('error-input');

        } else if ($("#ligaremos-telefone").val().length == 0) {
            $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong> telefone </strong> é obrigatório!');
            $("#ligaremos-telefone").addClass('error-input');
            $("#ligaremos-nome").removeClass('error-input');
            $("#ligaremos-data").removeClass('error-input');
            $("#ligaremos-hora").removeClass('error-input');

        } else if ($("#ligaremos-data").val().length == 0) {
            $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong> data </strong> é obrigatório!');
            $("#ligaremos-data").addClass('error-input');
            $("#ligaremos-nome").removeClass('error-input');
            $("#ligaremos-telefone").removeClass('error-input');
            $("#ligaremos-hora").removeClass('error-input');

        } else if ($("#ligaremos-hora").val().length == 0) {
            $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong>Entre que horas posso te ligar?</strong> é obrigatório!');
            $("#ligaremos-hora").addClass('error-input');
            $("#ligaremos-data").removeClass('error-input');
            $("#ligaremos-nome").removeClass('error-input');
            $("#ligaremos-telefone").removeClass('error-input');

        } else {
            $("#ligaremos-nome").removeClass('error-input');
            $("#ligaremos-telefone").removeClass('error-input');
            $("#ligaremos-data").removeClass('error-input');
            
            $.get('../meligue', {
            	nome: $("#ligaremos-nome").val(),
            	telefone: $("#ligaremos-telefone").val(),
            	data: $("#ligaremos-data").val(),
            	hora: $("#ligaremos-hora").val(),
            	assunto: $("#ligaremos-assunto").val()            	
            });
            
            toastr.success('Em breve estaremos entrando em contato.', 'Muito bom ' +$("#ligaremos-nome").val() +  '!', {
            	"positionClass": "toast-bottom-right",
            });
            
            $('.modal').modal('hide')
            
        }
    });

    $(".orcamento").click(function () {
        if ($("#orcamento-nome").val().length == 0) {
            $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong> nome </strong> é obrigatório!');
            $("#orcamento-nome").addClass('error-input');
            $("#orcamento-telefone").removeClass('error-input');
            $("#orcamento-email").removeClass('error-input');

        } else if ($("#orcamento-email").val().length == 0) {
           $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong> Email </strong> é obrigatório!');
            $("#orcamento-email").addClass('error-input');
            $("#orcamento-nome").removeClass('error-input');
            $("#orcamento-telefone").removeClass('error-input');

        } else if ($("#orcamento-telefone").val().length == 0) {
            $(".content-mensagem-error").show(300);
            $(".mensagem-error").html('O campo <strong> Telefone </strong> é obrigatório!');
            $("#orcamento-telefone").addClass('error-input');
            $("#orcamento-nome").removeClass('error-input');
            $("#orcamento-email").removeClass('error-input');

        } else {

            $("#orcamento-nome").removeClass('error-input');
            $("#orcamento-telefone").removeClass('error-input');
            $("#orcamento-email").removeClass('error-input');
            
            $.get('../orcamento', {
            	nome: $("#orcamento-nome").val(),
            	telefone: $("#orcamento-telefone").val(),
            	email: $("#orcamento-email").val(),
            	pragaAlvo: $('#orcamento-praga-alvo').val(),
            	descricao: $("#orcamento-descricao").val()            	
            });
            
            toastr.success('Em breve estaremos entrando em contato.', 'Muito bom ' + $("#orcamento-nome").val() +  '!', {
            	"positionClass": "toast-bottom-right",
            });
            $('.modal').modal('hide');
        }
    });
    
    $('.fone').mask("(99) 9999-9999?9");
    $(".data").mask("99/99/9999");
    $(".hora").mask("99:99");
    
    $('.data').val(NowDate());
    $('.hora').val(NowHours());
    
});
