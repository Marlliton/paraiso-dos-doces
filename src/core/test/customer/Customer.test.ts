import Customer from "../../customer/Customer";

describe("Teste da entidade customer", () => {
  test("Deve criar um customer válido", () => {
    
    const customer = Customer.create({
      cellPhone: "79900678938",
      email: "marlliton.souza1@gmail.com",
      id: "asdf",
      name: "Marlliton Souza",
    });
    expect(customer.errors).not.toBeTruthy();
  });
  
  test("Deve gerar erros se o email for inválido", () => {
    const customer = Customer.create({
      cellPhone: "1234567890",
      email: "marlliton.souza@",
      id: "123çalsdfjal",
      name: "Marlliton Souza",
      imgUrl: "http://minha.com.br",
    });

    expect(customer.errors).not.toBeNull();
  });

  test("Deve obter as iniciais do cliente", () => {
    const customer = Customer.create({
      cellPhone: "79900678938",
      email: "marlliton.souza1@gmail.com",
      id: "asdf",
      imgUrl: "http://minha.com.br",
      name: "Teste Iniciais",
    });
    expect(customer.instance?.$name?.initials.length).toBe(2);
  });
});
