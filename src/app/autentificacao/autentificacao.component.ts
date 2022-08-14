import { Component } from "@angular/core";

@Component({
    selector: 'app-autentificacao', 
    templateUrl: './autentificacao.component.html', 
    styleUrls: ['./autentificacao.component.css']
})

export class AutentificacaoComponent{
    email: string = "";
    senha: string = "";
    msn: string = "";
    contaTentativasSenha: number = 0
    msnStyle: string = "d-flex justify-content-center"
    isBloqueado: boolean = false;

    public login(){
        
        if(this.senha == "Trocar@123" && this.email == "XPTO-21" && this.isBloqueado == false){
            this.msn = "Logado!"
            this.contaTentativasSenha = 0
            this.msnStyle = "d-flex justify-content-center text-success"

        } else if (this.contaTentativasSenha >= 3) {
            this.msn = "Usuário Bloqueado!"
            this.msnStyle = "d-flex justify-content-center text-danger"
            this.isBloqueado = true

        } else if(this.email !== "XPTO-21"){
            this.msn = "Acesso negado, usuário incorreto"
            this.msnStyle = "d-flex justify-content-center text-danger"
            this.contaTentativasSenha++

        } else if(this.senha !== "Trocar@123"){
            this.msn = "Acesso negado, senha incorreta"
            this.msnStyle = "d-flex justify-content-center text-danger"
            this.contaTentativasSenha++

        }
        console.log(this.contaTentativasSenha);
    }
}