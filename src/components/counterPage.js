import { useReducer } from "react";
import React from "react";


const reducer = (state,action ) => {

  if(action.type ==='incrementUp'){
 return {
    ...state,
    count:state.count + 1,
 };
}
 
if(action.type ==='decrementDown'){
    return {
       ...state,
       count:state.count-1,
    };
   }

if(action.type ==='change-value-to-add'){
    return{
        ...state,
        valueToAdd:action.payload,
    };
}

 
if(action.type ==='add_value_to_count'){
    return {
       ...state,
       count:state.count + state.valueToAdd,
       valueToAdd:0
    };
   };
 return state;
};

 function CounterPage({initialCount}){
    const[state,dispatch] = useReducer(reducer,{
        count: initialCount,
        valueToAdd: 0,
    });
   // const[count,setCount]= useState(initial);
   // const[valueToAdd,setValueToAdd]= useState(0);
     

const increment = () => {
   // setCount(count +1);
   dispatch({
    type:'incrementUp'
   });
};


const decrement = () => {
    //setCount(count-1);
    dispatch({
        type:'decrementDown',
    })
};


const handleChange = (event) => {
   const value =parseInt(event.target.value) || 0;
    
   dispatch(
    {
        type:'change-value-to-add',
        payload:value
    });
   //setValueToAdd(value);

};


const handleSubmit=(event) =>{
    event.preventDefault();

   // setCount(count + valueToAdd);
    //setValueToAdd(0);
    dispatch({
        type:'add_value_to_count',
    })

};


    return(
    <div className="grid grid-cols gap-6 place-content-center my-40">
         <h1 className="text-lg">Current Count: {state.count}</h1>
                <div className="flex flex-row gap-6">
                    <button className=" border-2 border-solid p-4 bg-blue-100 drop-shadow-lg	" onClick={increment}>increment </button>
                    <button className=" border-2 border-solid p-4 bg-red-100 drop-shadow-lg	" onClick={decrement}> decrement </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col" >
                    <label className="ml-20 font-bold">add a lot!</label>
                     <input 
                     type="number"
                     value={state.valueToAdd ||""} 
                     onChange={handleChange}
                     className="p-1 m-3 bg-gray-50 border border-gray-300" />
                     <button className="border-2 border-solid p-4 bg-blue-100 drop-shadow-lg font-bold" >add it </button>
                </form>

    </div>
        );
    
};


export default CounterPage;
