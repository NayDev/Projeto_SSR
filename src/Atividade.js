import React from 'react';


export default props => {

    return (
       
        <div className="jumbotron text-center">
            <h1 className="bg-primary p-5">Atividade Recode Pro {props.ano}!</h1>
            <p className="lead p-3">Este é um simples componente usando SSR.</p>
            <hr className="my-4" />
            <p className="p-5"> Todo o processamento e renderização dos 
                componentes é realizado pelo servidor, 
                que, no momento da requisição, usa seus recursos computacionais para processar tudo localmente. <br /> 
                SSR, sigla de Side Server Rendering (renderização do lado do servidor)
            </p>
            <a className="btn btn-primary btn-lg" href="https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/" target="_blank"role="button">Leia mais</a>
        
            <footer className="text-center text-lg-start my-5">
                <div className="text-center" >
                   Nayara Suelen ♥  2021
                </div>
            </footer>
      </div>
    )

};