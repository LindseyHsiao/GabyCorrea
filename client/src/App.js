import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Testimonies from './pages/Testimonies';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Testimonies" element={<Testimonies />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/SignUp" element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
