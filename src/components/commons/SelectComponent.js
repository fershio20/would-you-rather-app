import React, {Component} from 'react'



class SelectComponent extends Component{
    state= {
        selectedValue: '',
    }

    onHandleChange = (e) =>{
        e.preventDefault()
        const value = e.target.value
        this.props.returnSelect(value)

        this.setState(state=>(
            {
                selectedValue: value,
            }
        ))
    }

    render(){
        const{value} = this.props;
        return(
            <select     className='select w-100 has-text-center'
                         value={this.state.selectedValue}
                         onChange={this.onHandleChange}>
                <option default disabled defaultValue value="">Select yout user</option>
                {
                    Object.keys(value).map(item=><option key={item} value={item}>{value[item].name} - {item}</option>)
                }

            </select>
        )
    }

}

export default SelectComponent;