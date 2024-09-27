import React from "react";
import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (props) => {
    return (
        <main className="holder">
        <h2>Novedades</h2>
        <div className="novedades">
            <h3>POPE XXL 21/09</h3>
            <h4>Fiesta de la primavera</h4>
            <p>Descripcion - Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae voluptatem quibusdam nihil quia, maxime molestiae sunt accusamus magni id, doloremque repellat cupiditate ad laudantium? Omnis excepturi amet unde esse?</p>
            <hr/>
        </div>
        <div className="novedades">
            <h3>Cumple de Cris 23/09</h3>
            <h4>Fiesta legendaria</h4>
            <p>Descripcion - Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae voluptatem quibusdam nihil quia, maxime molestiae sunt accusamus magni id, doloremque repellat cupiditate ad laudantium? Omnis excepturi amet unde esse?</p>
            <hr/>
        </div>
        <div className="novedades">
            <h3>Picheo 31/10</h3>
            <h4>Halloween en OldSkull</h4>
            <p>Descripcion - Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae voluptatem quibusdam nihil quia, maxime molestiae sunt accusamus magni id, doloremque repellat cupiditate ad laudantium? Omnis excepturi amet unde esse?</p>
            <hr/>
        </div>
    </main>
    );
}

export default NovedadesPage;