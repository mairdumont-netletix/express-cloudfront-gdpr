import { ccpaHeaderMiddleware } from "../ccpa-header.middleware";
import { GdprHeaderOptions } from "../interfaces";
import { mockNext, mockRequestWithCountryAndRegion, mockResponse } from "./test-helper";

describe('ccpaHeaderMiddleware', (): void => {

  const expectHeaderToBeSet = (country: string, region: string, expectedHeaderName: string, exctedHeaderValue: string, options?: GdprHeaderOptions) => {
    const middleware = ccpaHeaderMiddleware(options);
    const [req, res, next] = [mockRequestWithCountryAndRegion(country, region), mockResponse(), mockNext()];

    middleware(req, res, next);

    expect(next).toBeCalled();
    expect(res.header).toBeCalledWith(expectedHeaderName, exctedHeaderValue);
  }

  describe('with default options', (): void => {
    it('should set headerFalseValue for US AND IN', (): void => {
      expectHeaderToBeSet('US', 'IN', 'X-Ccpa-Applies', '0');
    });
    it('should set headerTrueValue for US AND CA', (): void => {
      expectHeaderToBeSet('US', 'CA', 'X-Ccpa-Applies', '1');
    });
    it('should set headerFalseValue for DE', (): void => {
      expectHeaderToBeSet('DE', 'BY', 'X-Ccpa-Applies', '0');
    });

  });

  describe('with custom options', (): void => {
    const testOptions = {
      headerName: 'X-My-Test-Header',
      headerTrueValue: 'YES',
      headerFalseValue: 'NO',
    }
    it('should set headerFalseValue for US AND IN', (): void => {
      expectHeaderToBeSet('US', 'IN', testOptions.headerName, testOptions.headerFalseValue, testOptions);
    });
    it('should set headerTrueValue for US AND CA', (): void => {
      expectHeaderToBeSet('US', 'CA', testOptions.headerName, testOptions.headerTrueValue, testOptions);
    });
    it('should set headerFalseValue for DE', (): void => {
      expectHeaderToBeSet('DE', 'BY', testOptions.headerName, testOptions.headerFalseValue, testOptions);
    });
  });
});
