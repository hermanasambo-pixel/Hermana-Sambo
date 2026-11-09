
document.getElementById('menu').addEventListener('click',function(){document.getElementById('nav').classList.toggle('open');});
var q=document.getElementById('quiz');
if(q){q.addEventListener('submit',function(e){e.preventDefault();
var c=0,a=0,k={q1:'t',q2:'n',q3:'t'};
for(var n in k){var v=q.elements[n].value;if(v){a++;if(v===k[n])c++;}}
var r=document.getElementById('res');
if(a<3){r.textContent='Responda a todas as perguntas.';return;}
r.textContent=c===3?'Parabéns! 3/3. Conhece os direitos das raparigas. 🌟':'Acertou '+c+'/3. Reveja a página “O Tema” e tente de novo.';});}
