import styled from '@emotion/styled';
import { Button, Card, Form, Select } from 'antd';
import React from 'react';
import { Label } from '../../../shared/styling/Label';
import { NumericInput } from '../../../widgets/table/NumericInput';
import { observer } from 'mobx-react';
import { StockWarehouseCardForm } from '../../../entities/stockWarehousesCardForm';

const store = new StockWarehouseCardForm();

export const StockWarehouseCard = observer(() => {
    return <Card title="Отчёт по остаткам и товарам (версия 2)">
        <FormWrapper name="stock warehouses data">

            <Label>
                Количество ответов на странице.
                <NumericInput max={1000} min={100} placeholder='100' value={store.limit} onChange={(value) => {
                    store.updateLimitField(value);
                }} />
            </Label>

            <Label>
                Количество элементов, которое будет пропущено в ответе. Например, если offset = 10, то ответ начнётся с 11-го найденного элемента.
                <NumericInput max={1000} min={100} placeholder='100' value={store.offset} onChange={(value) => {
                    store.updateOffsetField(value);
                }} />
            </Label>
            
            <Label>
                Фильтр по типу склада:
                <Select
                    placeholder='ALL'
                    onChange={(field) => {
                        store.updateWarehouseType(field);
                    }}
                    options={[
                        { value: 'ALL', label: 'Все склады OZON' },
                        { value: 'NOT_EXPRESS_DARK_STORE', label: 'склады Ozon без доставки Fresh' },
                        { value: 'EXPRESS_DARK_STORE', label: 'склады Ozon с доставкой Fresh' },
                    ]}
                />
            </Label>

            <ButtonWrapper type='primary' htmlType="submit" onClick={() => {
                store.submitWarehousesCardForm();
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
