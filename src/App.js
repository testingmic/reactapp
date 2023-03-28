import logo from './logo.svg';
import './App.css';

const DEVELOPER = "Emmallex Technologies";

function Footer() {
  return (
    <div>
      All rights reserved &copy; {DEVELOPER}
    </div>
  )
}

function Header() {
  return (
    <div className='wrapper'>
      <div>
        <h1>Hello World</h1>  
      </div>
      <div>
        This is the test header
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

function App() {
  return <Wrapper />
}

export default App;
