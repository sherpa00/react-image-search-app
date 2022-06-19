
function FullImage(props) {

    const handleClick = () => {
        props.handleFullImage();
    }

    const handleLeft = (e) => {
        props.handlePrev(props.id);
    }

    const handleRight = (e) => {
        props.handleNext(props.id);
    }

    return ( 
        <div className="fullImage">
            <div className="img-slider">
                <button onClick={handleLeft}><i className="fa fa-angle-left"></i></button>
                <img src={props.source} onClick={handleClick} alt="pic"/>
                <button onClick={handleRight}><i className="fa fa-angle-right"></i></button>
            </div>
        </div>
     );
}

export default FullImage;