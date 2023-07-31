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
    li.appendChild(document.createTextNode(newitem1+"  "+newitem2+"  "+newitem3));
    
    var deleteBtn=document.createElement('input');
    deleteBtn.type='button';
    deleteBtn.value='delete';
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    var editbtn=document.createElement('input');
    editbtn.type='button';
    editbtn.value='Edit';
    editbtn.className='editbtn';
    li.appendChild(editbtn);

    li.appendChild(deleteBtn);
    itemlist.appendChild(li);

    const person={
        Name:newitem1,
        Email:newitem2,
        MobNo:newitem3
    } 
    
    const key=JSON.stringify(newitem2);
    const value=JSON.stringify(person);
    localStorage.setItem(key,value);

    deleteBtn.onclick=()=>{
        var obj=JSON.parse(value);
        localStorage.removeItem(JSON.stringify(obj.Email));
        itemlist.removeChild(li);
    }

    editbtn.onclick=()=>{
        var obj=JSON.parse(value);
        document.getElementById('name').value=obj.Name;
        document.getElementById('email').value=obj.Email;
        localStorage.removeItem(JSON.stringify(obj.Email));
    }
    

}

