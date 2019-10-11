import { gdprHeaderMiddleware } from "../gdpr-header.middleware";
import { GdprHeaderOptions } from "../interfaces";
import { mockNext, mockRequestWithCountry, mockResponse } from "./test-helper";

describe('gdprHeaderMiddleware', (): void => {

  const expectHeaderToBeSet = (countryCode: string, expectedHeaderName: string, exctedHeaderValue: string, options?: GdprHeaderOptions) => {
    const middleware = gdprHeaderMiddleware(options);
    const [req, res, next] = [mockRequestWithCountry(countryCode), mockResponse(), mockNext()];

    middleware(req, res, next);

    expect(next).toBeCalled();
    expect(res.header).toBeCalledWith(expectedHeaderName, exctedHeaderValue);
  }

  describe('with default options', (): void => {
    it('should set headerFalseValue for US', (): void => {
      expectHeaderToBeSet('US', 'X-Gdpr-Applies', '0');
    });
    it('should set headerTrueValue for DE', (): void => {
      expectHeaderToBeSet('DE', 'X-Gdpr-Applies', '1');
    });
  });

  describe('with custom options', (): void => {
    const testOptions = {
      headerName: 'X-My-Test-Header',
      headerTrueValue: 'YES',
      headerFalseValue: 'NO',
    }
    it('should set headerFalseValue for US', (): void => {
      expectHeaderToBeSet('US', testOptions.headerName, testOptions.headerFalseValue, testOptions);
    });
    it('should set headerTrueValue for DE', (): void => {
      expectHeaderToBeSet('DE', testOptions.headerName, testOptions.headerTrueValue, testOptions);
    });
  });
});
