// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';

export default function ProductDetailPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Button label="Back" variant="ghost" onClick={() => history.back()} />
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/electronics">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/electronics/headphones">Headphones</BreadcrumbItem>
        <BreadcrumbItem>ProMax Wireless 3000</BreadcrumbItem>
      </Breadcrumbs>
      <Card padding={4}>
        <div className="space-y-4 mt-6">
          <Heading level={1}>ProMax Wireless 3000</Heading>
          <Text type="supporting">Premium noise-cancelling wireless headphones</Text>
          <div className="flex items-center gap-3">
            <Heading level={3}>$349.99</Heading>
            <Badge variant="success" label="In Stock" />
          </div>
          <Text type="body">Experience studio-quality sound with advanced active noise cancellation. 40-hour battery life, Bluetooth 5.3, memory foam cushions.</Text>
          <div className="flex gap-2 mt-4">
            <Button label="Add to Cart" variant="primary" />
            <Button label="Add to Wishlist" variant="secondary" />
          </div>
        </div>
      </Card>
    </div>
  );
}
