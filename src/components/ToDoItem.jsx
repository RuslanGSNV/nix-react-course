import { useState, useEffect } from "react"
import { EditNote } from "./EditNote"

const styles = {
  note_block:{
      display:'flex',
      borderBottom:'1px solid black',
      height: '80px'
  },

  block_element:{
    borderRight:'1px solid black',
    width:'10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  id:{
    width:'3%',
    borderRight:'1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  edit_block:{
    width:'34%',
    borderRight:'1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  dateBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight:'1px solid black',
    cursor:'pointer',
    width:'15%'
  }
}

export const ToDoItem = ({item, index, deletedItems, setDeletedItems, openEditNote, setOpenEditNote, items,checkboxChecked}) => {

    const [checked, setChecked] = useState(false)
    useEffect(()=>{setChecked(false)},[checkboxChecked])

    
    return(

        <div style={styles.note_block}>
        <div style={styles.id}>{index + 1}</div>
        <div style={styles.block_element}>{item.title}</div>
        <div style={styles.block_element}>{item.description}</div>
        <div style={styles.block_element}>{item.status}</div>
        <div style={styles.dateBlock}>{item.creation_date}</div>
        <div style={styles.dateBlock}>{item.update_date}</div>
        <div style={styles.block_element}>
        <button onClick={()=>setOpenEditNote(item.id)} className="btn btn-info">
          Edit
        </button>
              </div>
              <div style={styles.block_element}>
                      <input checked={checked} onChange={(event)=>
                        {event.target.checked ? setDeletedItems([...deletedItems, item.id]) : setDeletedItems(deletedItems.filter((deletedItem)=>deletedItem !== item.id))
                          setChecked(!checked)
                        }
                      } 
                      type="checkbox" />
              </div>
              <div style={styles.edit_block}>
                <EditNote items={items} item={item} openEditNote={openEditNote} setOpenEditNote={setOpenEditNote}/>
              </div>
          </div>
            
    )
}