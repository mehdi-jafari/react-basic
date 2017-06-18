import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const url = 'http://eventfulsearch.azurewebsites.net/api/v1/events/search';

class Form extends React.Component {
  state={address:'h3h2p2', reduis:9 ,datestart:'2017/07/01', dateend:'2017/07/25',category:'music'}


  handleSubmit = (event) =>
  {
      event.preventDefault();
      axios.post(url, {
        address:this.state.address,
        radius:this.state.radius,
        datestart:this.state.datestart,
        dateend:this.state.dateend,
        category:this.state.category
    })
    .then(res => {
      this.props.onSubmit(res.data);
    })
    .catch(function (error) {
      console.log(error);
  });
  };
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value= {this.state.address} onChange={(event) => this.setState({address: event.target.value})}
        placeholder="address" required/>

        <input type="number" value= {this.state.radius} onChange={(event) => this.setState({radius: event.target.value})}
        placeholder="radius" required/>

        <input type="text" value= {this.state.datestart} onChange={(event) => this.setState({datestart: event.target.value})}
         placeholder="datestart"/>

        <input type="text" value= {this.state.dateend} onChange={(event) => this.setState({dateend: event.target.value})}
         placeholder="dateend" />

        <input type="text" value= {this.state.category} onChange={(event) => this.setState({category: event.target.value})}
        placeholder="category" />

        <button type="submit"> Search</button>
      </form>
    );
}
};
export default Form;
