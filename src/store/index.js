import { createStore } from 'redux'

// Repos é a lista de repositórios vinda da API
// Value é a espaço em branco, pra substituir o que foi digitado após o enter
const initialState =
{
    repos: [],
    searchInputValue: ''
}


const reducer = (state = initialState, action) =>
{
    console.log('Action no reducer: ', action)

    switch(action.type)
    {
        case 'SEARCH_INPUT_CHANGE':
            return Object.assign({}, state, { searchInputValue: action.value })
        case 'SET_REPOS':
            return Object.assign({}, state, 
                { 
                    repos: action.repos,
                    searchInputValue: action.value
                 })
        default:
            return state
    }    
}

const store = createStore(reducer)

export default store