import { describe, expect, test, vi } from "vitest";
import { getProductsLoader } from "./get-products-loader";
import { LoaderFunctionArgs } from "react-router-dom";

const fakeProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
];

describe("getProductsLoader", () => {
  vi.stubGlobal("fetch", async () => ({
    json: async () => fakeProducts,
  }));

  test("fetches products from the server", async () => {
    const mockRequest = {
      signal: new AbortController().signal,
    };

    const products = await getProductsLoader({
      request: mockRequest,
    } as LoaderFunctionArgs);

    expect(products).toEqual({
      products: fakeProducts,
    });
  });
});
