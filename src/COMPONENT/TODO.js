// // import { Button, Box } from "@mui/material";
// // import TextField from '@mui/material/TextField';
// // import { useEffect, useState } from "react";
// // const List = () => {
// //      const initial={dishes:""}
// //     const [values, setValues] = useState(initial)
// //     const [addnew, setAddNew] =useState([])

// //     useEffect(() => {
// //         const storedAddNew = JSON.parse(localStorage.getItem("addnew" || "{}"));
// //         console.log("Retrieved data from local storage:", storedAddNew);
// //         if (storedAddNew) {
// //           setAddNew(storedAddNew);
// //         }
// //       }, []);
      
// //       useEffect(() => {
// //         localStorage.setItem("addnew", JSON.stringify(addnew));
// //         console.log("Saved data to local storage:", addnew);
// //       }, [addnew]);
      
// //     const handleChange = (e) => {
// //         const {name, value} = e.target;
// //         setValues({
// //             ...values,
// //             [name]: value,
// //         })
// //         console.log(values)
// //         }

// // const handleAdd = () => {
// //     if(values.dishes !== ""){
// //         setAddNew([...addnew, values.dishes])
// //         setValues({ ...values, dishes: "" })
// //     } 
// //     // console.log(addnew)
// // }
// // const handleDelete = (index) => {
// //    const updatedItem = [...addnew]
// //    updatedItem.splice(index, 1)
// //    setAddNew(updatedItem)
// // }

// // const handleEdit = (index) => {
// //     // Find the item in the addnew array with the specified index
// //     const editTodo = addnew.find((item) => item.index === index);

// //     if (editTodo) {
// //         // Assuming 'values' is an object within 'editTodo'
// //         setValues(editTodo.values);
// //         console.log(editTodo);
// //     } else {
// //         console.log(`Item with index ${index} not found.`);
// //     }
// // }




// //     return ( 
// //         <Box >
// //             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:"5px", minHeight: '80vh' }}>
// //             <TextField  id="dishes" name="dishes" value={values.dishes} onChange={handleChange} type='text'/>
// //             <Button variant="outlined" onClick={handleAdd}>Add</Button>
// //             </Box>
// //             <Box sx={{display:"flex", alignItems:"center", flexDirection: "column", mt:"-10rem", gap:"20px"}}>
// //                 {
// //                 addnew.map((add, index ) => (
// //                    <Box key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
// //                     <li >{add} </li>
// //                 <Button variant="outlined" sx={{ml:"50px"}} onClick={()=>handleEdit(index)} >Edit</Button>
// //                 <Button variant="outlined" sx={{ml:"20px"}} onClick={()=>handleDelete(index)} >Delete</Button>
// //                    </Box> 
// //                    ))
// //                 }
// //             </Box>
// //         </Box>

// //      );
// // }
 
// // export default List;
// import { Button, Box } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import { useEffect, useState } from "react";

// const List = () => {
//     const initial = { dishes: "" };
//     const [values, setValues] = useState(initial);
//     const [addnew, setAddNew] = useState([]);
//     const [editIndex, setEditIndex] = useState(null); // Track the index being edited

//     useEffect(() => {
//         const storedAddNew = JSON.parse(localStorage.getItem("addnew")) || [];
//         console.log("Retrieved data from local storage:", storedAddNew);
//         if (storedAddNew) {
//             setAddNew(storedAddNew);
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("addnew", JSON.stringify(addnew));
//         console.log("Saved data to local storage:", addnew);
//     }, [addnew]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value,
//         });
//     }


//     const handleDelete = (index) => {
//         const updatedItems = addnew.filter((item) => item.index !== index);
//         setAddNew(updatedItems);
//         setEditIndex(null); // Exit edit mode if an item is deleted
//     }

//     const handleEdit = (index) => {
//         // Find the item in the addnew array with the specified index
//         const editTodoIndex = addnew.findIndex((item) => item.index === index);
    
//         if (editTodoIndex !== -1) {
//             // Set the editIndex to indicate we're in edit mode
//             setEditIndex(index);
    
//             // Copy the item from addnew array and set it as the current values
//             const editTodo = addnew[editTodoIndex];
//             setValues({ dishes: editTodo.dishes });
//         } else {
//             console.log(`Item with index ${index} not found.`);
//         }
//     }
    
//     const handleAdd = () => {
//         if (values.dishes !== "") {
//             if (editIndex !== null) {
//                 // If editIndex is not null, it means we're editing an item
//                 const updatedAddNew = addnew.map((item) => {
//                     if (item.index === editIndex) {
//                         // Update the dishes property of the edited item
//                         return { ...item, dishes: values.dishes };
//                     }
//                     return item;
//                 });
    
//                 setAddNew(updatedAddNew);
//                 setValues(initial); // Reset the input field
//                 setEditIndex(null); // Exit edit mode
//             } else {
//                 // Create an object with 'dishes' and 'index' properties
//                 const newItem = {
//                     dishes: values.dishes,
//                     index: Date.now(), // Use a timestamp as the index (unique)
//                 };
    
//                 setAddNew([...addnew, newItem]);
//                 setValues(initial);
//             }
//         }
//     }
    

//     return (
//         <Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "5px", minHeight: '80vh' }}>
//                 <TextField id="dishes" name="dishes" value={values.dishes} onChange={handleChange} type='text' />
//                 <Button variant="outlined" onClick={handleAdd}>
//                     {editIndex !== null ? "Save" : "Add"} {/* Change button label based on edit mode */}
//                 </Button>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt: "-10rem", gap: "20px" }}>
//                 {addnew.map((add, index) => (
//                     <Box key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
//                         <li >{add.dishes} </li>
//                         <Button variant="outlined" sx={{ ml: "50px" }} onClick={() => handleEdit(add.index)}>Edit</Button>
//                         <Button variant="outlined" sx={{ ml: "20px" }} onClick={() => handleDelete(add.index)}>Delete</Button>
//                     </Box>
//                 ))}
//             </Box>
//         </Box>
//     );
// }

// export default List;
