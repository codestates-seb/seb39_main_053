import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../../component/commons/NavigationBar';

function BoardWrite() {
    const [boardWrite, setBoardWrite] = useState([]);
  return (
    <>
    <Navbar/>
    <div>BoardWrite</div>
    </>
  )
}

export default BoardWrite