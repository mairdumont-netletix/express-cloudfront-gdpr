import { gdprApplies } from "../gdpr-applies";
import { mockRequestWithCountry } from "./test-helper";

describe('gdprApplies', (): void => {
  it('should return false for US', (): void => {
    const applies: boolean = gdprApplies(mockRequestWithCountry('US'));
    expect(applies).toBeFalsy();
  });
  it('should return true for DE', (): void => {
    const applies: boolean = gdprApplies(mockRequestWithCountry('DE'));
    expect(applies).toBeTruthy();
  });
  it('should return false for empty country', (): void => {
    const applies: boolean = gdprApplies(mockRequestWithCountry(''));
    expect(applies).toBeFalsy();
  });
  it('should return false for undefined', (): void => {
    const applies: boolean = gdprApplies(mockRequestWithCountry(undefined));
    expect(applies).toBeFalsy();
  });
  it('should handle and array of header (should not happen, but allowed by header definition)', (): void => {
    const applies: boolean = gdprApplies(mockRequestWithCountry(['FR', 'DE']));
    expect(applies).toBeTruthy();
  });
});
