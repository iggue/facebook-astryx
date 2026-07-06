// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 24,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 24,
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  actions: {
    display: 'flex',
    gap: 8,
    marginTop: 16,
  },
});

export default function ProductDetailPage() {
  return (
    <div {...stylex.props(styles.page)}>
      <Button label="Back" variant="ghost" onClick={() => history.back()} />
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/electronics">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/electronics/headphones">Headphones</BreadcrumbItem>
        <BreadcrumbItem>ProMax Wireless 3000</BreadcrumbItem>
      </Breadcrumbs>
      <div {...stylex.props(styles.productInfo)}>
        <Card padding={4}>
          <Heading level={1}>ProMax Wireless 3000</Heading>
          <Text type="supporting">Premium noise-cancelling wireless headphones with 40-hour battery life</Text>
          <div {...stylex.props(styles.priceRow)}>
            <Heading level={3}>$349.99</Heading>
            <Badge variant="success" label="In Stock" />
          </div>
          <Text type="body">
            Experience studio-quality sound with advanced active noise cancellation.
            Features Bluetooth 5.3, multipoint connectivity, and a comfortable
            over-ear design with memory foam cushions.
          </Text>
          <div {...stylex.props(styles.actions)}>
            <Button label="Add to Cart" variant="primary" />
            <Button label="Add to Wishlist" variant="secondary" />
          </div>
        </Card>
      </div>
    </div>
  );
}
