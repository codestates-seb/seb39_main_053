import axios from "axios";
import { useState, useEffect } from "react";

const usePostAxios = (url, postdata) => {
    const [data, setData] = useState([]);

        axios
        .post(url, postdata)
        .then((res) => {
            setData(res.data);
            // console.log(res.data);
        })
        .catch(err => console.log(err))

    return data;
}

export default usePostAxios;