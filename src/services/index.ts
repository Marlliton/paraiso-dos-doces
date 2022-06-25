import SalesCollection from "../adapters/db/SalesCollection";
import SalesService from "../core/sale/SalesService";

export function getSalesService(): SalesService {
  return new SalesService(new SalesCollection());
}
