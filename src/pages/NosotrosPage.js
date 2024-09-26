import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus officia enim suscipit sunt mollitia
                    velit error voluptatem numquam natus repellendus ipsum consectetur blanditiis odio illo alias eum porro,
                    recusandae quas.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in sed non ad sint laborum. Aperiam
                    tempora modi commodi hic doloremque, maxime atque harum magnam! Neque maiores sit commodi totam.</p>
                <div className="staff">
                    <h2>Staff</h2>
                    <div className="personas">
                        <div className="persona">
                            <img src="images/nosotros/nosotros1.jpg" className="nos" alt="Nicolas Morales"/>
                                <h5>Nicolas Morales</h5>
                                <h6>Conductor - Director General</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum voluptatibus earum
                                    officiis porro asperiores deleniti labore nostrum, quas totam tenetur iure! Blanditiis nemo
                                    accusantium iusto, facilis velit modi hic.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros2.jpg" className="nos" alt="Rodrigo Salinas"/>
                                <h5>Rodrigo Salinas</h5>
                                <h6>Musicalizador - Organizador General</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum voluptatibus earum
                                    officiis porro asperiores deleniti labore nostrum, quas totam tenetur iure! Blanditiis nemo
                                    accusantium iusto, facilis velit modi hic.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros3.jpg" className="nos" alt="Candela Kloster"/>
                                <h5>Candela Kloster</h5>
                                <h6>RRPP - Jefa De Compras</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum voluptatibus earum
                                    officiis porro asperiores deleniti labore nostrum, quas totam tenetur iure! Blanditiis nemo
                                    accusantium iusto, facilis velit modi hic.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros4.jpg" className="nos" alt="Cristian Chavez"/>
                                <h5>Cristian Chavez</h5>
                                <h6>Gerente de Consumibles</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum voluptatibus earum
                                    officiis porro asperiores deleniti labore nostrum, quas totam tenetur iure! Blanditiis nemo
                                    accusantium iusto, facilis velit modi hic.</p>
                        </div>
                        <div className="persona">
                            <img src="images/nosotros/nosotros5.jpg" className="nos" alt="Nicolas Bustamante"/>
                                <h5>Nicolas Bustamante</h5>
                                <h6>Jefe de Coreografia</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam laborum voluptatibus earum
                                    officiis porro asperiores deleniti labore nostrum, quas totam tenetur iure! Blanditiis nemo
                                    accusantium iusto, facilis velit modi hic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;