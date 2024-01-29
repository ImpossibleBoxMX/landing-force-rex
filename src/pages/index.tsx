import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function HomePage() {
  return (
    <Layout title="Inicio" description="Descripción de la página de inicio">
      <div className={styles.hero}>
        <div className="container">
          <h1>¡Explora Nuestro Mundo Tecnológico!</h1>
          <p>Descubre cómo la tecnología puede cambiar la vida</p>
          {/* Botón de acción */}
          <a href="#mas-informacion" className={styles.button}>Más Información</a>
        </div>
      </div>
      <div className="container">
        <p>En Impossible Box de México exploramos cómo un enfoque tecnológico sólido puede impulsar el bienestar de la sociedad en tres aspectos clave: información, transparencia y transformación.</p>

<h2>Información Accesible para Todos:</h2>
<ul>
  <li>Democratización del Acceso a la Información: Utilizamos la tecnología para hacer que la información sea instantáneamente accesible a escala global, empoderando comunidades con datos clave para la toma de decisiones informadas.</li>
</ul>

<p><strong>¿Cómo la información accesible crea sociedades y organizaciones más prósperas?</strong></p>
<p>El acceso a la información fomenta sociedades y organizaciones más prósperas al permitir decisiones informadas, impulsar la innovación, y aumentar la transparencia y rendición de cuentas. Facilita la educación y el empoderamiento, mejora la participación ciudadana y refuerza la adaptabilidad y resiliencia ante cambios y desafíos globales.</p>

<p>El desarrollo de la Estantería Digital de Papalotla muestra cómo podría ser un gran mercado público de información relevante, detonador de un crecimiento económico sostenido.</p>

<h2>Transparencia como Fundamento:</h2>
<ul>
  <li>Cultura de Apertura y Honestidad: Fomentamos la transparencia en todas las esferas de la sociedad mediante el uso de tecnologías innovadoras, mejorando así la participación ciudadana y la eficacia en la gobernanza.</li>
</ul>

<h2>Transformación para Todos:</h2>
<ul>
  <li>Reshaping Communities with Tech: Nos esforzamos por transformar la vida y el trabajo a través de la adopción de sistemas innovadores y soluciones disruptivas, creando entornos más eficientes y equitativos.</li>
</ul>

      </div>
    </Layout>
  );
}

export default HomePage;
