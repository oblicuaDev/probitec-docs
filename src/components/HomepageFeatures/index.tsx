import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
  linkLabel: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '¿Qué es Oblicua RFID?',
    description: (
      <>
        Cómo se relacionan la app móvil y la plataforma web, y qué significa cada
        estado de un conteo.
      </>
    ),
    to: '/docs/intro',
    linkLabel: 'Ver introducción →',
  },
  {
    title: 'App móvil',
    description: (
      <>
        Iniciar sesión, seleccionar bodega, contar con RFID y guardar el conteo
        para verificación.
      </>
    ),
    to: '/docs/app-movil/inicio-de-sesion',
    linkLabel: 'Ver manual →',
  },
  {
    title: 'Plataforma web',
    description: (
      <>
        Conciliar, validar contra documentos de Siigo, ajustar diferencias y
        cerrar el inventario.
      </>
    ),
    to: '/docs/plataforma-web/inicio-de-sesion',
    linkLabel: 'Ver manual →',
  },
];

function Feature({title, description, to, linkLabel}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.featureCard)}>
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link to={to}>{linkLabel}</Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
