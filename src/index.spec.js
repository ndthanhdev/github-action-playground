import { getHelloIn } from "./index";

it("en", () => {
	expect(getHelloIn("en")).toBe("hello");
});
