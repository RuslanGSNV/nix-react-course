import './App.css';
import Form from 'react-bootstrap/Form';
import { useState, useCallback} from 'react';
import { ToDoItem } from './components/ToDoItem';

export const App = () => {

  const toDoItems = [
    {
      id:0,
      title:'reading',
      description:'Read book',
      status:'open',
      creation_date: Date(Date.now()),
      update_date: Date(Date.now())
    },

    {
      id:1,
      title:'shoping',
      description:'Buy dress',
      status:'in progress',
      creation_date: Date(Date.now()),
      update_date: Date(Date.now())
    },

    {
      id:2,
      title:'skating',
      description:'Just skate!',
      status:'in progress',
      creation_date: Date(Date.now()),
      update_date: Date(Date.now())
    }
  ]
  const [items, setItems] = useState(toDoItems)
  const [addItemsVisible, setaddItemsVisible] = useState(false)
  const [newItem, setNewItem] = useState({
      title:'',
      description:'',
      status:'',
      creation_date: '',
      update_date: ''
  })
  const [deletedItems, setDeletedItems] = useState([]);
  const [openEditNote, setOpenEditNote] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('--All--');
  const [sortCreationDate, setSortCreationDate] = useState(true);
  const [sortUpdateDate, setSortUpdateDate] = useState(true);
  const [checkboxChecked, setCheckBoxChecked] = useState(true);

  const deleteItems = useCallback(()=>{setItems(items.filter((item)=>!deletedItems.includes(item.id)));
    setCheckBoxChecked(!checkboxChecked)
    setDeletedItems([])
  },[deletedItems, items, checkboxChecked])

  const addItem = useCallback(()=>{
    if (!newItem.title || !newItem.description) return alert('Data is not enough')
    setItems([...items, {...newItem, id: items?.length || 0, status:'open', creation_date: Date(Date.now())}])
    setNewItem({
      title:'',
      description:'',
      status:'',
      creation_date: '',
      update_date: ''}
      )
  },[items,newItem])


  function sortIncrCrDate(a,b){
    return (Date.parse(a.creation_date) - Date.parse(b.creation_date))
  }

  function sortDecrCrDate(a,b){
    return (Date.parse(b.creation_date) - Date.parse(a.creation_date))
  }

  function sortIncrUpDate(a,b){
    return (Date.parse(a.update_date) - Date.parse(b.update_date))
  }

  function sortDecrUpDate(a,b){
    return (Date.parse(b.update_date) - Date.parse(a.update_date))
  }


  const style = {
    button_add:{
      float:'left'
    },

    inputs:{
      position:'relative',
      width:'250px',
      height:'60px',
      margin: '0 auto',
      marginBottom:'50px'
    },

    head_block:{
      display: 'flex',
      borderTop:'1px solid black',
      borderBottom:'1px solid black'

    },

    head_block_element:{
      borderRight:'1px solid black',
      width:'10%',
      
    },

    id:{
      width:'3%',
      borderRight:'1px solid black'
    },

    edit_block:{
      width:'34%',
      borderRight:'1px solid black'
    },

    sortBlock: {
      cursor:'pointer',
      borderRight:'1px solid black',
      width:'15%',
      background: '#64dade'
    }
  }

  return (

    <div className="App">

        <div>
          <button onClick={()=>setaddItemsVisible(!addItemsVisible)} className='btn btn-primary'>Add Item</button>
          
          {addItemsVisible ? <div style={style.inputs}>

            <Form.Control className='mt-2' 
            onChange={event=>setNewItem({...newItem, title: event.target.value})} 
            size="sm" 
            type="text" 
            placeholder="Write title" 
            value={newItem.title} />

            <Form.Control 
            onChange={event=>setNewItem({...newItem, description: event.target.value})} 
            size="sm" 
            type="text" 
            placeholder="Write description" 
            value={newItem.description} />

            <button onClick={addItem} className='btn btn-success mt-2'>Save</button>
          </div>:null}

          <h2>Filter</h2>
          <select value={selectedStatus} onChange={(event)=>{setSelectedStatus(event.target.value) }}>
              <option >--All--</option>
              <option >open</option>
              <option >in progress</option>
              <option >done</option>
          </select>
        </div>

        <div>
          
          <div className='mt-3' style={style.head_block}>
              <div style={style.id}>Id</div>
              <div style={style.head_block_element}>Title</div>
              <div style={style.head_block_element}>Description</div>
              <div style={style.head_block_element}>Status</div>
              <div style={style.sortBlock} onClick={()=>{setSortCreationDate(!sortCreationDate); setSortUpdateDate('creation')}}>Creation date (click to sort)</div>
              <div style={style.sortBlock} onClick={()=>setSortUpdateDate(!sortUpdateDate)}>Update date (click to sort)</div>
              <div style={style.head_block_element}>Edit</div>
              <div style={style.head_block_element}>Check to delete</div>
              <div style={style.edit_block}>Edition</div>
          </div >
          
              {items.filter((el)=>selectedStatus==='--All--' ? true : selectedStatus===el.status).sort((a,b)=> sortUpdateDate==='creation' ?
              sortCreationDate ? sortIncrCrDate(a,b) : sortDecrCrDate(a,b)
              : sortUpdateDate ? sortIncrUpDate(a,b) : sortDecrUpDate(a,b))
              .map((item, index)=>

              <ToDoItem 
              items={items} 
              setItems={setItems} 
              openEditNote={openEditNote} 
              setOpenEditNote={setOpenEditNote} 
              key={index} 
              item={item} 
              index={index} 
              deletedItems={deletedItems} 
              setDeletedItems={setDeletedItems} 
              checkboxChecked={checkboxChecked}/>

              )
              }

        </div>
        <button className='btn btn-danger mt-2' onClick={deleteItems}>Delete Items</button>
    </div>
  );
}
