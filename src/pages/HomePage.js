import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/LaplayaFestival1.png" height="220" alt="Festival"/>
                <img src="images/home/LaplayaFestival3.png" height="220" alt="Festival"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maiores eligendi voluptatum doloremque ullam. Pariatur delectus aliquid architecto ipsa iusto itaque officiis odit unde quaerat. Delectus reprehenderit tempore ipsum optio!</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Rodri Reydelasllamas</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;