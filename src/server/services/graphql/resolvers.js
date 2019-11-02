import logger from '../../helpers/logger';

const posts = [
  {
      id: 1,
      text: 'Lorem ipsum',
      user: {
          avatar: '/uploads/avatar1.png',
          username: 'Test User'
      }
  },
  {
      id: 2,
      text: 'Lorem ipsum',
      user: {
          avatar: '/uploads/avatar2.png',
          username: 'Test User 2'
      }
  }
];

const resolvers = { 
  RootQuery: {
    posts(root, args, context) {
      return posts;
    },
  },
  RootMutation: {
    addPost(root, { post, user }, context) {
      const newPost = {
        ...post,
        user,
        id: posts.length + 1
      };
      posts.push(newPost);
      logger.log({ level: 'info', message: 'Post was created' });
      return newPost;
    }
  }
};

export default resolvers;