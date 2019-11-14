import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import NavigasjonsReducer from "./navigasjonsReducer";

export default (history: any) => combineReducers({
    router: connectRouter(history),
    navigasjon: NavigasjonsReducer
});
