// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';

const termsText = `Terms of Service\n\n1. Acceptance of Terms\nBy accessing and using this service, you accept and agree to be bound by these Terms.\n\n2. Use License\nPermission is granted to temporarily use the service for personal, non-commercial transitory viewing only.\n\n3. Disclaimer\nThe materials are provided on an 'as is' basis with no warranties.\n\n4. Limitations\nIn no event shall we be liable for any damages arising out of use of the service.\n\n5. Revisions\nWe may revise these terms at any time without notice.\n\n6. Governing Law\nThese terms are governed by applicable laws.`;

export default function TermsAcceptanceForm() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  return (
    <div className="max-w-xl mx-auto">
      <Card padding={4}>
        <Heading level={2}>Terms and Conditions</Heading>
        <div className="max-h-72 overflow-auto border rounded-lg p-4 mb-4">
          <Text type="body">{termsText}</Text>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <CheckboxInput label="I agree to the Terms of Service" value={agreeTerms} onChange={setAgreeTerms} />
          <CheckboxInput label="I agree to the Privacy Policy" value={agreePrivacy} onChange={setAgreePrivacy} />
        </div>
        <Button label="Continue" variant="primary" isDisabled={!(agreeTerms && agreePrivacy)} onClick={() => alert('Accepted!')} />
      </Card>
    </div>
  );
}
