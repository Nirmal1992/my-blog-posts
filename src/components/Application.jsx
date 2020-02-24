import React from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';
import { generatePost } from '../utils/generatePost';

class Application extends React.Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = await firestore
      .collection('post')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(generatePost);
        this.setState({ posts });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { posts, user } = this.state;

    return (
      <main className='Application'>
        <h1>My Blog Posts</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
