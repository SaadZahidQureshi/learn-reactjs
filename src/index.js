import ReactDOM from 'react-dom/client';
import Greetings  from './components/heading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greetings name="test response" isActive={false} hasError={true}/>);
