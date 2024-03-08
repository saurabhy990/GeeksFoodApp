import Header from './components/Header';
import './App.css';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer';
import Card from './components/Layout/Card';
import Hero from './components/Layout/Hero';
import QuotePage from './components/Layout/QuotePage/QuotePage';
// import QuoteCard from './commercial/Layout/QuotePage/QuoteCard';


function App() {
  return (
    
  
    
     <>
         <Header/>
       {/* <Layout/>
       <Hero/>
       <div className='flex flex-wrap p-5 m-5 gap-10 text-center justify-center'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> 
       </div>*/}
       <QuotePage/>
       <Footer/>


        
     </>

  
  );
}

export default App;
