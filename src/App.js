import { Cards } from './componets/Cards/Cards';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import { Context } from './context/context';


function App() {


  return (
    <Context>
      <Header />
      <Cards />
      <Footer />
    </Context>

  );
}

export default App;
