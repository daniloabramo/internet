export class  PWHeader extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`
        <style>
            button{
                background: green;
                border-radius: 5px;
            }

        </style>
            <button><slot></slot></button>
        `
    }
}

customElements.define('pw-button', PWHeader);