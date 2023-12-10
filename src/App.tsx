import React from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from './components/Badge';
import Button from './components/Button';
import { PaperAirplaneIcon, CameraIcon, DocumentIcon } from '@heroicons/react/24/solid'
import Card from './components/Card';



function App() {
  return (
    <div className='App'>
     <section className='card-container'>
    <Card
    body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
    title='Are you ready for Christmas?'
    image='https://images.unsplash.com/photo-1702225758234-133445cfacc8?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    badge={{
      text: 'Christmas',
      filled: true,
    }}
    indicator='Read'
    subtitle='Interesting facts'
    button={{
      text:'Send to a friend',
      href:'#',
      type:'primary',
      filled: true,
      icon:<PaperAirplaneIcon/>,
      }}
    />
     <Card
    body='It was Wednesday before Christmas, John decidd to go out for a run and well run into an old man with basket full of nuts. ' 
    title='Read post about Christmas miracle in Reykjavík'
    image='https://images.unsplash.com/photo-1636958926605-2016302f4e35?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    badge={{
      text: 'New post',
      filled: true,
    }}
    subtitle='Christmas novels'
    button={{
      text:'Read post',
      href:'#',
      type:'secondary',
      filled: false,
      icon:<DocumentIcon/>,
      }}
    />
     <Card
    body='Do you know how to edit pictures and why it is important? Read more and begin journey of editing' 
    title='New styles of edditing'
    image='https://images.unsplash.com/photo-1506545966410-23c64c8f88d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    badge={{
      text: 'New photo',
      filled: false,
    }}
    indicator='Read'
    subtitle='Great photographers'
    button={{
      text:'Your picture',
      href:'#',
      type:'primary',
      filled: true,
      icon:<CameraIcon/>,
      }}
    />
      </section>
    </div>
  );
}

export default App;
