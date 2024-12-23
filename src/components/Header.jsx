import { Link, useNavigate } from "react-router-dom";
import pokeball from "../assets/pokeball.jpg";
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
                <img src={pokeball} alt="pokeball" style={{ marginLeft: '35px' }} />            </header>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/random">Pokémon aléatoire</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/Fight">Combat</Link>
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