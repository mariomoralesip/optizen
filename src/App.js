import 'bootstrap/dist/css/bootstrap.min.css';
import { Page } from './components/Page';
import { Sidebar } from './components/Sidebar';
import { NoConformidades } from './pages/calidad/NoConformidades';

function App() {

  return (
    <div className='d-flex '>
      <Sidebar/>

      <Page title='Calidad'>
          <NoConformidades/>
        </Page>
    </div>
  );
}

export default App;
