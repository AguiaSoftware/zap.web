<?php

	require(__DIR__ . "/class.phpmailer.php"); 
	
	class Email{
		
		public $de;
		public $para;
		public $nome;
		public $assunto;
		public $conteudo;
				
		public function enviar($para = array()){
			if(count($para) == 0) $para = $this->para;
			
			$mail = new PHPMailer();
			
			$mail->IsSMTP();
			$mail->Host = "a2plcpnl0171.prod.iad2.secureserver.net";
			$mail->SMTPSecure = 'ssl';
			$mail->SMTPAuth = true;
			$mail->Port = 465;
			$mail->Username = 'contato@zappragas.com.br';
			$mail->Password = 'contatozap';
			
			$mail->From = $this->de;
			$mail->Sender = $this->de;
			$mail->FromName = $this->nome;
			
			foreach ($para as $p){
				$mail->AddAddress($p);
			}
			
			$mail->IsHTML(true);
			
			$mail->Subject  = $this->assunto;
			$mail->Body = $this->conteudo;
			
			@$mail->Send();
			
			$mail->ClearAllRecipients();
			$mail->ClearAttachments();
		}
		
	}
?>