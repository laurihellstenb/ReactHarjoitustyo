import React, {Component} from 'react';
import Otsikko from '../components/Otsikko';
import NasaKuva from '../components/NasaKuva';

class Avaruuskuva extends Component {
    render() {
        return ( 
            <div>
            <Otsikko teksti="Päivän avaruuskuva by NASA"/>
            <NasaKuva/>
             </div>
        );
}
}
export default Avaruuskuva;