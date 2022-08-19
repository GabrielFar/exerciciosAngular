import { Component } from "@angular/core";
import { Usuario } from "../interfaces/usuario";

@Component({
    selector: 'app-autentificacao', 
    templateUrl: './autentificacao.component.html', 
    styleUrls: ['./autentificacao.component.css']
})

export class AutentificacaoComponent{
    msn?: string
    contaTentativasSenha: number = 0
    classe: string[] = [];
    isBloqueado: boolean = false;
    isSpinnerOn: boolean = false;

    usuario: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }

    public login(){
        this.msn = undefined
        this.isSpinnerOn = true

        setTimeout(() => {
            if(this.usuario.password == "Trocar@123" && this.usuario.userId == "XPTO-21" && this.isBloqueado == false){
                this.msn = "Logado!"
                this.contaTentativasSenha = 0
                this.classe = ["clCentralizar", "clSuccess"]
    
            } else if (this.contaTentativasSenha >= 3) {
                this.msn = "Usuário Bloqueado!"
                this.classe = ["clCentralizar", "clDanger"]
                this.isBloqueado = true
    
            } else if(this.usuario.userId !== "XPTO-21"){
                this.msn = "Acesso negado, usuário incorreto"
                this.classe = ["clCentralizar", "clDanger"]
                this.contaTentativasSenha++
    
            } else if(this.usuario.password !== "Trocar@123"){
                this.msn = "Acesso negado, senha incorreta"
                this.classe = ["clCentralizar", "clDanger"]
                this.contaTentativasSenha++
    
            }
        }, 1000);
    }
}