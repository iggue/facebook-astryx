// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Checkbox} from '@/components/ui/checkbox';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {ScrollArea} from '@/components/ui/scroll-area';

const termsText = `Terms of Service\n\n1. Acceptance of Terms - By using this service, you agree to these terms.\n\n2. Use License - Permission is granted for personal non-commercial use.\n\n3. Disclaimer - Materials provided "as is" without warranties.\n\n4. Limitations - We are not liable for damages from service use.\n\n5. Revisions - Terms may be revised without notice.\n\n6. Governing Law - Governed by applicable laws.`;

export default function TermsAcceptanceForm() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader><CardTitle>Terms and Conditions</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-72 border rounded-md p-4">
          <p className="text-sm whitespace-pre-line">{termsText}</p>
        </ScrollArea>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(c) => setAgreeTerms(!!c)} />
            <Label htmlFor="terms">I agree to the Terms of Service</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" checked={agreePrivacy} onCheckedChange={(c) => setAgreePrivacy(!!c)} />
            <Label htmlFor="privacy">I agree to the Privacy Policy</Label>
          </div>
        </div>
        <Button disabled={!(agreeTerms && agreePrivacy)} onClick={() => alert('Accepted!')}>Continue</Button>
      </CardContent>
    </Card>
  );
}
