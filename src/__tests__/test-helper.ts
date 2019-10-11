import { HEADER } from "../constants";

export const mockRequestWithCountry = (countryCode: string[] | string | undefined): any => ({
  headers: {
    [HEADER.CLOUDFRONT_VIEWER_COUNTRY]: countryCode,
  },
});

export const mockResponse = (): any => ({
  header: jest.fn(),
});

export const mockNext = () => jest.fn();
