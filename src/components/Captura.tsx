import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Captura de pantalla con pie de foto. Por defecto, tamaño de celular (app móvil);
 * con `web`, ancho completo para las pantallas de la plataforma web.
 * Uso en .mdx:  <Captura src="/img/app-movil/02-inicio.png" alt="..." pie="..." />
 * Varias seguidas se acomodan lado a lado en pantallas anchas (<Capturas>).
 */
export function Captura({ src, alt, pie, web }: { src: string; alt: string; pie?: string; web?: boolean }) {
  return (
    <figure style={{ margin: '0 0 1.5rem', maxWidth: web ? '100%' : 300, textAlign: 'center' }}>
      <img
        src={useBaseUrl(src)}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          borderRadius: web ? 8 : 18,
          border: '1px solid var(--ifm-color-emphasis-300)',
          boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
        }}
      />
      {pie && (
        <figcaption style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: 8 }}>{pie}</figcaption>
      )}
    </figure>
  );
}

export function Capturas({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-start' }}>{children}</div>;
}
