import { describe, test, expect } from "@jest/globals";
import { sum } from "../src";

describe('Sum function', () => {
    test('Returns correct value', () => {
        expect(sum(2, 3)).toEqual(5)
    });

    test("return right", () => {
        expect(1).toEqual(1)
    });
})