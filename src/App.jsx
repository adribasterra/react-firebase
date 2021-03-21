import './App.css';
import Hey from './components/first.jsx';
import Counter from './components/counter.jsx';
import List from './components/list.jsx';
import Temperature from './components/temperature.jsx';
import Form from './components/form.jsx';

function App() {
  return (
    <div className="App">
        <Hey></Hey>
        <Counter></Counter>
        <List></List>
        <Temperature></Temperature>
        <Form></Form>
    </div>
  );
}

export default App;
