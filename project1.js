var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');


form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newitem1=document.getElementById('name').value;
    var newitem2=document.getElementById('email').value;
    var newitem3=document.getElementById('tel').value; 
    var li=document.createElement('li');

    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem1));
    li.appendChild(document.createTextNode("  "+newitem2));
    li.appendChild(document.createTextNode("  "+newitem3));
    itemlist.appendChild(li);

    const person={
        Name:newitem1,
        Email:newitem2,
        MobNo:newitem3
    }
    const key=JSON.stringify(newitem2);
    const value=JSON.stringify(person);
    localStorage.setItem(key,value);

}



  

