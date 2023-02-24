// import Form from './Form'
import {useState} from 'react'
// import {Data} from './Data'
import './index.css'
import React from 'react'
import ReactDom from 'react-dom/client'

function UseState(){
    const[count, setCount] = useState(0)
    
    const counter=()=>{
        setTimeout(()=>{
            setCount((currentState)=>{
                console.log("My World")
                return currentState + 1
            })
        },3000)  
    }
    // const [people, setPeople] = useState(Data)
    // const deletePeople =(id)=>{
    //     console.log(id)
    //     const deletePeople= people.filter((person)=>{
    //         return person.id !== id
    //     })
    //     setPeople(deletePeople)
    // }
    // const clearNames=()=>{
    //     setPeople([])
    // }
    // const counter=()=>{
    //     setCount(count+1)
    // }

    // const [personInfo, setInfo] = useState(
    //     { name: "Xavien Ruffin", 
    //       age: 12,
    //       hobbies: "Picking his nose"
    //     })
    // const {name, age, hobbies}= personInfo
    // const newPerson =()=>{

    //    if(name==="Xavien Ruffin"){
    //     setInfo({
    //         name: "Jack Vogel", 
    //         age: 12, 
    //         hobbies: "Spitting his loogies"})}else{
    //         setInfo({
    //             name: "Xavien Ruffin", 
    //             age: 12, 
    //             hobbies: "Picking his nose"

    //         })
    //     }
    // }

    return(
        
       <div id="container">
        {/* <p>{name}</p>
        <p>{age}</p>
        <p>{hobbies}</p>

        <button onClick={newPerson}>Other person</button> */}
        <h2>You clicked the button {count} times</h2>
         <button onClick={counter}>Count </button>
      
      
       </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<UseState/>)

// people.map((person)=>{
    //         const{id, name} = person
    //         return(
    //             <div key={id}>
    //                 <p>{name}</p>
    //                 <button onClick={()=>deletePeople(id)}>Delete</button>
    //             </div>
    //         )
    //     })}
    //     <button onClick={()=>setPeople([])}>Clear Names</button>
        
            
           
       