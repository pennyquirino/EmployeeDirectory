import React from "react";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import SearchSection from "./Components/SearchSection/SearchForm";
import Wrapper from "./Components/Wrapper/Wrapper";


import API from "./Utils/API";
import "./App.css";


class App extends React.Component {
  state = {employees: [], search: ''};

  componentDidMount() {
    API.search()
    .then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.results.map((e, i) => ({
          firstName: e.name.first,
          lastName: e.name.last,
          email: e.email,
          phone: e.phone,
          picture: e.picture.large,
          key: i,
        })),
      });
    })
    .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchEmployee = (filter) => {
    console.log("Search", filter);

    const SearchedList = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({employees: SearchedList});
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("Handle", this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Button Clicked", this.state.search, e);
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
          
              <h3>Employee Directory</h3>
              <SearchSection
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit} />
           
          </div>

          <div className="row">
            
              <table className="table">
                <tr>
                  <th>Picture</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>

                {[...this.state.employees].map((item) => (
                  <EmployeeCard
                  picture={item.picture}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  phone={item.phone}
                  email={item.email}
                  key={item.key} />

                ))}
              </table>
            
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
