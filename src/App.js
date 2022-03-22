import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/ContentContainer/Content";
import ChatList from "./components/ChatsList/ChatList";
import MainContent from "./components/MainContent/MainContent";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import RegisterLogin from "./components/Register-Login/Register-Login";
import SignOut from "./components/SignOut/SignOut";
import "./app.scss";

const App = () => {
  return (
    <>
      {/* <div className="container"> */}
      {/* <Sidebar /> */}
      {/* <Content> */}
      {/* <ChatList /> */}
      {/* <MainContent /> */}
      {/* <Profile /> */}
      {/* <Settings /> */}
      {/* <SignOut /> */}
      {/* </Content> */}
      <RegisterLogin />
      {/* </div> */}
    </>
  );
};

export default App;
