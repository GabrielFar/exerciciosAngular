import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../interfaces/usuario";
import { ServiceService } from "../services/service.service";

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

    usuárioServer: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }    
    
    constructor (private serviceService: ServiceService, private router: Router) {}
    
    public login(){
        this.msn = undefined
        this.isSpinnerOn = true
        
        this.serviceService.getUsuario().subscribe((usu) => (this.usuárioServer = usu[0]))
                
        setTimeout(() => {
            if(this.usuario.password == this.usuárioServer.password && this.usuario.userId == this.usuárioServer.userId && this.isBloqueado == false){
                this.msn = "Logado!"
                this.contaTentativasSenha = 0
                this.classe = ["clCentralizar", "clSuccess"]
                localStorage['token'] = "true"                  
                this.router.navigate(['/']);
    
            } else if (this.contaTentativasSenha >= 3) {
                this.msn = "Usuário Bloqueado!"
                this.classe = ["clCentralizar", "clDanger"]
                this.isBloqueado = true
    
            } else if(this.usuario.userId !== this.usuárioServer.userId){
                this.msn = "Acesso negado, usuário incorreto"
                this.classe = ["clCentralizar", "clDanger"]
                this.contaTentativasSenha++
    
            } else if(this.usuario.password !== this.usuárioServer.password){
                this.msn = "Acesso negado, senha incorreta"
                this.classe = ["clCentralizar", "clDanger"]
                this.contaTentativasSenha++
    
            }
        }, 1000);
    }
}