import { useContext } from "react"
import { Context } from "../lib/Context"
import { ActionTypes, FilterTypes } from "../lib/Types"

export const Filter = () => {

    const context = useContext(Context)
    if(!context) {
        throw new Error ("error...")
    }
    const {state,dispatch} = context
   
    return <div>
        <p>{state.currentFilter} filter is used</p>
        <div className="select-wrapper">
            <select value={state.currentFilter} 
                onChange={event => dispatch({type:ActionTypes.SetFilter, payload:event.target.value})}>
                <option value={FilterTypes.All}>all</option>
                <option value={FilterTypes.Balet}>ballet</option>
                <option value={FilterTypes.Opera}>opera</option>
            </select>
        </div>
    </div>
}