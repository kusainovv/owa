import { Button, Card, Form, Input, Select } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { NumericInput } from "../../../widgets/table/NumericInput";
import { Label } from "../../../shared/styling/Label";
import { observer } from "mobx-react";
import { AnalyticsCardForm } from "../../../entities/analyticsCardForm";

const store = new AnalyticsCardForm();
  
export const AnalyticsCard = observer(() => {
    return <Card title="Данные аналитики">
        <FormWrapper name="analytics data">
            <Label>
                С даты
                <Input placeholder="2020-09-01" value={store.date_from} onChange={(e) => {
                    store.updateDateFromField(e.target.value);
                }} />
            </Label>

            <Label>
                До даты
                <Input placeholder="2021-10-15" value={store.date_to} onChange={(e) => {
                    store.updateDateToField(e.target.value);
                }} />
            </Label>

            <Label>
                Группировка данных в отчете
                <Select 
                    onChange={(field) => {
                        store.updateDimensionField(field);
                    }}
                    mode="multiple"
                    options={[
                        { value: 'unknownDimension', label: 'неизвестное измерение' },
                        { value: 'sku', label: 'идентификатор товара(sku)'  },
                        { value: 'spu', label: 'идентификатор товара(spu)' },
                        { value: 'day', label: 'день' },
                        { value: 'week', label: 'неделя' },
                        { value: 'month', label: 'месяц' },
                        { value: 'year', label: 'год' },
                        { value: 'category1', label: 'категория первого уровня' },
                        { value: 'category2', label: 'категория второго уровня' },
                        { value: 'category3', label: 'категория третьего уровня' },
                        { value: 'category4', label: 'категория четвертого уровня' },
                        { value: 'brand', label: 'бренд' },
                        { value: 'modelID', label: 'модель' },
                    ]}  />
            </Label>

            
            <Label>
                Фильтры
                <Input placeholder="2021-10-15" value={store.filters} onChange={(e) => {
                    store.updateFiltersField(e.target.value);
                }} />
            </Label>

            <Label>
                Количество значений в ответе:
                <NumericInput max={1000} min={100} placeholder='1000' value={store.limit} onChange={(value) => {
                    store.updateLimitField(value);
                }} />
            </Label>

            <Label>
                Метрика
                <Select  
                    onChange={(field) => {
                        store.updateMetricsField(field);
                    }}
                    maxLength={14}
                    mode="multiple"
                    options={[
                        { value: 'unknown_metric', label: 'неизвестная метрика' },
                        { value: 'hits_view_search', label: 'показы в поиске и в категории'  },
                        { value: 'hits_view_pdp', label: 'показы на карточке товара' },
                        { value: 'hits_view', label: 'всего показов' },
                        { value: 'hits_tocart_search', label: 'в корзину из поиска или категории' },
                        { value: 'hits_tocart_pdp', label: 'в корзину из карточки товара' },
                        { value: 'hits_tocart', label: 'всего добавлено в корзину' },
                        { value: 'session_view_search', label: 'сессии с показом в поиске или в категории' },
                        { value: 'session_view_pdp', label: 'сессии с показом на карточке товара' },
                        { value: 'session_view', label: 'всего сессий' },
                        { value: 'conv_tocart_search', label: ' конверсия в корзину из поиска или категории' },
                        { value: 'conv_tocart_pdp', label: 'конверсия в корзину из карточки товара' },
                        { value: 'conv_tocart', label: 'общая конверсия в корзину' },
                        { value: 'revenue', label: 'заказано на сумму' },
                        { value: 'returns', label: 'возвращено товаров' },
                        { value: 'cancellations', label: 'отменено товаров' },
                        { value: 'ordered_units', label: 'заказано товаров' },
                        { value: 'delivered_units', label: 'доставлено товаров' },
                        { value: 'adv_view_pdp', label: 'показы на карточке товара, спонсорские товары' },
                        { value: 'adv_view_search_category', label: 'показы в поиске и в категории, спонсорские товары' },
                        { value: 'adv_view_all', label: 'показы всего, спонсорские товары' },
                        { value: 'adv_sum_all', label: 'всего расходов на рекламу' },
                        { value: 'position_category', label: ' позиция в поиске и категории' },
                        { value: 'postings', label: 'отправления' },
                        { value: 'postings_premium', label: 'отправления с подпиской Premium' },
                    ]}  />
            </Label>


            <Label>
                Количество элементов, которое будет пропущено в ответе. Например, если offset = 10, то ответ начнётся с 11-го найденного элемента.
                <NumericInput max={1000} min={100} placeholder='1000' value={store.offset} onChange={(value) => {
                    store.updateOffsetField(value);
                }}  />
            </Label>


            <Label>
                Настройки сортировки отчёта.
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Настройки сортировки отчёта."
                    onChange={(fields) => {
                        store.updateSortField(fields);
                    }}
                    options={undefined}
                />

            </Label>

            <ButtonWrapper type='primary' htmlType="submit" onClick={() => {
                store.submitAnalyticsCardForm();
            }}>
                Получить данные аналитики
            </ButtonWrapper>
        </FormWrapper>
    </Card>
});

const FormWrapper = styled(Form)`
    max-width: 650px;
`;

const ButtonWrapper = styled(Button)`
    width: 100%;
`;
