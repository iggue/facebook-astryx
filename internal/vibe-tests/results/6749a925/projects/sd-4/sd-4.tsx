// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 600,
    margin: '0 auto',
  },
  scrollArea: {
    maxHeight: 300,
    overflow: 'auto',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
    marginBottom: 16,
  },
});

const termsText = `Terms of Service

1. Acceptance of Terms
By accessing and using this service, you accept and agree to be bound by these Terms of Service.

2. Use License
Permission is granted to temporarily use the service for personal, non-commercial transitory viewing only.

3. Disclaimer
The materials on the service are provided on an 'as is' basis. We make no warranties, expressed or implied.

4. Limitations
In no event shall we be liable for any damages arising out of the use or inability to use the materials on our service.

5. Revisions
We may revise these terms of service at any time without notice. By using this service you are agreeing to be bound by the current version.

6. Governing Law
These terms and conditions are governed by and construed in accordance with applicable laws.`;

export default function TermsAcceptanceForm() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const canContinue = agreeTerms && agreePrivacy;

  return (
    <div {...stylex.props(styles.container)}>
      <Card padding={4}>
        <Heading level={2}>Terms and Conditions</Heading>
        <div {...stylex.props(styles.scrollArea)}>
          <Text type="body">{termsText}</Text>
        </div>
        <div {...stylex.props(styles.checkboxGroup)}>
          <CheckboxInput
            label="I agree to the Terms of Service"
            value={agreeTerms}
            onChange={setAgreeTerms}
          />
          <CheckboxInput
            label="I agree to the Privacy Policy"
            value={agreePrivacy}
            onChange={setAgreePrivacy}
          />
        </div>
        <Button
          label="Continue"
          variant="primary"
          isDisabled={!canContinue}
          onClick={() => alert('Accepted!')}
        />
      </Card>
    </div>
  );
}
