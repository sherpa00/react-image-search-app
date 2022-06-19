function SearchImage({val, onChangeVal, onValSubmit}) {

    const handleValSubmit = (e) => {
        e.preventDefault();
        onValSubmit();
    }

    const handleValChange = (e) => {
        onChangeVal(e.target.value);
    }

    return ( 
        <div className="searchImage" id="search">
            <h2>SEACH IMAGES</h2>
            <form onSubmit={handleValSubmit}>
                <input
                    type="text"
                    placeholder="search something..."
                    value={val}
                    onChange={handleValChange}
                />
            </form>
        </div>
     );
}

export default SearchImage;