import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useGetAllTypes from '../hooks/useGetAllTypes';

const ListAllTypes = () => {
  const { types } = useGetAllTypes();

  if (!types) {
      return <div>En attente</div>;
  }
    
  return (
      <section>
        <Header />
          {types?.map((type) => {
              return (
                  <article key={type.name}>
                      <Link to={`/type/${type.name}`}>
                          <p>{type.name}</p>
                          <img src={type.image} alt={type.name} />
                      </Link>
                  </article>
              );
          })}
      </section>
  );
}

export default ListAllTypes;
