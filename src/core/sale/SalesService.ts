import SalesCollection from "../../adapters/db/SalesCollection";
import { SaleRepository } from "./SalesRepository";

export function getSalesService(): SaleRepository {
  return new SalesCollection()
}