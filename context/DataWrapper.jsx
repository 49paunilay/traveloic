import { createContext, useState } from "react";

const taskContext = createContext(undefined)

function TaskProvider({children}){
    const [tasks,setTasks] = useState([])
    return(
        <taskContext.Provider value={{tasks:tasks,setTasks:setTasks}} >
            {
                children
            }
        </taskContext.Provider>
    )
}
export {taskContext,TaskProvider}