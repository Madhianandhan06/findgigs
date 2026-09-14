import { createContext } from "react";

export const JobsContext = createContext()

function JobsProvider({ children }){
	return children
}

export default JobsProvider