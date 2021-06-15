import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBindings from './components/EventBindings';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './AppStyle.css';
import style from './AppStyle.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleB from './components/LifeCycleB';









class App extends Component{
  render(){
  return (
    <div className="App">
      <LifeCycleA/>
        {/*  <Form/>
       <h1 className= 'error'> AppStyle-in yellow</h1>
       <h1 className= {style.message}> AppStyle-in violet</h1>
     <Inline/>
     <StyleSheet isprimary = {true} />
      <NameList/>
       <UserGreetings/>
       <ParentComponent/>
        <EventBindings/>
         <FunctionClick/>
        <ClassClick/>
        <Counter/>
        <Message/> 
        <Greet name="Kick buttowski" heroname="gasper">
        <p>SPD emergency naanga ulagathai kapom!!</p>
        </Greet>
        <Greet name="Kick buttowski" heroname="gasper">
        <button>Thadal Adi!????????????!</button>
        </Greet>
        <Welcome name="Kick buttowski" heroname="gasper">
        <p>SPD emergency naanga ulagathai kapom!!</p>
        </Welcome>
        <Welcome name="Kick buttowski" heroname="gasper">
        <button>Thadal Adi</button>
        </Welcome>    */}  
    </div> 
  );
}} 

export default App;
