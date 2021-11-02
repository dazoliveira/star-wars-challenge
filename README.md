# Star Wars Challenge

Star Wars Challenge is a basic experience that uses as main technologies: typescript, react, redux-toolkit, redux-saga, material UI and some unit tests using react testing library Jest.

The main aplication goal is to make twoo racing requests and show a result of the winner one,
showing for the user what "path" is your "destiny", it is dark side or jedi, choosing your master "Darth Vader" or "Luke Skywalker" when "start" or "choose your path again, Padawan" button is clicked.

## Getting Started

### Dependencies

* git
* node (can be latest version, I'm using 15.8.0)
* yarn (can be latest version, I'm using 1.22.10)

### Installing

* Clone this repository into your local repository
* Enter into the project repository and run `yarn` to install all dependecies

```
yarn
```

### Executing program

* inside the projct folder run yarn start
```
yarn start
```

## Help

* for testing
```
yarn test
```

## Features

- route: /welcome
- route: /jedi-vs-darkside

CLICK START
- Call API to choose a path
- Success --> redirect for show your master page
- FAILED --> stay on the page

CLICK "choose your path again, Padawan"
- Call API to choose a path
- Success --> stay and show your master
- FAILED --> back to welcome page and clear your path and master

CLICK BACK
- Redirect to welcome page
- Clear your path

## Author
Douglas Aguiar  
douglaszanquetta@hotmail.com