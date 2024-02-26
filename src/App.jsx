import { useState } from 'react';
import './App.css'
import Cookies from 'js-cookie';

function App() {

  // const SetCookie = () => {
  //   Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
  //     expires: 7,
  //   });
  // };

  // const GetCookie = () => {
  //   alert(Cookies.get("token"));
  // };

  // const RemoveCookie = () => {
  //   Cookies.remove("token");
  // }

  const [isCookieSet, setCookie] = useState(Cookies.get("cookieConsent"));

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", true);
    setCookie(true);
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent");
    setCookie(false);
  }
  

  return (
    // <div style={{textAlign: "center"}}>
    //   <h6>1. Click on Set Cookie to set data in cookies</h6>
    //   <h6>2. Click on Get Cookie to display the data</h6>
    //   <h6>2. Click on Remove Cookie to remove data from cookies</h6>
    //   <button onClick={SetCookie}>Set Cookie</button>
    //   <button onClick={GetCookie}>Get Cookie</button>
    //   <button onClick={RemoveCookie}>Remove Cookie</button>
    // </div>
    <div>
      <div>
        <p>
          This website uses cookies to improve your experience. Do you accept
          cookies?
        </p>
        <button onClick={handleAcceptCookies}>Accept</button>
        <button onClick={handleRejectCookies}>Reject</button>
      </div>
      <sub>Cookie set: {isCookieSet ? <b>Yes</b> : <b>No</b>}</sub>
    </div>
  )
}

export default App
