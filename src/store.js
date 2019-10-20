import { createStore } from 'redux';
import reducer from './reducers';
import {obtenerStateStorage, guardarStateStoreage} from './localstorage';

// Define initial state
// const initialState = [];

// Obtener citas del localStorage
const storageState = obtenerStateStorage();


export const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    guardarStateStoreage({
        citas: store.getState().citas
    })
})

export default store;