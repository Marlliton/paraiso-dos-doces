import {
  addDoc,
  collection,
  doc,
  DocumentData,
  Firestore,
  getFirestore,
  onSnapshot,
  QueryDocumentSnapshot,
  updateDoc,
} from "firebase/firestore";
import app from "../../config";
import Order from "../../core/Order/Order";
import Sale from "../../core/sale/Sale";
import { SaleRepository } from "../../core/sale/SalesRepository";
import User from "../../core/User/User";

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

  async finishOrder(id: string) {
    console.log(
      "🚀 ~ file: SalesCollection.ts ~ line 47 ~ SalesCollection ~ finishOrder ~ id",
      id
    );

    const orderDoc = doc(this.db, "sales", id);
    await updateDoc(orderDoc, {
      "order.finished": true,
    });
  }

  private toFirestore(sale: Sale) {
    return {
      user: {
        name: sale.user?.name,
        street: sale.user?.street,
        num: sale.user?.num,
        reference: sale.user?.reference,
      },
      order: {
        description: sale.order?.description,
        finished: sale.order?.finished,
      },
    };
  }

  private fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Sale {
    const data = snapshot.data();
    return new Sale({
      id: snapshot.id,
      user: new User({
        name: data.user?.name,
        num: data.user?.num,
        street: data.user?.street,
        reference: data.user?.reference,
      }),
      order: new Order({
        description: data.order.description,
        finished: data.order.finished,
      }),
    });
  }
}
