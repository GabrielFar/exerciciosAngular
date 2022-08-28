# Anotações Angular


## Aula1


- Instalação/inicialização de um novo projeto angular:

~~~
    npm install -g @angular/cli

    ng new nomeProjeto

    ng serve --open 
~~~

- Todo o desenvolvimento de ser criado na pasta src/app

### Angular expression:

~~~
    <h1>{{ nomeQualquer }}</h1>
~~~

### One way Data Binding:

- São colocados entre colchetes as propriedades a serem passadas para o component.ts

~~~
    <img [src]="url" [alt]="alt">
~~~

### One way Event Binding:

- São colocados entre parênteses as funções a serem chamadas no component.ts

~~~
    <button (click)="cliqueBotao()">Clique Aqui!</button>
~~~

## Aula 2

### Two Way Data Binding:

- Deve-se primeiro adicionar a classe "FormsModules" ao app.modules.ts e fazer o import no ts do módulo necessitado

~~~
    import { FormsModule } from '@angular/forms';

    &
+
  imports: [
    BrowserModule, 
    FormsModule  <-------------------
  ],
~~~

- Após isso pode-se adicionar a diretiva ngModel em qualquer campo, e a variável apontada por ela terá seu valor atualizado a cada alteração

~~~
    <div>
      <input type="text"  [(ngModel)]="cidade">
    </div>
~~~

### CSS e bootstrap

- CSS pode ser declarado em 3 locais: 
    - Folha de estilos apontada em angular.json (global)
    - Folha de estilos do componente (recomendado)
    - Annotation Styles (evitar)

- Para adicionar bootstap digitar no cmd do raiz do projeto e após fechar e reabrir pastas e aplicação:

~~~
    npm i bootstrap
~~~

### Criar novo componente

- Para adicionar um novo componente, digitar no cmd do raiz do projeto:

~~~
    ng g c pasta/nomeComponente
~~~

- Para adicionar novo componente, adcionar a TAG do componente
    - Exemplo:

    ~~~
        <app-exemplo></app-exemplo>
    ~~~

### Inbound properties

- Serve para passar inforações de um componente A para um componente B

- Tanto as variáveis quanto o seu conteúdo devem ser escritas na TAG do componente B
    - Exemplo:

    ~~~
        <app-exemplo size="12"></app-exemplo>
    ~~~

- É preciso importar o módulo Input no componente.ts B

    ~~~
    export class ExemploComponent {
        @Input() size: string = '';
    }
    ~~~

## Aula 3

### Interfaces

- Em Angular, apesar de não ser obrigatório, é um padrão de desenvolvimento que toda entidade tenha uma interface. Exemplos de entidades: Usuario, Endereco, Veiculo...

- A Interface serve para "tipar" as entidades, obrigando o desenvolvedor a seguir a estrutura da interface ao trabalhar com as entidades.

- Pode ser gerado pelo cmd

~~~
    ng g i pasta/nomeInterface
~~~

### Feature Model

- Serve para evitar o adicionamento execessivo de módulos no app.module.ts

- Cria-se um module.ts em uma pasta de componentes

~~~
    v exemplos
        > componentes 1
        > componentes 2
        > componentes 3
        > componentes 4
        > exemplos.module.ts <------- onde são declarados os componentes 
~~~

- Dentro de exemplos.module.ts deve-se ter a seguinte estrutura:

~~~
    @NgModule({

        declarations: [  
            Componente1Component
            Componente2Component
            Componente3Component
            Componente4Component
        ], 

        exports: [
            Componente1Component
            Componente2Component
            Componente3Component
            Componente4Component
        ],

        imports: [

        ]
    })
    export class ExemplosModule{ }
~~~

- Declara-se esta classe em app.module.ts

~~~
  imports: [
    BrowserModule, 
    FormsModule
    ExemplosModule  <-------------------
  ],
~~~

### Diretivas

#### ngFor

- Serve para renderizar várias instâncias de um componente com base em um array

- O array deve ser declarado no component.ts do componente B

- Na TAG do componente B declarar:

~~~
  <app-exemplo *ngFor="let variávelQueVaiParaTela of arrayExemplo" [item]="arrayExemplo.itemExemplo"></app-exemplo>
~~~

### ngIf e ngIfElse

#### ngIf

~~~
    <h1 *ngIf="size === '12'">Size: 12</h1>
~~~

#### ngIfElse

~~~
    <p *ngIf="size === '12'; else outroTamanho">Size: 12</p>

    <ng-template #outroTamanho>
        <p>Size: Outro</p>
    </ng-template>
~~~

### ngSwitch

- Serve para informar qual opção foi escolhida assim que esta foi clicada
    - "Opcao" é uma variável no ts, e funções para alterar seu valor

