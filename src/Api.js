// Query é o valor digitado no searchbar
const getRepos = (dispatch, query) =>
{
    // Retorna o api de repositórios do Github
    fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((r) => 
    {
        return r.json()
    })
    .then((data) => 
    {
        console.log('Retorno da API: ', data)

        // Por a gente ter recebido dispatch pelo parâmetro temos o poder de mandar uma action aqui
        dispatch(
            {
                type: 'SET_REPOS',
                repos: data.items,
                value: ''
            })
    })
}

export default {getRepos}