import React, { PureComponent } from 'react';
import BasicForm from './BasicForm';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        map: '',
      },
    };
    setTimeout(() => {
      this.setState({
        user: {
          username: 'safdasdf',
          email: 'asd@qq.com',
          map: 'sdfasdf',
        },
      });
    }, 2000);
  }

  render() {
    const { user } = this.state;
    return <BasicForm user={user} />;
  }
}
