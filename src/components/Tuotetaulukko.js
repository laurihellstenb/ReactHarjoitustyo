import React, {
  Component
} from 'react';
import Tuotelista from './Tuotelista';
import {
  haeKaikkiTuotteet
} from "../api/TuoteApi";

class Tuotetaulukko extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tuotteet: []
    };
  }

  componentDidMount = () => {
    haeKaikkiTuotteet(this.kasitteleVastaus);
  }

  kasitteleVastaus = (data, status) => {
    if (status != 503) {
      this.setState({tuotteet: data});
    }
  }

  render() {
    return ( <
      div >
      <
      Tuotelista tuotteet = {
        this.state.tuotteet
      }
      /> < /
      div >
    );
  }
}

export default Tuotetaulukko;
