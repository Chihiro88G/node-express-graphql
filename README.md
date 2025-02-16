* to send a Query (GET) request

uri: localhost.../graphql
type: POST request
body: 
{
  'query': '{ hello { text } }'
}


* to save data using GraphiQL

mutation {
  createUser(userInput: {email: 'test@test.com', name: 'Satoshi', pw: 'satoshi-pw'}) {
    _id
    email
  }
}