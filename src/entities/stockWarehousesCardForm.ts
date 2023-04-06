import { makeAutoObservable } from "mobx";
import { postWarehousesData } from "../shared/api/handlers";

export class StockWarehouseCardForm {
    limit = '';
    offset = '';
    warehouse_type = '';

    constructor() {
        makeAutoObservable(this);
    }

    updateLimitField(value: string) {
        this.limit = value;
    }

    updateOffsetField(value: string) {
        this.offset = value;
    }
    
    updateWarehouseType(value: string) {
        this.warehouse_type = value;
    }

    submitWarehousesCardForm() {
        postWarehousesData({
            offset: this.offset,
            limit: this.limit,
            warehouse_type: this.warehouse_type,
        });
    }
}