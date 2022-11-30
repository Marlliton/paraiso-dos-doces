import Result from "../errors/Result";

export default class Validate {
  static string<T>(str?: string): Result<T> {
    if (!str) return Result.fail<T>("String inválida.");
    if (str.trim() === "" || str === null)
      return Result.fail<T>("String não pode ser nula ou vazia.");
    return Result.ok<T>();
  }

  static email<T>(email?: string): Result<T> {
    if (!email) return Result.fail<T>("Informe um email.");
    if (this.string(email).isFailure) {
      return this.string<T>(email);
    }

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) return Result.fail<T>("Email inválido.");

    return Result.ok<T>();
  }

  static nome<T>(name?: string): Result<T> { // O compilador gera um erro caso chame a função de name.
    if (!name) return Result.fail<T>("Informe um nome");
    if (this.string(name).isFailure) return this.string<T>(name);
    if (name.length < 3 || name.length > 60)
      return Result.fail<T>("Nome tem que está entre 3 e 60 caracteres.");

    return Result.ok<T>();
  }

  
}
