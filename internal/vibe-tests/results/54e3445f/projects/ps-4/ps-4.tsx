// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

export default function ProductDetailPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <Button variant="ghost" onClick={() => history.back()}>← Back</Button>
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex gap-1">
          <li><a href="/" className="hover:underline">Home</a> /</li>
          <li><a href="/electronics" className="hover:underline">Electronics</a> /</li>
          <li><a href="/electronics/headphones" className="hover:underline">Headphones</a> /</li>
          <li className="text-foreground font-medium">ProMax Wireless 3000</li>
        </ol>
      </nav>
      <Card>
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">ProMax Wireless 3000</h1>
          <p className="text-muted-foreground">Premium noise-cancelling wireless headphones</p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">$349.99</span>
            <Badge>In Stock</Badge>
          </div>
          <p>Experience studio-quality sound with advanced ANC. 40-hour battery, Bluetooth 5.3, memory foam cushions.</p>
          <div className="flex gap-2">
            <Button>Add to Cart</Button>
            <Button variant="outline">Add to Wishlist</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
