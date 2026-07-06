// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const termsText = `Terms of Service\n\n1. Acceptance of Terms - By using this service, you agree to these terms.\n\n2. Use License - Permission granted for personal non-commercial use.\n\n3. Disclaimer - Materials provided "as is" without warranties.\n\n4. Limitations - Not liable for damages from service use.\n\n5. Revisions - Terms may be revised without notice.\n\n6. Governing Law - Governed by applicable laws.`;

export default function TermsAcceptanceForm() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  return (
    <div style={{maxWidth: 500, margin: '0 auto', padding: 24, border: '1px solid #e0e0e0', borderRadius: 8}}>
      <h2 style={{margin: '0 0 16px'}}>Terms and Conditions</h2>
      <div style={{maxHeight: 250, overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: 4, padding: 12, marginBottom: 16, whiteSpace: 'pre-line', fontSize: 14}}>
        {termsText}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16}}>
        <label style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
          <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
          I agree to the Terms of Service
        </label>
        <label style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
          <input type="checkbox" checked={agreePrivacy} onChange={e => setAgreePrivacy(e.target.checked)} />
          I agree to the Privacy Policy
        </label>
      </div>
      <button disabled={!(agreeTerms && agreePrivacy)} onClick={() => alert('Accepted!')}
        style={{padding: '10px 20px', borderRadius: 4, border: 'none', background: agreeTerms && agreePrivacy ? '#1976d2' : '#ccc', color: '#fff', cursor: agreeTerms && agreePrivacy ? 'pointer' : 'not-allowed', fontSize: 14}}>
        Continue
      </button>
    </div>
  );
}
