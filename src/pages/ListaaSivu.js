import React, { Component } from 'react';
import Tuotetaulukko from '../components/Tuotetaulukko';
import Otsikko from '../components/Otsikko';



class ListaaSivu extends Component {
render() {
return (
<div>
<Otsikko teksti="Tuotteet valikoimassa"/>
<p></p>
<Tuotetaulukko/>
</div>
);
}
}
export default ListaaSivu;
