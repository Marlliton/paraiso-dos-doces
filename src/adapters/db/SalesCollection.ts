import {
  addDoc,
  collection,
  DocumentData,
  Firestore,
  getFirestore,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import app from "../../config";
import Sale from "../../core/sale/Sale";
import { SaleRepository } from "../../core/sale/SalesRepository";

export default class SalesCollection implements SaleRepository {
  private db: Firestore;
  private itens: Sale[];
  constructor() {
    this.db = getFirestore(app);
    this.itens = [];
  }
  async save(sale: Sale): Promise<void> {
    if (sale) {
      await addDoc(collection(this.db, "sales"), this.toFirestore(sale));
    }
  }

  getAll(callback: Function): void {
    onSnapshot(collection(this.db, "sales"), async snapshot => {
      this.itens = [];
      snapshot.forEach(sale => {
        this.itens.push(this.fromFirestore(sale));
        callback(this.itens);
      });
    });
  }

  get it() {
    return this.itens;
  }

  toFirestore(sale: Sale) {
    return {
      name: sale.name,
      street: sale.street,
      num: sale.num,
      reference: sale.reference,
      order: sale.order,
      date: new Date(),
    };
  }

  fromFirestore(snapshot: any): Sale {
    const data = snapshot.data();
    return new Sale(
      data.name,
      data.num,
      data.street,
      data.reference,
      data.order
    );
  }
}
