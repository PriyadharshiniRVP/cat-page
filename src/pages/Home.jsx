import CatCard from "../Components/Catcard"
import {useState} from 'react'

function Home(){
     const [searchQuery,setSearchQuery]=useState("");
    
     const cats=[
        {id:1,name:"persian",breed:"persian",info:"The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle.",
            url:"cat1.jpg"},
     {id:2,name:"indie",breed:"indie",info:"The indie cat is a short-haired breed of cat characterized by its playful nature and curious personality.",
        url:"https://cdn2.thecatapi.com/images/123456789.jpg"}]

        const handleSearch=()=>{
            alert(searchQuery)
            e.preventDefault()
        };


         return (<div className="home-page">
            <form onSubmit={handleSearch} className="search-form">
           <input type="text"
            placeholder="search for cats" 
            className="search-input"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button type="submit" className="search">Search</button></form>
        <div className="cat-cards">
            {cats.map((cat)=> <CatCard cat={cat} key={cat.id}/>) }
</div>
         </div>
         
        );

}
export default Home