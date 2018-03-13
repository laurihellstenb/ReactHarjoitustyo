import React from 'react';

function Tuote(props) {
    return (
      <div>
        Nimi: { props.tuote.nimi.toUpperCase() }<br />
        Hinta: { props.tuote.hinta } <br />
        Kuva: { props.tuote.kuva }<br />
        Kuvaus: { props.tuote.kuvaus }<br/><br/>
      </div>
    );
}

export default Tuote;
