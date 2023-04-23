import { makeAutoObservable } from "mobx";
import { AnalyticsCardDimension } from "../pages/reports/analytics/typing";
import { postAnalyticsData } from "../shared/api/handlers";

export class AnalyticsCardForm {
    date_from = '';
    date_to = '';
    dimension = [] as typeof AnalyticsCardDimension[];
    filters = [] as string[];
    limit = '';
    metrics = [] as typeof AnalyticsCardDimension[];
    offset = '';
    sort = [] as string[];
    result = null;

    constructor() {
        makeAutoObservable(this);
    }

    updateDateFromField(value: string) {
        this.date_from = value;
    }

    updateDateToField(value: string) {
        this.date_to = value;
    }

    updateDimensionField(value: typeof AnalyticsCardDimension[]) {
        this.dimension = value;
    }

    updateFiltersField(value: string) {
        this.filters = [...this.filters, value];
    }

    updateLimitField(value: string) {
        this.limit = value;
    }

    updateMetricsField(value: typeof AnalyticsCardDimension[]) {
        this.metrics = value;
    }

    updateOffsetField(value: string) {
        this.offset = value;
    }

    updateSortField(value: string[]) {
        // TODO: посмотреть по JSON parse hacking
        // TODO: ошибка для единичного символа
        this.sort = value.map(field => JSON.parse(field))
    }

    submitAnalyticsCardForm() {
        postAnalyticsData({
            date_from: this.date_from,
            date_to: this.date_to,
            dimension: this.dimension,
            filters: this.filters,
            limit: this.limit,
            metrics: this.metrics,
            offset: this.offset,
            sort: this.sort
        }).then(r => this.result = r.data);
    }
}