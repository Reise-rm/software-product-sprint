// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Travelling', 'Driving', 'Reading Books', 'Watching Movies', 'Listening to Music', 'Singing Songs', 'Writing Thoughts', 'Taking Photos', 'Wondering'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}


/**
 * Adds a random singer to the page.
 */
function addRandomSingers() {
  const singers =
      ['Jack Johonson', 'Bruno Major', 'Adele', 'Sam Smith', 'Billie Eilish', '陈粒', '郭顶', '许嵩', '周杰伦', '余佳运', '李荣浩', '落日飞车', '橘子海'];

  // Pick a random singer.
  const singer = singers[Math.floor(Math.random() * singers.length)];

  // Add it to the page.
  const singerContainer = document.getElementById('singer-container');
  singerContainer.innerText = singer;
}


/**
 * Adds a random story to the page.
 */
function addRandomStories() {
  const stories =
      ['一代宗师', '白日焰火', '少年的你', '白夜行', '地球最后的夜晚', 'Jason Bourne', 'Prison Break', 'Green Book', 'Everything I Never Told You', 'Her', 'The Long Goodbye', 'Fleabag', '乌有园', '红色沙漠', 'The End of The xx World'];

  // Pick a random singer.
  const story = stories[Math.floor(Math.random() * stories.length)];

  // Add it to the page.
  const storyContainer = document.getElementById('story-container');
  storyContainer.innerText = story;
}

/**
 * Fetches a greeting from the server and adds it to the DOM.
 */
function getGreeting() {
  console.log('Fetching a greeting.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addGreetToDom);
}

/** Adds a random quote to the DOM. */
function addGreetToDom(greet) {
  console.log('Adding greet to dom: ' + greet);

  const greetContainer = document.getElementById('greet-container');
  greetContainer.innerText = greet;
}

/**
 * Fetches comments from the servers and adds them to the DOM.
 */
function getComments() {
  
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentsListElement = document.getElementById('comments-container');
    commentsListElement.innerHTML = '';
    for(let i = 0; i < comments.length; i++){
        commentsListElement.appendChild(
            createListElement(comments[i].comment));
    }
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}