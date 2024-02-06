export class  PWButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`
        <style>
            button{
                display: flex;
                align-items: center;
                justify-content: center;  
                width: 14rem;
                height: 5rem;
                padding: 0.5rem;
                border-radius: 1rem;
                border: 2px solid var(--stroke-text);
                background: var(--accent);
                margin: 1.5rem;
                -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
                -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
                box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
                cursor: pointer;
                z-index: 4;
            }

            button.red{
                background: red;
            }

            button:hover{
                background: var(--accent-hover);
            }
            
            button:active{
                transform: translate(2px, 2px);
                box-shadow: 2px 2px 0px 0px rgba(0,0,0,0);
            }

        </style>
            <button><slot></slot></button>
        `
    }
}