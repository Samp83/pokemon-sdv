import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    
    const HandleSubmitSearch = (event) =>{
      event.preventDefault();
      const query = event.target.query.value; 
      navigate("/search-results?query=" + query) 
    };
    return (
        <>
            <header>
                <h1>Jeu Pokémon</h1>
            </header>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
            </ul>
            <form method="get" onSubmit={HandleSubmitSearch}>
          <label>
            Recherche :
            <input type="text" name="query" />
          </label>

          <input type="submit" />
        </form>
        </>
    )
}

export default Header;