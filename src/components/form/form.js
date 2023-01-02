import React, { useReducer } from 'react';
import { ACTION_TYPE } from '../../state/formState/formActionType';
import { initialState, reducer } from '../../state/formState/formReducer';

const Form = () => {


    const [state, dispatch] = useReducer(reducer,initialState)

    const submit = (e) =>{
        e.preventDefault()
        console.log("submit", state)
    }
    return (
        <div 
        className='md:w-1/2  w-full mx-auto shadow mt-10 p-6 rounded bg-white'
        >
            <form 
            onSubmit={submit} 
            className="flex flex-col gap-2"
            >
                <div 
                className='grid md:grid-cols-2 gap-2'
                >
                <input 
                type="text" 
                name="firstName" 
                className='border rounded px-2' 
                placeholder='First Name' 
                onBlur={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                id="firstName" 
                />
                <input 
                type="text" 
                name="lastName" 
                className='border rounded px-2' 
                placeholder='Last Name' 
                onBlur={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                id="lastName" 
                />
                <input 
                type="email" 
                name="email" 
                className='border rounded px-2' 
                placeholder='Email' 
                onBlur={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                id="email" 
                />
                <input 
                type="phone" 
                name="phone" 
                className='border rounded px-2' 
                placeholder='Phone Number' 
                onBlur={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                id="phone" 
                />
                <input 
                type="password" 
                name="password" 
                className='border rounded px-2' 
                placeholder='Password' 
                onBlur={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                id="password" 
                />
            </div>

            <div className='mt-8'>
                <label className="font-bold">Age</label>
                <div className='text-start flex items-center gap-4 mt-2 font-bold'>
                    <button 
                    className='border rounded-full p-2 hover:bg-lime-600 hover:border-none hover:text-white font-bold'
                    onClick={(e)=>dispatch({type:ACTION_TYPE.COUNT, payload:{name:"age", value:+1}})}
                    >
                        +
                        </button>
                    {state.age}
                    <button 
                    className='border rounded-full p-2 hover:bg-red-600 hover:border-none hover:text-white font-bold'
                    onClick={(e)=>dispatch({type:ACTION_TYPE.COUNT, payload:{name:"age", value:-1}})}
                    >
                        -
                        </button>
                </div>
            </div>

            <div  className='mt-8'>
                <label htmlFor="" className='font-bold'>Select Gender</label>
                <div className=' flex items-center gap-1'>
                   <input 
                    type="radio" 
                    id="Male" 
                    name="gender" 
                    value="Male" 
                    onClick={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                    />
                    <label 
                    className="" 
                    for="Male"
                    >
                        Male
                        </label>
                    <br />
                   <input 
                    type="radio" 
                    id="Female" 
                    name="gender" 
                    value="Female" 
                    onClick={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})} 
                    />
                   <label 
                    className="" 
                    for="Female"
                    >
                        Female
                        </label>
                    <br />
                   <input 
                    type="radio" 
                    id="Others" 
                    name="gender" 
                    value="Others" 
                    onClick={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})}
                    />
                   <label 
                    for="Others"
                    >
                        Others
                        </label>
                        <br />
                </div>
            </div>
            <div 
            className='text-start grid gap-2'
            >
               <label 
                for="accountType" 
                className='mr-2 font-bold'
                >
                    Account Type
                    </label>
                <select 
                name="accountType" 
                id="accountType" 
                className='w-40 border rounded' 
                onChange={(e)=>dispatch({type:ACTION_TYPE.INPUT, payload:{name:e.target.name, value:e.target.value}})}
                >
                    <option 
                    value="premium"
                    >
                        Premium
                        </option>
                    <option
                    value="regular"
                    >
                        Regular
                        </option>
                    <option 
                    value="free"
                    >
                        Free
                        </option>
                </select>
            </div>
            <div 
            className='flex gap-2 items-center mt-8'
            >
               <input 
                type="checkbox" 
                id="privacy" 
                name="privacy" 
                value="agree with terms & conditions" 
                onChange={(e)=>dispatch({type:ACTION_TYPE.TOGGLE, payload:{name:e.target.name, value:e.target.value}})}
                />
                <label 
                for="privacy"
                className='text-sm text-gray-400'
                > 
                agree with terms & conditions
                </label>
                <br />
            </div>
            <input 
            type="submit" 
            className='border rounded bg-lime-600 font-bold text-white w-40 mx-auto px-2' 
            value="Submit" 
            />
            </form>
        </div>
    );
};

export default Form;