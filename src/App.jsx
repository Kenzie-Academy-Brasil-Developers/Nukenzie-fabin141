import { useState } from 'react';
import './App.css';
import  HomePage from "./components/homePage"
import MainPage from "./components/mainPage"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  
  return (
    <div>
      <div>
        
        {isLogin ? (
        <div>
          <MainPage setIsLogin={setIsLogin}/>
        </div>)
        :
        (<HomePage setIsLogin={setIsLogin} />)}
    
      </div>
    </div>
  );
}

export default App;