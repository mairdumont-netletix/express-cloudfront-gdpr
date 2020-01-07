import { CcpaHeaderOptions, GdprHeaderOptions } from "./interfaces";

export enum HEADER {
  CLOUDFRONT_VIEWER_COUNTRY = 'cloudfront-viewer-country',
  CLOUDFRONT_VIEWER_COUNTRY_REGION = 'cloudfront-viewer-country-region',
}

export const DEFAULT_CCPA_HEADER_OPTIONS: CcpaHeaderOptions = {
  headerName: 'X-Ccpa-Applies',
  headerTrueValue: '1',
  headerFalseValue: '0',
}

export const DEFAULT_GDPR_HEADER_OPTIONS: GdprHeaderOptions = {
  headerName: 'X-Gdpr-Applies',
  headerTrueValue: '1',
  headerFalseValue: '0',
}

export const GDPR_COUNTRIES: string[] = [
  'GB',
  'DE',
  'PL',
  'FR',
  'ES',
  'NO',
  'IT',
  'IS',
  'RO',
  'SE',
  'BG',
  'GR',
  'NL',
  'HR',
  'IE',
  // 'CH',
  'CZ',
  'AT',
  'HU',
  'FI',
  'DK',
  'BE',
  'LI',
  'PT',
  'MT',
  'LU',
  'CY',
  'LT',
  'SK',
  'SI',
  'EE',
  'LV',
];
