import { describe, expect, test } from "@jest/globals";

import { convertPhoneNumber } from "./main";

const expected = "0612157463";
const tested = [
  "+33612157463",
  "06 12 15 74 63",
  "06-12-15-74-63",
  "06   12  15  74  63",
  "(+33)612157463",
  "(+33) 612157463",
  "(+33) 612 157 463",
  "(+33)-612.15-74 63",
];

describe("sum module", () => {
  test.each(tested)(`%s should be ${expected}`, (textVal) => {
    expect(convertPhoneNumber(textVal)).toBe(expected);
  });
});