~~~
<div>
    <label for="idOpcao1">
        <input type="radio" name="nmOpcao" id="idOpcao1" checked (click)="setOpcao1()">  Opção 1
    </label>

    <label for="idOpcao2">
        <input type="radio" name="nmOpcao" id="idOpcao2" (click)="setOpcao2()"> Opção 2
    </label>
</div>

<div [ngSwitch]="opcao">
    <p *ngSwitchCase="1"> Opção 1 </p>
    <p *ngSwitchCase="2"> Opção 2 </p>
    <p *ngSwitchDefault> Nem uma Opção Selecionada</p>
</div>
~~~

### ngClass

- Serve para alterar a classe dos itens da tela

- no html do componente:

~~~
    <div [ngClass]="classes"></div>
~~~

- no ts do componente:

~~~
    classes=['Classe1', 'Classe2']
~~~

### ngStyle

- Alterar o CSS do item da tela

- "size", "font" e "color" são variáveis no ts

~~~
    <div [ngStyle]="{'font-size': size + 'px', 'font-family': font, 'color': color}"></div>
~~~

## Aula 4

### LifeCycle

- São métodos especiais que são disparados automáticamente quando determinados eventos acontecem.

- Os mais usados são:
    - ngOnChanges: chamado uma vez na criação do componente e sempre que houver alteração em uma de suas propriedades de entrada.

    - ngOnInit: chamado uma única vez quando o componente é inicializado
    
    - ngDoCheck: chamado a cada processo que percorre o componente atrás de mudanças (usar ao invés do ngOnChanges para alterações que o Angular não detecta)

    - ngOnDestroy: chamado antes do Angular destruir o componente.

- Outros:
    - ngAfterContentInit
    - ngAfterContentChecked
    - ngAfterViewInit
    - ngAfterViewChecked

### Services e Requisições HTTP

- Services são locais de armazenamento de requisições de APIs
    - Criado com ng g s pasta/nomeService
    - Estrutura base:

    ~~~
        import { Injectable } from '@angular/core';
        import { HttpClient, HttpHeaders } from '@angular/common/http';
        import { Observable } from 'rxjs'; 
        import { ClasseExemplo } from '../interfaces/interfaceExemplo';

        @Injectable({
        providedIn: 'root'
        })

        export class ServiceService {

            constructor(private http: HttpClient) { }

            getExemplo(): Observable<ClasseExemplo> {
                return this.http.get<ClasseExemplo>("EndereçoAPIExemplo")
            }
        }    
    ~~~

- Para fazer a requisição, é nessário importar o módulo HttpClientModule no arquivo app.modules.ts
    
~~~
    import { HttpClientModule } from '@angular/common/http';

    imports: [
    BrowserModule, 
    FormsModule,
    PhotosModule, 
    HttpClientModule <-----------------
    ],
~~~

- No local desejado para receber o resp da API, deve-se:

    1. Importar a classe Service no construtor do componente
    ~~~
        constructor (private serviceService: ServiceService)
    ~~~

    2. Adicionar o seguinte código no componente destino

    ~~~
        this.serviceService.getExemplo().subscribe((variávelQualquer) => (this.variávelLocal = variávelQualquer))
    ~~~

### JSON Server

- Servidor para a fase de testes

- Instala-se via npm com o comando: "npm i json-server"

- Cria-se um arquivo nomeado db.json e instancia-se o banco de dados
    - Exemplo: 

    ~~~
    {
        "Sizes": [
            {
                "sizeNum": "11", 
                "sizeLetra": "M", 
            }
        ]
    }
    ~~~

- Arquivo package.json inserir a linha ("server": "json-server --watch db.json"), abaixo de "test", no Object "scripts"

- Para inicializar o servidor: "npm run server". A porta é a 3000

## Aula 5

### Angular Router

- Serve para fazer o roteamento entre páginas do aplicativo em uma SPA

- Inicia-se o arquivo com "ng g m app-routing --flat --module=app"

