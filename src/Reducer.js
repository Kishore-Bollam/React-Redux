const count =  0;
export default function reducer(state = count , Action){
    const {type , payload} = Action;

    switch(type){
        case "INCREMENT":
        return state+payload;
       case "DECREMENT":
        return state-5;
        default:
            return state;
    }
}