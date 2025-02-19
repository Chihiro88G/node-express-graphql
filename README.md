* to send a Query (GET) request

uri: localhost.../graphql
type: POST request
content type: application/json
body: 
{
  'query': '{ hello { text } }'
}

{
  login(email: 'test@test.com', pw: 'testpw') {
    token
    userId
  }
}


* to save data using GraphiQL

mutation {
  createUser(userInput: {email: 'test@test.com', name: 'Satoshi', pw: 'satoshi-pw'}) {
    _id
    email
  }
}