import React, { Component } from 'react';
import {lisaaTuoteKantaan} from '../api/TuoteApi';

class Lomake extends Component {
    constructor(props) {
        super(props);
        this.muuta = this.muuta.bind(this);
        this.lisaa = this.lisaa.bind(this);
        this.state = {nimi: "", hinta: "", kuvaus: ""};
    }

    muuta(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    lisaa (e) {
       e.preventDefault();
       lisaaTuoteKantaan({nimi: this.state.nimi, hinta: this.state.hinta, kuvaus: this.state.kuvaus}, this.kasitteleLisays);
    }

    kasitteleLisays = (status) => {
      if (status === 200) {
        document.location='listaa';
      } else {
        alert(status);
      }
    }


    render() {
        return(

<div style={ {color: '#0066ff', padding:'12px 20px'} }>
        <form>
             <div class="col-25">
            <label htmlFor="nimi">Nimi</label>     </div>
                <div class="col-75">
            <input type="text" value={this.state.nimi}
            name="nimi" onChange={this.muuta} /></div><br/>

             <div class="col-25">
            <label htmlFor="hinta">Hinta</label>     </div>
              <div class="col-75">
            <input type="text" value={this.state.hinta}
            name="hinta" onChange={this.muuta} /></div><br/>

             <div class="col-25">
            <label htmlFor="kuvaus">Kuvaus</label>     </div>
              <div class="col-75">
            <input type="text" value={this.state.kuvaus}
            name="kuvaus" onChange={this.muuta} /></div><br/>

            <input type="submit" value="Lisää" onClick={this.lisaa}/>
        </form>
            </div>
        );
    }
}

export default Lomake;
