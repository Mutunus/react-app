import React from 'react'

class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          isAwesome: false
      };
  
    }
  
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  
    handleSubmit = (event) => {
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Is Awesome:
            <input type="checkbox" name="isAwesome" checked={this.state.isAwesome} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default UserForm