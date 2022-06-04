import { CounterReducer } from "./Counter/CounterReducer";
import {legacy_createStore,combineReducers} from "redux"


const rootReducer=combineReducers({counter:CounterReducer})

export const store=legacy_createStore(rootReducer)