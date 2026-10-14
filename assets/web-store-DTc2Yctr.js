import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{g as t}from"./vendor-8iLmkU58.js";var n=e(t(),1),r=`atomjs.web`,i=`atomjs.web.tab`,a=[`html`,`css`,`js`],o={html:`html`,css:`css`,js:`javascript`},s={html:`atomweb/index.html`,css:`atomweb/style.css`,js:`atomweb/script.js`},c={html:`<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="utf-8" />
    <title>Mening sahifam</title>
    <!-- CSS shu qator orqali ulanadi -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Salom, atomjs!</h1>
    <p class="izoh">Kodni o'zgartiring — o'ngdagi ko'rinish darhol yangilanadi.</p>
    <button id="tugma">Bosing</button>
    <p id="natija"></p>

    <!-- JS shu qator orqali ulanadi, body oxirida -->
    <script src="script.js"><\/script>
  </body>
</html>
`,css:`body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 32px;
  background: #0f1420;
  color: #e6edf3;
}

h1 {
  color: #7dd3fc;
}

.izoh {
  color: #94a3b8;
}

button {
  padding: 10px 18px;
  border: 0;
  border-radius: 8px;
  background: #7dd3fc;
  color: #0f1420;
  font-size: 15px;
  cursor: pointer;
}
`,js:`const tugma = document.getElementById('tugma')
const natija = document.getElementById('natija')

let son = 0

tugma.addEventListener('click', () => {
  son = son + 1
  natija.textContent = 'Siz ' + son + ' marta bosdingiz'
  console.log('bosildi:', son)
})
`};function l(){try{let e=localStorage.getItem(r);if(!e)return{...c};let t=JSON.parse(e);return{html:typeof t.html==`string`?t.html:``,css:typeof t.css==`string`?t.css:``,js:typeof t.js==`string`?t.js:``}}catch{return{...c}}}var u=l(),d=null,f=new Set;function p(){for(let e of f)e()}function m(e){return f.add(e),()=>void f.delete(e)}function h(){try{localStorage.setItem(r,JSON.stringify(u))}catch{}}function g(){return u}function _(){return(0,n.useSyncExternalStore)(m,g,g)}function v(e,t){u[e]!==t&&(u={...u,[e]:t},h(),p())}function y(e){u=e,h(),p()}function b(){y({html:``,css:``,js:``})}function x(){y({...c})}function S(e){let t=e.trim();return t.startsWith(`<`)?`html`:/^[^{};]*\{[^}]*:[^}]*\}/s.test(t)?`css`:`js`}function C(){return u.html===c.html&&u.css===c.css&&u.js===c.js}function w(e,t=S(e)){u={...C()?{html:``,css:``,js:``}:u,[t]:e},d=t,h(),p()}function T(){let e=d;return d=null,e}function E(){let e=localStorage.getItem(i);return e===`css`||e===`js`?e:`html`}function D(e){localStorage.setItem(i,e)}export{g as a,x as c,y as d,T as f,b as i,D as l,s as n,E as o,_ as p,a as r,w as s,o as t,v as u};