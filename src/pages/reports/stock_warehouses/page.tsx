import styled from '@emotion/styled';
import { Button, Card, Form, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { Label } from '../../../shared/styling/Label';
import { NumericInput } from '../../../widgets/table/NumericInput';
import { StockWarehouseCardFormStore } from './model';
import { observer } from 'mobx-react';

const store = new StockWarehouseCardFormStore();

export const StockWarehouseCard = observer(() => {
    return <Card>
        <Title>Отчёт по остаткам и товарам (версия 2)</Title>

        <FormWrapper name="analytics data">

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
    width: 500px;
`;

const ButtonWrapper = styled(Button)`
    width: 100%;
`;
