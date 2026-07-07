// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {AlertTriangle} from 'lucide-react';

interface TrialBannerProps {
  daysRemaining: number;
  onUpgrade: () => void;
}

export default function TrialBanner({daysRemaining, onUpgrade}: TrialBannerProps) {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Trial expiring soon</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>Your trial expires in {daysRemaining} day{daysRemaining === 1 ? '' : 's'}. Upgrade to keep access.</span>
        <Button variant="outline" size="sm" onClick={onUpgrade}>
          Upgrade
        </Button>
      </AlertDescription>
    </Alert>
  );
}
