import { useState, useEffect } from 'react';
const useGetRandomTeam = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('https://pokebuildapi.fr/api/v1/random/team')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setTeam(data);
        });
    }, []);
    return { team };
};
export default useGetRandomTeam;