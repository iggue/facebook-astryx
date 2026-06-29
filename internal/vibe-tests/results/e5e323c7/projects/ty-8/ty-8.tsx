// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Avatar, AvatarFallback} from './components/ui/avatar';
import {Card, CardContent} from './components/ui/card';
import {Badge} from './components/ui/badge';

export default function ProfileCard() {
  return (
    <Card className="max-w-sm">
      <CardContent className="pt-6 flex flex-col items-center gap-3 text-center">
        <Avatar className="h-20 w-20">
          <AvatarFallback className="text-xl">SC</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold">Sarah Chen</h2>
        <p className="text-sm text-muted-foreground">Staff Design Engineer</p>
        <p className="text-sm text-muted-foreground line-clamp-3">
          Passionate about building accessible, performant design systems that scale across products and platforms.
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          <Badge variant="secondary">Design Systems</Badge>
          <Badge variant="secondary">Accessibility</Badge>
          <Badge variant="secondary">React</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
