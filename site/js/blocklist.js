$(function(){
	
	$('.estado').click(function(){
		selectEstado($(this).attr('id'));
	});
	
	$('.blocklist-container').slimScroll({
	    height: '230px'
	});
	
});

var estadoSelecionado = null;

function selectEstadoMapa(estado){
	var estados = {
		'Acre': 'acre',
		'Alagoas': 'alagoas',
		'Amapa': 'amapa',
		'Amazonas': 'amazonas',
		'Bahia': 'bahia',
		'Ceara': 'ceara',
		'Distrito Federal': 'distrito-federal',
		'Espirito Santo': 'espirito-santo',
		'Goias': 'goias',
		'Maranhao': 'maranhao',
		'Mato Grosso': 'mato-grosso',
		'Mato Grosso do Sul': 'mato-grosso-do-sul',
		'Minas Gerais': 'minas-gerais',
		'Para': 'para',
		'Paraiba': 'paraiba',
		'Parana': 'parana',
		'Pernambuco': 'pernambuco',
		'Piaui': 'piaui',
		'Rio de Janeiro': 'rio-janeiro',
		'Rio Grande do Norte': 'rio-grande-norte',
		'Rio Grande do Sul': 'rio-grande-sul',
		'Rondonia': 'rondonia',
		'Roraima': 'roraima',
		'Santa Catarina': 'santa-catarina',
		'Sao Paulo': 'sao-paulo',
		'Sergipe': 'sergipe',
		'Tocantins': 'tocantins',
	}
	
	var sel = estados[estado] || 'goias';
	
	selectEstado(sel);
}

function selectEstado(estado){
	var atendentes = getAtendentesEstado(estado);

	if(estadoSelecionado != null){
//		estadoSelecionado.children().attr('fill', '#5e5e5e');
		estadoSelecionado.attr('selecionado', 'nao');
	}
	
	estadoSelecionado = $('#' + estado);
//	estadoSelecionado.children().attr('fill', 'url(#blackGradient)')
	estadoSelecionado.attr('selecionado', 'sim');
	
	var currentBlock = $('.blocklist-current');
	var tmpl = $('#tpl-contato').html();
	var newblocks = [];
	
	for(var i in atendentes){
		var n = $('<div class="blocklist-item blocklist-new"></div>');
		n.html(tpl(atendentes[i], tmpl));
		
		newblocks.push(n);
		
		$('.blocklist-container').append(n);
	}
	
	setTimeout(function(){
		for(var i in newblocks){
			newblocks[i].css('transform', 'translate(0px)').removeClass('blocklist-new');
		}
		
		currentBlock.css('transform', 'translate(400px)').removeClass('blocklist-current').addClass('blocklist-main').css('position', 'absolute');
		
		for(var i in newblocks){
			newblocks[i].addClass('blocklist-current');;
		}
		
	}, 100);
}

function tpl(data, tpl){
	var pattern = /\@\{[^\}]+\}/g;

    var h = tpl.replace(pattern, function (k) {
        var key = k.slice(2, -1);
        var s = '';

        if (key.charAt(0) == '=') {
            s = eval(key.substring(1));
        } else if (key.indexOf('.') > 0) {
            try {
                s = eval('data.' + key);
            } catch (e) {
                (function () {
                    s = eval(key);
                }).call(data);
                
            }
            
        } else {
            s = data[key] || ''
        }


        return s;
    });

    return h;
}