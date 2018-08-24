import React       from 'react'
import { connect } from 'react-redux'

const List = props => 
{
    return (
        <div>
            <div className="row">
                {
                    props.repos.map((repo) => 
                    {
                        return (                       
                            <div className="col s12 m4">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text center">
                                        <span className="card-title">
                                            <div className="card-action">
                                                <a href={repo.html_url}>{repo.name}</a>     
                                            </div>
                                        </span>                  
                                    </div>                        
                                </div>
                            </div>                
                        )
                    })
                }
            </div> 
                 
        </div>
    )
}

const mapStateToProps = state =>
{
    return {
        inputValue: state.searchInputValue,
        repos:  state.repos
    } 
}

export default connect(mapStateToProps)(List)