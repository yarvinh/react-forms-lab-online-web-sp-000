import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
  

    super(props);
    this.state = {
      username: "",
      password: ""
  
    };
  }
  handleUserName = (e)=>{

    this.setState({
       username: e.target.value
    })
  }
  handlePassword = (e)=>{
    
    this.setState({
    password: e.target.value
   })

  }
 
  handleSubmit = (e)=>{
    e.preventDefault()
    this.state.password.replace(/\s/g, '') !== "" && this.state.username.replace(/\s/g, '') !== "" ? this.props.handleLogin({username: this.state.username,password: this.state.password}):null
  
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { username: this.state.username, password: this.state.password }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.username}</span> <span>{data.password}</span></div>
  //   })
  // }

  render() {

    // console.log(this.props.handleLogin)
    return (
      
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  value={this.state.username}
            onChange={this.handleUserName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password}
            onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>

    
    );
  }
}

export default LoginForm;
