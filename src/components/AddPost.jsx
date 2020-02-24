import React, { Component } from 'react';
import { firestore } from '../firebase';

class AddPost extends Component {
  state = { title: '', content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { title, content } = this.state;
    event.preventDefault();
    const post = {
      title,
      content,
      user: {
        uid: '1111',
        displayName: 'Steve Kinney',
        email: 'steve@mailinator.com',
        photoURL: 'http://placekitten.com/g/200/200',
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    };
    firestore.collection('post').add(post);
    this.setState({ title: '', content: '' });
  };

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='AddPost'>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={title}
          onChange={this.handleChange}
        />
        <textarea
          name='content'
          placeholder='Body'
          value={content}
          onChange={this.handleChange}
        />
        <input className='create' type='submit' value='Create Post' />
      </form>
    );
  }
}

export default AddPost;
