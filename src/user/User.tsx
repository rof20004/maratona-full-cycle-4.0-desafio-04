import React from 'react';
import './User.css';
import axios from 'axios';

export default class User extends React.Component<{}, { users: any }> {

  state = {
    users: []
  }

  async componentDidMount () {
    try {
      const { data } = await axios.get('https://reqres.in/api/users');
      this.setState({ users: data.data });
      console.log(this.state.users);
    } catch (error) {
      this.setState({ users: [] });
    }
  }

  render () {
    return (
      <div className="User" >
        <header className="User-header">
          <table id="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Avatar</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map(user => {
                return (<tr>
                  <td>{user['id']}</td>
                  <td>{user['first_name']}</td>
                  <td>{user['last_name']}</td>
                  <td>{user['email']}</td>
                  <td><img src={user['avatar']} alt="Avatar person" /></td>
                </tr>)
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }

}