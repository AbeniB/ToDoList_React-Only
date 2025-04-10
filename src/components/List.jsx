import { v4 as itemKey } from 'uuid';
import Item from './Item';

export default function List({list, deleteItem,toggleDone}){
    
    function list_Items(){
        return list.map((e, i) => 
        <Item
         key={itemKey()}
         remove={()=> {deleteItem(i)}} 
         toggleDone={() => toggleDone(i)}
          todo={e}/>)
    }

    return(
    <div className='list'>
        {list_Items()}
    </div>);
}
 
