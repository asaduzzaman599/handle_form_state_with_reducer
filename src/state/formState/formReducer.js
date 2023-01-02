import { ACTION_TYPE } from "./formActionType"

    export const initialState = {
        firstName: "",
        LastName: "",
        email:"",
        password:"",
        phone:"",
        age:0,
        gender:"",
        accountType:'premium',
        privacy: false
    }

    export const reducer = (state, action) =>{
        console.log(action)
        switch(action.type) {
            case ACTION_TYPE.INPUT:
              return {...state, [action.payload.name]:action.payload.value }
            case ACTION_TYPE.TOGGLE:
              return {...state, [action.payload.name]:!state.privacy }
            case ACTION_TYPE.COUNT:
              return {...state, [action.payload.name]:state.age + action.payload.value >=0 ? state.age + action.payload.value :0  }
            default:
              // code block
          }
    } 