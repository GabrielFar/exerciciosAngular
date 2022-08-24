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

