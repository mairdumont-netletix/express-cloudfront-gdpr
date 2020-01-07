import { ccpaApplies } from "../ccpa-applies";
import { mockRequestWithCountry, mockRequestWithCountryAndRegion } from "./test-helper";

describe('ccpaApplies', (): void => {
  it('should return false for DE', (): void => {
    const applies: boolean = ccpaApplies(mockRequestWithCountry('DE'));
    expect(applies).toBeFalsy();
  });
  it('should return true for US AND IN', (): void => {
    const applies: boolean = ccpaApplies(mockRequestWithCountryAndRegion('US', 'IN'));
    expect(applies).toBeFalsy();
  });
  it('should return true for US AND CA', (): void => {
    const applies: boolean = ccpaApplies(mockRequestWithCountryAndRegion('US', 'CA'));
    expect(applies).toBeTruthy();
  });
  it('should return false for empty country and region', (): void => {
    const applies: boolean = ccpaApplies(mockRequestWithCountryAndRegion('', ''));
    expect(applies).toBeFalsy();
  });
  it('should return false for undefined', (): void => {
    const applies: boolean = ccpaApplies(mockRequestWithCountryAndRegion(undefined, undefined));
    expect(applies).toBeFalsy();
  });
});
