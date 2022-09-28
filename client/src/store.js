import { createAction } from "@reduxjs/toolkit";
import {createStore} from "redux";


const addText = createAction("ADD")
const deleteText = createAction("DELETE")

const reducer = (state = [], action) => {
    switch (action.type) {
        case addText.type:
            return [{ text: action.text, id: Date.now() }, ...state];
        case deleteText.type:
    }
}