import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import List from './components/List';

function App() {
  const [list, setList] = useState([
    {
      id: uuidv4(),
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      id: uuidv4(),
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      id: uuidv4(),
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      id: uuidv4(),
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      id: uuidv4(),
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      id: uuidv4(),
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <List list={list} />
  );
}

export default App;
