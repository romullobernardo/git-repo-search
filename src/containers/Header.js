import React       from 'react'
import { connect } from 'react-redux'
import                  'materialize-css/dist/css/materialize.min.css'
import Api         from '../Api'


const Header = props => 
{
    return (
        <div>
            <nav className='green'>				
				<div className="nav-wrapper">
                    <form 
                        className='container' 
                        onSubmit={ e => props.onFormSubmit(e, props.inputValue) }
                    >
						<div className="input-field">
							<input 
								type="search" 
								id="search" 
                                placeholder='Search'	
                                input value={props.inputValue} onChange={props.onInputChange}	
							/>
							<label className="label-icon" htmlFor="search">
								<i className="material-icons">search</i>
							</label>
						</div>
					</form>			
				</div>
			</nav>
        </div>
    )
}


const mapStateToProps = state =>
{
    return {
        inputValue: state.searchInputValue
    }
}


const mapDispatchToProps = dispatch =>
{
    return {
        onInputChange: e =>
        {
            // REFATORAR E COLOCAR NO API.JS
            dispatch(
                {
                    type: 'SEARCH_INPUT_CHANGE',
                    value: e.target.value
                }
            )
        },
        // query vem do props.inputValue, que é o valor digitado 
        onFormSubmit: (e, query) =>
        {
            e.preventDefault()
            console.log('Submit Pressed!')

            Api.getRepos(dispatch, query)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)