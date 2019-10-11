[![NPM version](https://img.shields.io/npm/v/@mdnx/express-cloudfront-gdpr.svg?style=flat-square)](https://www.npmjs.com/package/@mdnx/express-cloudfront-gdpr)
[![npm module downloads per month](http://img.shields.io/npm/dm/@mdnx/express-cloudfront-gdpr.svg?style=flat)](https://www.npmjs.org/package/@mdnx/express-cloudfront-gdpr)

# Express Cloudfront GDPR Middleware

This package provides a express middleware to detect if GDPR applies for a user from a specific country.

## Installation / Use in TypeScript projects

```bash
npm install @mdnx/express-cloudfront-gdpr --save
```

## Usage

```typescript
import express from 'express';
import { gdprHeaderMiddleware } from '@mdnx/express-cloudfront-gdpr';

const app = express();
app.use(gdprHeaderMiddleware({
  headerName: 'X-Gdpr-Applies',
  headerTrueValue: '1',
  headerFalseValue: '0',
}));
```
