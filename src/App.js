import React, { Component } from 'react'
import store                from './store'
import Header               from './containers/Header'
import List                 from './containers/List'
 

class App extends Component 
{
    render() 
    {
        return (
            <div className="App">            
                <Header store={store}/>
                <h1 className='center'>
                  Repository <span className='green-text'>Search</span>
                </h1>
                <List store={store}/>
            </div>
        )
    }
}

export default App
