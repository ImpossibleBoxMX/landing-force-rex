import React from 'react';
import Layout from '@theme/Layout';
import MyChart from '@site/src/components/homechart'; // Importas MyChart desde la ruta correcta
import styles from './styles.module.css';

function HomePage() {
  return (
    <Layout title="Inicio" description="Descripción de la página de inicio">
      <div className={styles.hero}>
        <div className="container">
          <h1>Innovar para unir: tecnología y eficiencia en armonía con el progreso social y el desarrollo sustentable.</h1>
          <p>Descubre cómo la tecnología puede cambiar la vida de las comunidades 🌇</p>
          <a href="#mas-informacion" className={styles.button}>Más Información</a>
        </div>
      </div>
      <div className="container">
        <p className={`${styles.paragraph} ${styles.firstParagraph}`}>En Impossible Box de México, nos especializamos en optimizar los procesos productivos mediante la integración de tecnologías avanzadas, adaptándonos a las nuevas dinámicas globales y locales.</p>
        <p className={styles.paragraph}>Nos centramos en implementar soluciones personalizadas que abarcan desde la automatización inteligente hasta el análisis de datos avanzado, asegurando que su empresa no solo se adapte a los cambios actuales, sino que también esté preparada para los desafíos futuros.</p>
        <hr className={styles.separator} />
        <p className={styles.paragraph}>Atlantico, en su informe Latin America Digital Report 2023, preguntó a los latinoamericanos cuáles son las mayores amenazas para el planeta en su percepción. Esto es lo que respondieron los mexicanos.</p>

        <MyChart /> {/* Utiliza el componente MyChart aquí */}
        <hr className={styles.separator} />
        <p className={styles.paragraph}>En Impossible Box, creemos que la clave para el éxito en la reorganización global de los procesos productivos reside en la capacidad de anticiparse y adaptarse rápidamente a las nuevas tendencias y demandas.</p>
        
        <p className={styles.didYouKnow}>La economía digital es una fuerza crucial para impulsar el cambio estructural, avanzar
en la reducción de la desigualdad y fortalecer la inclusión social que tanto necesitan los países
de la región. - Comisión Económica para América Latina y el Caribe</p>
        <hr className={styles.separator} />
        <p className={styles.paragraph}><strong>Únase a nosotros en esta jornada hacia la excelencia operativa, donde la tecnología y la innovación son las herramientas que permitirán a su empresa destacarse y prosperar en el nuevo panorama global. En Impossible Box, estamos comprometidos con su éxito y con la construcción de un futuro más próspero y sostenible para todos.</strong></p>
      </div>
    </Layout>
  );
}

export default HomePage;

