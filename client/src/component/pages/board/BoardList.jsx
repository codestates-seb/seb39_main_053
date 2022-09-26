import React, { useEffect, useState } from 'react'
import axios from 'axios';


function BoardList() {
    const [boardList, setBoardList] = useState([]);
    
    useEffect(() => {
      axios
      .get("http://localhost:4000/board")
      .then((res) => {
        setBoardList(res.data);
      })
    },[])
  
  
    return (
    <>
      <div>boardList</div>
      <div>
        {boardList.map((e) => {
          const {id, board_title, board_body, board_nickname} = e;

          return <div key={id}>
            <div>{board_title}</div>
            <div>{board_body}</div>
            <div>{board_nickname}</div>
          </div>

        })}

      </div>
    </>
  )
}

export default BoardList