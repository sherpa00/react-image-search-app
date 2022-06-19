import { useEffect, useState } from "react";

const key = "OvIa7sBN1L8t2_HDDbJmKwQvsiCYEP85vTtQjmHmPhU";
const url = "https://api.unsplash.com/photos/random?client_id=";

function useGetImg() {

    const [image, setImage] = useState(null);

    /*useEffect(() => {
        let base = url + key;
        fetchData(base);
    },[])*/

    const fetchData = (url) => {
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            setImage(data);
        })
    }

    return {image,fetchData};
}

export default useGetImg;