function  giv(event){
    event.preventDefault();
   localStorage.setItem(document.getElementById('name').id.toString(),document.getElementById('name').value.toString());
   localStorage.setItem(document.getElementById('email').id.toString(),document.getElementById('email').value.toString());
   localStorage.setItem(document.getElementById('date').id.toString(),document.getElementById('date').value.toString());
   localStorage.setItem(document.getElementById('time').id.toString(),document.getElementById('time').value.toString());

   const myobj={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    date:document.getElementById('date').value,
    time:document.getElementById('time').value
   }
   const serialized=JSON.stringify(myobj);
   localStorage.setItem('myobj',serialized);
 console.log(localStorage);
}