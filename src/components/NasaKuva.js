import React, {Component} from 'react';

class NasaKuva extends Component {
    constructor(props) {
        super(props);
        this.state = {url: "", explanation: "", title: "", date: "", media_type:"", hdurl: ""};
    }
    
    componentDidMount = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=XiTYjHnmAInZfHUvaKRkehUG8CBh3MMD5Up5fEQR")
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({
                url: responseJson.url,
                explanation: responseJson.explanation,
                title: responseJson.title,
                date: responseJson.date,
                media_type: responseJson.media_type, 
                hdurl: responseJson.hdurl
            });
        })
        .catch((error) => {
            console.error(error);
        })
}
 
    render() { 
        if (this.state.media_type === "video") { 
              return(
            <div class="nasa">   
            <b> {this.state.title}  </b> ({this.state.date})<p />
            {this.state.explanation}<p />
            
            <iframe align="middle" width="420" height="315" src={this.state.url}></iframe>
                </div>
            );
            
        } else {
           return(
            <div class="nasa">   
            <b> {this.state.title}  </b> ({this.state.date})<p />
            {this.state.explanation}<p />
               
            <a href={this.state.hdurl}>
            <img align="middle" src={this.state.url} alt=""/></a>  
                </div> 
            );
        }      
    }    
}

export default NasaKuva;