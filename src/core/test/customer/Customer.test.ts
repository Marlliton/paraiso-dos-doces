import Customer from "../../customer/Customer";
import Email from "../../email/Email";
import Name from "../../shared/Name";

const customerDefault = Customer.create({
  cellPhone: "79900678938",
  email: Email.create({ email: "marlliton.souza1@gmail.com" }),
  id: "asdf",
  imgUrl: "http://minha.com.br",
  name: Name.create({ name: "Marlliton ferreira Souza" }),
});

describe("Teste da entidade customer", () => {
  test("Deve criar um customer válido", () => {
  //   const customer = Customer.create({
  //     cellPhone: "79900678938",
  //     email: Email.create({ email: "marlliton.souza1@gmail.com" }),
  //     id: "asdf",
  //     imgUrl: "http://minha.com.br",
  //     name: Name.create({ name: "Marlliton ferreira Souza" }),
  //   });

    expect(customerDefault.error).not.toBeTruthy()
    const initials = customerDefault.instance?.$name?.initials
    console.log(initials)
  });

  test("Deve gerar erros se o email for inválido", () => {
    const customer = Customer.create({
      cellPhone: "1234567890",
      email: Email.create({ email: "marlliton.souza@" }),
      id: "123çalsdfjal",
      name: Name.create({ name: "Marlliton Souza" }),
    });

    expect(customer.error).not.toBeNull();
  });

  test("Deve obter as iniciais do cliente", () => {
    expect(customerDefault.instance?.$name?.initials.length).toBe(2)
  })
});
