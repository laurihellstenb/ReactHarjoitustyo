import React, {Component} from 'react';
import Otsikko from '../components/Otsikko';
import Lomake from '../components/Lomake';

class LisaaSivu extends Component {
    render() {
        return (
            <div>
            <Otsikko teksti="Lisää tuote"/>
            <Lomake/>
             </div>
        );
}
}
export default LisaaSivu;
