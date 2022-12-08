import Product from "../../product/Product";

describe("Teste da entidade produto", () => {
  test("Deve criar um produto válido", () => {
    const product = Product.create({
      name: "caneta",
      value: 5.0,
      amount: 1,
      description: "Caneta azul",
      id: "12çk",
    });

    expect(product.isSuccess).toBeTruthy();
    expect(product.errors?.length).not.toBeTruthy();
  });

  test("Deve retornar erros se o tentar criar usuário com dados nulos", () => {
    const product = Product.create({});
    expect(product.isFailure).toBe(true);
    expect(product.errors?.length).toBeGreaterThan(0);
  });
});
