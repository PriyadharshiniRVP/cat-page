function CatCard({cat}){
    function onClick(){
        alert("clicked")

    }
    return(
         <div className="cat-card">
            <div className="cat-image">
                <img src={cat.url} alt={cat.name}/>
                <div className="cat-like">
                    <button className="fav-btn" onClick={onClick}>❤️</button>
                </div>
            </div>
        <div className="cat-info">
            <h3>{cat.breed}</h3>
            <p>{cat.info}</p>
            </div>    

         </div>)

}

export default CatCard
