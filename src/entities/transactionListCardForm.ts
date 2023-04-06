import { makeAutoObservable } from "mobx";
import { postWarehousesData } from "../shared/api/handlers";

export class TransactionListCardForm {
    pageSize = '';
    page = '';
    warehouse_type = '';

    constructor() {
        makeAutoObservable(this);
    }

    updatePageField(value: string) {
        this.page = value;
    }

    updatePageSizeField(value: string) {
        this.pageSize = value;
    }
    
    updateFilterType(value: string) {
        // this.filter = value;
        // TODO: Попросить все вариации filter поля
    }

    submitWarehousesCardForm() {
        postWarehousesData({
            // filter: this.filter,
            page: this.page,
            page_size: this.pageSize,
        });
    }
}