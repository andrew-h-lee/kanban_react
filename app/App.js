import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Make a Porfolio",
    desciption: "Devise a Portfolio to showcase work",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some Code",
    desciption: "Coding along with accompanied Book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Tutorial example",
        done: true
      },
      {
        id: 1,
        name: "Porfolio example",
        done: false
      },
      {
        id: 1,
        name: "Self Experimentation",
        done: false
      }
    ]
  },
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
