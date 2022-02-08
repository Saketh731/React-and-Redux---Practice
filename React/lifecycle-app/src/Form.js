import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employeeName: '',
            email: '',
            address: '',
            stateValue: "andh",
            nameError: ''
        }
        this.input = React.createRef();
    }
    handleUserNameChange = (event)=>{
        this.setState({
            employeeName: event.target.value
        })
    }

    handleAddressChange = (event)=>{
        this.setState(function(state){
            return {address: event.target.value};
        })
    }

    handleStateChange = (event)=>{
        this.setState((state)=>{
            return {stateValue: event.target.value};
        });
    }

    handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(`Name: ${this.state.employeeName}, Email:${this.state.email}, Address: ${this.state.address}, State: ${this.state.stateValue}, UncontrolledName: ${this.input.current.value}`);
    }

    handleChanges = (event)=>{
        if(event.target.name == "text"){
            if(event.target.value.length < 6){
                this.setState({
                    employeeName: event.target.value,
                    nameError: 'Name length must be greater than 5'
                }) 
            }
            else{
                this.setState({
                    employeeName: event.target.value,
                    nameError: ''
                })
            }
        }
        else if(event.target.name == "textArea"){
            this.setState(function(state){
                return {address: event.target.value};
            })
        }
        else if(event.target.name == "select"){
            this.setState((state)=>{
                return {stateValue: event.target.value};
            });
        }
        else if(event.target.name == "email"){
            this.setState((state)=>{
                return {email: event.target.value};
            });
        }
        else if(event.target.name == "submit"){
            event.preventDefault();
        console.log(`Name: ${this.state.employeeName}, Email:${this.state.email}, Address: ${this.state.address}, State: ${this.state.stateValue}, UncontrolledName: ${this.input.current.value}`);
        }
        
    }

    render(){
        const {employeeName, email, address, stateValue} = this.state;
        return(
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="text" value={employeeName} onChange = {this.handleChanges}/>
                </div>
                <div style={{fontSize: 15, color: "red"}}>
                    {this.state.nameError}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" placeholder="abc@gmail.com" name="email" value={email} onChange={this.handleChanges}/>
                </div>
                <div>
                    <label>Address:</label>
                    <textarea value={address} name="textArea" onChange={this.handleChanges}></textarea>
                </div>
                <div>
                    <label>State:</label>
                    <select value={stateValue} name="select" onChange={this.handleChanges}>
                        <option value="telg">Telangana</option>
                        <option value="andh">Andhra Pradesh</option>
                        <option value="mumb">Mumbai</option>
                        <option value="delhi">Delhi</option>
                    </select>
                </div>
                <div>
                    <label>Uncontrolled Name:</label>
                    <input type="text" ref={this.input} defaultValue="default"/>
                </div>
                <div>
                    <button type="submit" name="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form;