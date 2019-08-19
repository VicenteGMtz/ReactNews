import React, { Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'


class App extends Component {

  //inicializar el state como un arreglo y poder guardar ahi las noticias
  state = { 
    noticias : []
   }


  
  componentDidMount(){
      this.consultarNoticias();
  }

  //consumir api por medio de async  _________________________________________________________________
  consultarNoticias= async (categoria = 'general')=>{
      //end point
      const url =`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=def912e15b794e468979f0975c1b9ad2`;


      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(noticias.articles);
  
      //establecer las noticias en el arreglo state noticias 
      //noticias : noticias.articles solo extrae los articulos
      this.setState({
        noticias : noticias.articles
      })

  }

  render() { 
    return ( 
        <Fragment>
            <Header
            titulo = 'Noticias React API'
            />
            <div className="container white contenedor-noticias">
              <Formulario
                consultarNoticias={this.consultarNoticias}
              />
              <ListaNoticias
                noticias ={this.state.noticias} 
              />

            </div>
        </Fragment>
     );
  }
}
 
export default App;

