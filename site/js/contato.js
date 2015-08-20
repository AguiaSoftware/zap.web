(function(exports){

	var estadoContatos = [
	      {
	    	  id: 1,
	    	  estado: 'Estado de Goiás - Goiânia',
	    	  nome: 'Silvia Goveia',
	    	  email: 'zap@zappragas.com.br',
	    	  telefone: '(62) 3954-9511 / (62) 8406-9510',
	    	  endereco: 'Av T-02 Qd. 12 Lt. 03 - St. Bueno Goiânia - Goias'
	      },
	      
	      {
	    	  id: 2,
	    	  estado: 'Distrito Federal',
	    	  nome: 'Sonia Oliveira',
	    	  email: 'zap@zappragas.com.br',
	    	  telefone: '(61) 4042-3282 / (61) 8475-4407',
	    	  endereco: 'Qs5, Rua 320 Casa 13 - Águas Claras - Taguatinga - DF'
	      },
	      
	      {
	    	  id: 3,
	    	  estado: 'São Paulo - Ribeirão Preto',
	    	  nome: 'Eduardo Yamamoto',
	    	  email: 'zap@zappragas.com.br',
	    	  telefone: '(16) 4042-0282 / (16) 98801-006',
	    	  endereco: 'Rua Uruguaiana N. 80 - Santa Cruz - Ribeirão Preto'
	      },
	      
	      {
	    	  id: 4,
	    	  estado: 'Minas Gerias - Uberlândia',
	    	  nome: 'Cynthia Velozo',
	    	  email: 'zap@zappragas.com.br',
	    	  telefone: '(34) 3229-0126 / (34) 8859-3683',
	    	  endereco: 'Av. Anselmo Alves dos Santos, 1100, Unidade 2, Bairro Santo Mônica'
	      },
	      
	      {
	    	  id: 5,
	    	  estado: 'Piauí - Teresina',
	    	  nome: 'Anderley Belchior',
	    	  email: 'zap@zappragas.com.br',
	    	  telefone: '(86) 3011-6623 / (86) 8809-8678',
	    	  endereco: 'Av. João XXII N. 2.496 SL 108 - Bairro São João'
	      },
	      
	      {
	    	  id: 6,
	    	  estado: 'São Paulo - Campinas',
	    	  nome: 'Zap Pragas',
	    	  email: 'zap@zappragas.com.br',
	    	  telefone: '(19) 4042-0181 / (19) 98715-0440 / Whatsapp(61) 8205-2188',
	    	  endereco: 'Rua Carolina Prado Penteado, 226, Nova Campinas - Cep:  13.092-470 - Campinas - SP'
	      }
	];

	var estadoAtendimento = {
		'acre' : [1],
		'alagoas' : [5],
		'amapa' : [1],
		'amazonas' : [1],
		'bahia' : [2],
		'ceara' : [5],
		'distrito-federal' : [2],
		'espirito-santo' : [3, 6],
		'goias' : [1],
		'maranhao' : [5],
		'mato-grosso' : [1],
		'mato-grosso-sul' : [3, 6],
		'minas-gerais' : [4],
		'para' : [5],
		'paraiba' : [5],
		'parana' : [3, 6],
		'pernambuco' : [5],
		'piaui' : [5],
		'rio-janeiro' : [3, 6],
		'rio-grande-norte' : [5],
		'rio-grande-sul' : [3, 6],
		'rondonia' : [1],
		'roraima' : [1],
		'santa-catarina' : [3, 6],
		'sao-paulo' : [3, 6],
		'sergipe' : [5],
		'tocantins' : [1, 5],
	};
	
	exports.getAtendentesEstado = function(estado){
		var atendentes = estadoAtendimento[estado];
		var arr = [];
		
		for(var i in atendentes){
			arr.push(getAtendente(atendentes[i]));
		}
		
		return arr;
	}
	
	function getAtendente(id){
		for(var i in estadoContatos){
			if(estadoContatos[i].id == id){
				return estadoContatos[i];
			} 
		}
	}
	
})(window);