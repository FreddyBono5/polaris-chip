import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.img = "";
    this.cardHeader = "Card Header";
    this.cardText = "Card Text";

  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h3 {
        font-size: 20px;
      }
      .fancy{
  background-color: orange;
}
#back{
  margin: 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  border: 1px solid #ddd;
  border-color: black;
  padding: 10px;
  width: 500px;
}
.picture{
  width: 80%;
  background-color: #4CBB17;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  width: 300px;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  border-color: black;
  
  margin: 10px 10px 50px 80px;
  margin-left: 10
    
}
.container{
  text-align: center;
  padding: 10px 35px;
  font-size: 13px;
}
.details:focus,
.details:hover {
  color: #C0C0C0;
  background-color: black;
}
.details{
  background-color: #4CBB17;
}
.buttons{
  background-color: #4CBB17;
}
.buttons:focus,
.buttons:hover {
  color: #C0C0C0;
  background-color: black;
}
details:active{
  color: #4CBB17 !important;
}
@media (max-width: 800px) and (min-width: 501px) {
  .details {
    display: none;
  }
}
@media (max-width: 500px) {
  #back {
    transform: scale(0.8);
  }
 
  }
#header{
  font-size: 20px;
}

.image {
  margin: 0px 0px 0px 40px; 
}



    `;
  }

  render() {
    return html`
    <div>
    <div class="wrapper">
    <a href="https://hax.psu.edu/" target = "_blank">
     <button onclick = "https//hax.psu.edu/" class="details" >Details</button>
     </a>
     <button class = "duplicate">Clone Card</button>
   <button id="namechange">Change name</button>
   <button id="pic-change">Change Picture</button>
   <button id="bg-change">Change Background</button>
   <button id="deletecard">Delete Card</button>
   <div id = "cardlist">
     <div class="card">
   <div class= center>
 <div id = "back">
   <div class="container">
   <h3>${this.cardHeader}</h3>
   </div>
   <div class = "picture">
      <div class = "image">
   <img src = ${this.img}>
      </div>
  </div>
 <div class="container">
 <p>${this.cardText}</p>
   </div>
   </div>
     
   </div>
     </div>
     </div>
 </div>
 </div>
   </div>
 </div>

    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      cardHeader: { type: String },
      cardText: { type: String },
      background: { type: String },
      
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
