import { useContext } from "react"
import { deleteEvent } from "../lib/Api"
import { ActionTypes, IEvent } from "../lib/Types"
import { Context } from "../lib/Context"

interface IProps {
    event : IEvent
}

export const Event:React.FC<IProps> = ({event}) => {

    const context = useContext(Context)
    
    if (!context) {
        throw new Error("error...")
    }

    const {dispatch} = context
   
    
    return <div>
        <img src={event.cover}/>
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button onClick={async () => {
            await deleteEvent(event.id)
            dispatch({type: ActionTypes.RemoveEvent, payload: event.id})
        }}>Delete</button>
    </div>
}