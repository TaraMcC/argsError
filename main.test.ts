import {main} from "./main";

describe("main.ts tests", () => {
    test("just call main", async () => {
        await main([]);
    });
});