const messagesInitialState = [
    { id: 1, body: 'this is a new message', createdAt: new Date() }
]
  const messagesReducer = (state = messagesInitialState , action) => {
    switch(action.type) {
        case 'ADD_MESSAGE' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_MESSAGE':{
            return state.filter(msg=>{
                return msg.id!==action.payload
            })
        }
        case 'EDIT_MESSAGE':{
            return state.map(msg=>{
                if(msg.id===action.payload){
                    return Object.assign({},msg,action.payload1)
                }
                else{
                    return Object.assign({},msg)
                }
            })
        }
        default: {
            return [].concat(state)
        }
    }
}

export default messagesReducer


