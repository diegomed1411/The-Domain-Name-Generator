/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

pronoun.forEach(pronoun => {
  adj.forEach(adj => {
    noun.forEach(noun => console.log(pronoun+adj+noun))
  })
})
;
};
