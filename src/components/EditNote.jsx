import { useCallback, useState } from "react"
import { useDispatch } from 'react-redux';
import { changeItems } from '../rdx/items/actions';

export const EditNote = ({item, openEditNote, setOpenEditNote, items}) =>{
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const editeItems = useCallback(()=>{
        dispatch(changeItems(items?.map((note)=>(note.id===item.id) ?
         { ...note, title:title || note.title, description:description || note.description, status:status || note.status, update_date: Date(Date.now())} 
         : note) ))
        setOpenEditNote('')
    },[items, item, title, description, status, setOpenEditNote, dispatch])

    if (openEditNote === item?.id) 
     
    return (
        <div>
            <h2>Edit Note</h2>
            <input type="text" placeholder="Enter title" value={title || item.title} onChange={(event)=>{setTitle(event.target.value)}}/>
            <input type="text" placeholder="Enter description" value={description || item.description} onChange={(event)=>{setDescription(event.target.value)}}/>
            <select value={status || item.status} onChange={(event)=>{setStatus(event.target.value);}}>
                <option>open</option>
                <option>in progress</option>
                <option>done</option>
            </select>
            <button onClick={editeItems}>Save</button>
        </div>
    )
}