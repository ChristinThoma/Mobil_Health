import React, { useState, useEffect} from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route,useHistory } from "react-router-dom";
import AppState from "./context/app/AppState";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage";
import TherapistList from "./Components/TherapistList";
import TherapistCard from "./Components/TherapistCard";
import Login from "./Components/Login/Login";
import RegisterPage2 from "./Components/RegisterPage2/RegisterPage2";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Team from "./Components/Team/Team"
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"
import { login, logout, setAuthHeaders} from "./utils/auth";
import UsersContext from "./context/UsersContext"

export default function App() {
  const [credentials, setCredentials] = useState();
  const [usersContext, setUsersContext] = useState();
  const history = useHistory();


  const handleSetCredentials = (e) => {
    e.persist();
    // console.log(e.target.value)
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAuthentication = async () => {
    let isAuthenticated = await login(credentials);
    // console.log({isAuthenticated})
    //here is a mistake, somehow it return undefined and not true
    // isAuthenticated = true
    if(isAuthenticated){
      history.push("/dashboard")
    } else {
      alert("Wrong credentials, try again")
    }
  };

  const handleLogout = async ()=>  {
    logout()
    history.push('/auth')
  }

  //check if there is already a token, if yes, redirect to dashboars
  useEffect(()=>{
    setAuthHeaders() && history.push("/dashboard")
  },[])

  return (
    <AppState>
      <Navbar context={usersContext}/>
      <UsersContext.Provider value={{usersContext, setUsersContext}}>
      <Switch>
        <ProtectedRoute path="/dashboard" onLogout={handleLogout} component={Dashboard} />
        <Route path="/therapistlist">
          <TherapistList />
        </Route>
        <Route path="/therapistcard">
          <TherapistCard />
        </Route>
        <Route exact path="/profile/:id">
          <ProfilePage />
        </Route>
        {/* <Route path="/login">
            <Login />
        </Route>  */}
        <Route path="/registration">
          <RegisterPage2 />
        </Route>
        <Route path="/auth">
          <Login
            onAuth={handleAuthentication}
            onSetCredentials={handleSetCredentials}
          
          />
        </Route>
        {/* <Route path="/registration">
         <RegisterPage/>
        </Route> */}
        <Route path="/team">
          <Team />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      </UsersContext.Provider>
      <Footer  />
    </AppState>
  );
}
