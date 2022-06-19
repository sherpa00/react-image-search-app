function SingleBox(props) {

    if (props === null) {
        return <h1>NOTHING TO SHOW</h1>
    }

    const handleClick = () => {
        props.onClickHandle(props.id);
    }

    return ( 
        <div className="singleBox">
            <img src={props.imgSrc} onClick={handleClick} alt="pic"/>
        </div>
     );
}

export default SingleBox;