import React, { useState } from 'react';

// Exemplo de Card de Feature
function FeatureCard({ title, description, highlight }) {
  return (
    <div style={{
      border: highlight ? '2px solid #0099ff' : '1px solid #eee',
      borderRadius: 10,
      padding: 18,
      marginBottom: 16,
      background: highlight ? '#e6f7ff' : '#f9f9f9',
      transition: 'border 0.2s, background 0.2s',
      boxShadow: highlight ? '0 2px 6px #0099ff33' : '0 1px 2px #ccc2',
    }}>
      <h3 style={{ margin: '0 0 6px 0', color: '#222' }}>{title}</h3>
      <p style={{ margin: 0, color: '#666', fontSize: 16 }}>{description}</p>
    </div>
  );
}

const features = [
  { title: 'Dashboard Customizado', description: 'Visualize o andamento dos projetos de forma intuitiva e responsiva.' },
  { title: 'Atribuição de Tarefas', description: 'Gerencie as tarefas da equipe com facilidade, acompanhando prioridades.' },
  { title: 'Notificações Inteligentes', description: 'Receba avisos sobre prazos, atualizações e pendências importantes.' },
  { title: 'Integração com API', description: 'Os dados são sincronizados em tempo real para melhor colaboração.' }
];

export default function ProjetoExemplo() {
  // Interatividade: destaque de feature por hover/seleção
  const [highlightIndex, setHighlightIndex] = useState(null);

  return (
    <div style={{
      maxWidth: 700,
      margin: '48px auto',
      padding: '32px 24px',
      background: '#fff',
      borderRadius: 18,
      boxShadow: '0 6px 26px rgba(30,30,80,0.07)',
    }}>
      <header style={{ textAlign: 'center', marginBottom: 34 }}>
        <h1 style={{
          fontSize: 34,
          color: "#093d9d",
          marginBottom: 6,
          fontWeight: 700
        }}>
          ProjetoExemplo
        </h1>
        <p style={{
          fontSize: 18,
          color: "#333",
          marginBottom: 0,
          fontWeight: 400
        }}>
          Página de demonstração avançada do projeto. Expanda conforme sua solução!
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: 22, color: "#2b77c5", marginBottom: 18 }}>
          Principais Funcionalidades
        </h2>
        {/* Lista de features com interação por hover */}
        {features.map((f, i) => (
          <div key={f.title}
            onMouseEnter={() => setHighlightIndex(i)}
            onMouseLeave={() => setHighlightIndex(null)}
          >
            <FeatureCard
              {...f}
              highlight={highlightIndex === i}
            />
          </div>
        ))}
      </section>

      <section style={{
        marginTop: 38,
        borderTop: "1px solid #eee",
        paddingTop: 30,
      }}>
        <h2 style={{ fontSize: 20, color: '#093d9d' }}>
          Como utilizar este exemplo
        </h2>
        <ul style={{ color: "#444", fontSize: 16, paddingLeft: 20 }}>
          <li>Adicione rotas e links para navegar até esta página.</li>
          <li>Implemente consumo de dados usando <code>fetch</code> ou Axios.</li>
          <li>Customize o layout e os componentes conforme as necessidades do projeto.</li>
          <li>Inclua autenticação, feedbacks, gráficos ou integrações externas conforme evoluir.</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: 48, fontSize: 14, color: "#aaa" }}>
        <span>Feito por seu grupo &middot; AP2-PFE</span>
      </footer>
    </div>
  );
}
