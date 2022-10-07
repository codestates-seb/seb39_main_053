import axios from "axios";
import { useState, useEffect } from "react";

const useGetAxios = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setData(res.data);
            // console.log(res.data);
        })
        .then(() => setIsLoading(false))
        .catch(err => console.log(err))
    },[url]);

    return data;
}

export default useGetAxios;