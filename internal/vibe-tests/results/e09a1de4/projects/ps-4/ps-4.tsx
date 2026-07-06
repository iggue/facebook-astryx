// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function ProductDetailPage() {
  return (
    <div style={{maxWidth: 700, margin: '0 auto', padding: 24, fontFamily: 'system-ui'}}>
      <button onClick={() => history.back()} style={{background: 'none', border: 'none', cursor: 'pointer', marginBottom: 8, fontSize: 14}}>← Back</button>
      <nav aria-label="Breadcrumb" style={{fontSize: 14, color: '#666', marginBottom: 16}}>
        <a href="/" style={{color: '#666'}}>Home</a> / <a href="/electronics" style={{color: '#666'}}>Electronics</a> / <a href="/electronics/headphones" style={{color: '#666'}}>Headphones</a> / <span style={{color: '#333', fontWeight: 500}}>ProMax Wireless 3000</span>
      </nav>
      <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: 24}}>
        <h1 style={{margin: '0 0 8px', fontSize: 28}}>ProMax Wireless 3000</h1>
        <p style={{color: '#666', margin: '0 0 12px'}}>Premium noise-cancelling wireless headphones</p>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
          <span style={{fontSize: 24, fontWeight: 700}}>$349.99</span>
          <span style={{background: '#e8f5e9', color: '#2e7d32', padding: '2px 8px', borderRadius: 4, fontSize: 12}}>In Stock</span>
        </div>
        <p style={{lineHeight: 1.6}}>Experience studio-quality sound with advanced ANC. 40-hour battery, Bluetooth 5.3, memory foam cushions.</p>
        <div style={{display: 'flex', gap: 8, marginTop: 16}}>
          <button style={{padding: '10px 20px', borderRadius: 4, border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer'}}>Add to Cart</button>
          <button style={{padding: '10px 20px', borderRadius: 4, border: '1px solid #ccc', background: '#fff', cursor: 'pointer'}}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
}
