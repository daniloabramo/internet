export class  PWButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`
        <style>
            h1{
                background
            }

            button{
                width: 2rem;
                height: 2rem;
                background: var(--background);
                border: 2px solid var(--stroke-text);
                border-radius: 0.625rem;
                margin-right: 0.5rem;
                cursor: pointer;
            }

        </style>
            <h1>Titulo</h1>
            <p>Texto</p>
            <button><slot></slot></button>
        `
    }
}

customElements.define('pw-button', PWButton);