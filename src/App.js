import 'bulma/css/bulma.min.css';
import './assets/css/index.css';
import HomeContent from './components/pages/HomeContent';
import DefaultLayout from './layout/Default';

function App() {
  return (
    <DefaultLayout>
      <HomeContent />
    </DefaultLayout>
  );
}

export default App;
