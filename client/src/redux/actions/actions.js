import axios from 'axios';


export function getDogs() {
    return async function (dispatch) {
        const res = await axios.get('http://localhost:3001/dogs')
        dispatch({ type: 'GET_DOGS', payload: res.data })
    };
}


export function getTemperaments() {
    return async function (dispatch) {
        try {
            const res = await axios.get('http://localhost:3001/temps')
            dispatch({ type: 'GET_TEMPERAMENTS', payload: [...res.data.map(temp => temp.name)] })
        } catch (error) {
            alert(error.message)
        }
    };
}


export function getByName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            dispatch({ type: 'GET_BY_NAME', payload: res.data })
        } catch (err) {
            dispatch({ type: 'GET_BY_NAME', payload: err.response.data })
        }
    };
}


export function getById(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/dogs/${id}`)
            dispatch({ type: 'GET_BY_ID', payload: res.data })
        } catch (err) {
            dispatch({ type: 'GET_BY_ID', payload: err.response.data })
        }
    };
}


export function createDogs(breed) {
    return async function (dispatch) {
        try {
            let res = await axios.post('http://localhost:3001/dogs/', breed);
            return dispatch({ type: 'CREATE_DOG', payload: res.data });
        } catch (err) {
            return dispatch({ type: 'CREATE_DOG', payload: err.response.data })
        }
    };
}


export function deleteDog(id) {
    return async function (dispatch) {
        try {
            const res = await axios.delete('http://localhost:3001/dogs/' + id);
            return dispatch({ type: 'DELETE_DOG', payload: res.data });
        } catch (err) {
            return dispatch({ type: 'DELETE_DOG', payload: err.response.data });
        }
    };
}


export function updateDog(id, breed) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`http://localhost:3001/dogs/${id}`, breed);
            return dispatch({ type: 'UPDATE_DOG', payload: res.data });
        } catch (err) {
            return dispatch({ type: 'UPDATE_DOG', payload: err.response.data })
        }
    };
}


export function clearDetail() {
    return { type: 'CLEAR_DETAIL' };
}


export function sortByName(payload) {
    return { type: 'SORT_BY_NAME', payload };
}


export function sortByWeight(payload) {
    return { type: 'SORT_BY_WEIGHT', payload };
}


export function filterByTemperament(payload) {
    return { type: 'SORT_BY_TEMPERAMENT', payload };
}


export function filterCreated(payload) {
    return { type: 'FILTER_CREATED', payload };
}