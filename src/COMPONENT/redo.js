// import { useState } from "react"
// import { TextField, Box, Button } from "@mui/material"
// export default function Redo() {
//     const [ todo, setTodo] = useState("")
//     const [additem, setAddItem] = useState([])
//     // const [ edittodo, setEditTodo] = useState(0)
//     const handleAdd = () => {
//         if(todo !== ""){
//             setAddItem([...additem, todo])
//         }
//         console.log(additem)
//     }
//     const handleDelete = (id) => {
//     const updateditem = additem
//     updateditem.splice(id, 1)
//     setAddItem([...updateditem])
//     console.log(updateditem)
//     }
//     const handleEdit = (id) => {
//        const item = todo
//       const edit = additem.findIndex((i) => i.id === id)
//         setTodo(todo.edit)
//         // setEditTodo(id)
        

// console.log(edit)
//     }
//     return(
//         <Box>
//             <Box>
//                 <TextField id="dishes" name="dishes" value={todo} onChange={(e) => setTodo(e.target.value)} type='text' />
//                 <Button variant="outlined" onClick={handleAdd}>ADD</Button>
//         {todo}
//         </Box>
//         <Box>
//             {
//                 additem.map((item, id) => (
//                     <Box key={id}>
//                         <li>{item}
//                         <Button onClick={()=>handleDelete(id)}>Delete</Button> 
//                         <Button onClick={()=>handleEdit(id)}>EDIT</Button> </li>
//                     </Box>
//                 ))
//             }
//         </Box>
//         </Box>
//     )
// }