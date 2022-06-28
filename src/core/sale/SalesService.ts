import SalesCollection from "../../adapters/db/SalesCollection";
import Sale from "./Sale";
import { SaleRepository } from "./SalesRepository";

export default class SalesService implements SaleRepository {
  private _repo: SaleRepository;
  constructor(repo: SaleRepository) {
    this._repo = repo;
  }
  finishOrder(id: string): void {
    return this._repo.finishOrder(id);
  }
  save(sale: Sale): Promise<void> {
    return this._repo.save(sale);
  }
  getAll(callback: Function): void {
    return this._repo.getAll(callback);
  }
}
