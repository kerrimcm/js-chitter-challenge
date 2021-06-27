# Chitter Challenge in JS

Redo of this challenge, testing in Jest: https://github.com/kerrimcm/frontend-api-challenge 

Using repo to practice mocking API calls


---------
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});

-------

import axios from 'axios'

axios.get('url')
await Response
log response ....


-----

const { default: axios } = require('axios');

const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps';

const displayPosts = async (url) => {
  try {
    const response = await axios.get(url);
    response.data.forEach((post) => {
      console.log({
        post: post.body,
        user: post.user.handle,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

displayPosts(url);