- Em seguida, deve-se:

    1. Adicionar os imports de NgModule, RouterModule e Routes ao arquivo app-routing.module.ts

    ~~~
        import { NgModule } from "@angular/core";
        import { RouterModule, Routes } from "@angular/router"; 
    ~~~

    2. Adicionar a variavel routes como mapeamento das rotas.

    ~~~
        import { NgModule } from "@angular/core";
        import { RouterModule, Routes } from "@angular/router"; 
    ~~~

    3. Adicionar a variavel routes como mapeamento das rotas. 

    ~~~
        const routes: Routes = [
            {path: '', component: PáginaInicialComponent}, 
            {path: 'OutraPágina', component: OutraPáginaComponent}
        ]
    ~~~

    4. Adicionar a classe AppRoutingModule com a anotation @NgModule.

    ~~~
        @NgModule({
            declarations: [], 
            imports: [RouterModule.forRoot(routes)], 
            exports: [RouterModule]
        })
        export class AppRoutingModule {}
    ~~~

    5. Importar o AppRoutingModule no app.module.ts

    ~~~
    import { AppRoutingModule } from './app-routing.module';
    ...
    imports: [
        BrowserModule, 
        FormsModule,
        PhotosModule, 
        HttpClientModule,
        AppRoutingModule <-------------------------
    ],
    ~~~

    6. Adicionar o componente router-outlet no app-component.html e criar os links para as rotas usando o atributo routerLink. 

    ~~~
        <nav>
            <a routerLink="/">Home</a>  <---------------------------
            <a routerLink="/OutraPágina">OutraPágina</a>
        </nav>
        <router-outlet></router-outlet>   <-------------------------
    ~~~

## Rota 404

- Aparece quando não houver página para ser mostrada com a aquela rota

- Cria-se com "ng g c pasta/nome"

- A rota que deve ser instanciada no app-routing.module.ts é (path: '**', component: Error404Component)

## Rota Dinâmica

- A rota é instanciada com dois pontos
    - Exemplo: "path: 'exemplo/:parâmetro', component: OutraPáginaComponent"

- No componente indicado pela rota, coloca-se no construtor:

~~~
    constructor(private route: ActivatedRoute) {}
~~~

- Os parâmetros são capturados desta forma:

~~~
    constructor(private route: ActivatedRoute) { 
      this.route.params.subscribe(res => console.log(res));
    }
~~~

## Mudança de componente por lógica

- Adicionar variável no constructor => "private router: Router"

- Criar ação que execute " this.router.navigate(['outraPágina']);"

## Guarda rotas

- Serve para evitar que o usuário acesse determinada página com base em alguma lógica

- Criar um arquivo auth.guard.ts no pasta services, com o seguinte caminho auth/auth.guard.ts e adicionar o seguinte código:

~~~
    import { Observable } from 'rxjs';
    import { Injectable } from '@angular/core';
    import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

    @Injectable()
    export class AuthGuard implements CanActivate {

        constructor(private router: Router) { }

        canActivate(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> | boolean {

            if (lógica === true) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }
    }
~~~

- Adicionar a classe AuthGuard ao arquivo app-routing.module.ts

- Para proteger uma rota, adicionar o atributo canActivate
    - Exemplo:
    ~~~
        {path: '', component: PáginaInicialComponent, canActivate: [AuthGuard]}, 
    ~~~

- Adicionear o serviço AuthGuard ao providers do app.module.ts

~~~
    imports: [
    BrowserModule,
    FormsModule,
    ExemplosModule,
    PhotosModule, 
    HttpClientModule, 
    AppRoutingModule
    ],

    providers: [AuthGuard],  <---------------
    bootstrap: [AppComponent
~~~

- Importante!! Na tela de login, se as credencias estiverem corretas, adicionar uma mudança de componente por lógica

## Aula 6

### Validação de Formulários

- Importar ReactiveFormsModule ao app.module.ts

- No componenteDesejado.component.ts, criar uma variável do tipo FormGroup

~~~
    nomeFormulário: FormGroup;
~~~

- Injetar o service FormBuilder no constructor

~~~
    constructor(private formBuilder: FormBuilder) { }
~~~

- componenteDesejado.component.html criar um formulário com os campos desejados, como este:
~~~
    <form [formGroup]="nomeFormulário" >

        <div>
            <input type="text" id="idNome" formControlName="nome">
        </div>

        <div>
            <input type="text" id="idCpf" formControlName="cpf">
        </div>
        
        <button (click)="cadastrar()">Cadastrar</button>
    </form>
~~~

- Importar a classe validators no componente componenteDesejado.component.ts

- Adicionar ao ts, os campos e as validações desejadas:

~~~
    contructor(private formBuilder: FormBuilder) {
        this.nomeFormulário = this.formBuilder.group({
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required, Validators.minLength(11)]]
        });
    }
~~~

- Para mostar o usuário quando haver algum erro de validação, usa-se como parâmetros os erros do formulário:
    - "Touched" serve para mostrar o erro após o usuário interagir com o campo
    - Para analisar outros erros, basta digitar o nome da validação no ligar de "required"
    - Caso não souber o nome do erro, pode-se digitar console.log(nomeFormulário.get('nome'))
~~~
    <div *ngIf="nomeFormulário.get('nome')?.errors?.['required'] && nomeFormulário.get('nome')?.touched>
        Nome obrigatório
    </div>
~~~
