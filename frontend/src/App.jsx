import { useEffect, useState } from 'react';

function App() {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/elavon/invoices')
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error('Feil ved henting:', err));
  }, []);

  return (
    <div>
      <h1>Elavon-faktura</h1>
      {invoices ? (
        <pre>{JSON.stringify(invoices, null, 2)}</pre>
      ) : (
        <p>Laster data...</p>
      )}
    </div>
  );
}

export default App;
