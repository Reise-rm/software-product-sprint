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