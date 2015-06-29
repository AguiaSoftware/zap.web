<?php

	require '../lib/mailer/email.php';
	require '../lib/template/template.php';
	
	//dados do usuario
	$dados = (object)$_GET;
	
	//template do email
	$template = new Template( file_get_contents(__DIR__ . '/orcamento.html') );
	
	//dados da empresa
	$template->inject('#SITE#', 'http://www.zappragas.com.br');
	$template->inject('#DATA#', date('d/m/Y'));
	
	//injeta dados do usuario no email
	$template->inject('#NOME#', $dados->nome);
	$template->inject('#EMAIL#', $dados->email);
	$template->inject('#TELEFONE#', $dados->telefone);
	$template->inject('#PRAGA_ALVO#', $dados->pragaAlvo);
	$template->inject('#DESCRICAO#', $dados->descricao);
	
	//injeta dados da empresa no email
	$template->inject('#EMAIL_EMPRESA#', '');
	$template->inject('#TELEFONE_EMPRESA#', '');
	
	//envia o email
	$email = new Email();
	
	$email->de = 'contato@zappragas.com.br';
	$email->nome = 'ZapContato';
	
	$email->assunto  = 'ORCAMENTO - Site';
	$email->conteudo = $template->render();
	
	$email->enviar(array(
		'zap@zappragas.com.br'
	));
	
	$email->enviar(array($dados->email));