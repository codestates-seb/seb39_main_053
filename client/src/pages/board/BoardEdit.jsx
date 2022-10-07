import React,{ useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function BoardEdit() {
    const location = useLocation()
    const navigate = useNavigate()
    const {id, board_title, board_body} = location.state;
    const [boardEdit, setBoardEdit] = useState({
        board_title,
        board_body
    })

    const handleTitleChange = (event) => {console.log(event.target.value)
        setBoardEdit({...boardEdit, board_title: event.target.value})
    }
    const handleEditSubmit = () => {
        axios.patch(`http://localhost:5000/board/${id}`)
        .then((res) => {console.log(res)
            navigate(`/boardDetail/${id}`)
        })
    }

  return (
    <>
    <div>BoardEdit</div>
    <input type='text' placeholder='제목을 수정해주세요!' value={board_title} onChange={handleTitleChange}></input>
    <button onClick={handleEditSubmit}>등록</button>
    </>
  )
}

export default BoardEdit