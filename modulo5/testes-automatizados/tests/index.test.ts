import { adernam, performPurchase } from "../src"

describe("testando o index.js", () => {
    test("", () => {
        expect(performPurchase(adernam, 800)).toBeDefined()
    })
    test("", () => {
        expect(performPurchase(adernam, 1000)).toBeDefined()
    })
    test("", () => {
        expect(performPurchase(adernam, 2000)).toBeDefined()
    })
})