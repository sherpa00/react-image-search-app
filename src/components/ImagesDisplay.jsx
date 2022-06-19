import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addImg from "../actions/addImg";
import FullImage from "./fullImage";
import SearchImage from "./searchImage";
import SingleBox from "./singleBox";



//const url = "https://dog.ceo/api/breeds/image/random/16";
//const new_url = "https://api.opensea.io/api/v1/assets?format=json";
const api = "27016666-b69d81a2b146c8ebf36f78e74";
const img_url = `https://pixabay.com/api/?key=${api}&q=`;

function ImagesDisplay() {

    const [full,setfull] = useState(false);
    const [fullImg,setFullImg] = useState("");
    const [searchText,setSearchText] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    //img state redux
    const myImg = useSelector(store => store);

    //dispatch function
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(img_url);
    },[])

    const fetchData = (base) => {
        fetch(base).then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(addImg(data.hits));
        })
    }

    const handleClick = (id) => {
        console.log(id);
        setFullImg(id);
        setfull(true);
    }

    const handleFull = () => {
        setfull(false);
    }

    const prev = (id) => {
        if (id === 0) {
            id = myImg.length - 1;
        } else {
            id--;
        }
        setFullImg(id);
    }

    const next = (id) => {
        if (id === myImg.length - 1) {
            id = 0;
        } else {
            id++
        }
        setFullImg(id);
    }

    const handleTextChange = (text) => {
        console.log("text changed");
        setSearchText(text);
    }

    const handleTextSubmit = () => {
        console.log("Text submitted");
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        },1500);
        let new_url = img_url + searchText;
        fetchData(new_url);
    }

    return ( 
        <>
        <SearchImage
            val={searchText}
            onChangeVal={handleTextChange}
            onValSubmit={handleTextSubmit}
        />
        {
            isLoading ? <h1>LOADING...</h1> : null
        }
        <div className="imagesDisplay" id="images">
            {
                myImg === null || isLoading ? null : myImg.map((el,index) => {
                    return <SingleBox 
                                key={index}
                                imgSrc={el.largeImageURL}
                                onClickHandle={handleClick}
                                id={index}
                            />
                })
            }
        </div>
        {
            full ? <FullImage handleFullImage={handleFull} source={myImg[fullImg].largeImageURL} handlePrev={prev} handleNext={next} id={fullImg}/> : null
        }
        </>
     );
}

export default ImagesDisplay;