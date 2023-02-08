import getConfigFlag from "../../utils/getConfigFlag";

describe("getConfigFlag", () => {
  it("returns defaultValue if the config is not found", () => {
    const defaultConfigValue = "foobar";
    expect(getConfigFlag("notFoundConfig", defaultConfigValue)).toBe(
      defaultConfigValue
    );
  });

  test.each([
    { configName: "shouldShowPage", expectedType: "boolean" },
    {
      configName: "userName",
      expectedType: "string",
    },
  ])(
    'returns a "$expectedType" if the config name is "$configName"',
    ({ configName, expectedType }) => {
      expect(typeof getConfigFlag(configName)).toBe(expectedType);
    }
  );
});
