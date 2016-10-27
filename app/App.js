import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Make a Porfolio",
    description: "Devise a **Portfolio** to showcase work",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some Code",
    description: "Coding along with supplementary Book. The complete source can be found at [github](https://github.com/FrontendMasters/react-enlightenment)",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Tutorial example",
        done: true
      },
      {
        id: 2,
        name: "Porfolio example",
        done: false
      },
      {
        id: 3,
        name: "Self Experimentation",
        done: false
      }
    ]
  },
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
