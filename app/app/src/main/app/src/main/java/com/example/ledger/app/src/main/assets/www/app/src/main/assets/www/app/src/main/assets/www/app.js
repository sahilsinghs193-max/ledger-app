const KEY='ledger_v1';
function load(){return JSON.parse(localStorage.getItem(KEY)||'[]')}
function save(a){localStorage.setItem(KEY,JSON.stringify(a))}
function render(){const e=document.getElementById('ledger');const arr=load();e.innerHTML='<pre>'+JSON.stringify(arr,null,2)+'</pre>'}
document.getElementById('entryForm').addEventListener('submit',e=>{e.preventDefault();const d=document.getElementById('date').value||new Date().toISOString().slice(0,10);const desc=document.getElementById('desc').value;const amt=document.getElementById('amount').value;const type=document.getElementById('type').value;const arr=load();arr.push({d,desc,amt,type});save(arr);render()})
render()
