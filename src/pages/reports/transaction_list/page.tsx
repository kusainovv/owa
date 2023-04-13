import { Button, Card, Form, Table } from "antd";
import React from "react";
import { Label } from "../../../shared/styling/Label";
import { NumericInput } from "../../../widgets/table/NumericInput";
import styled from "@emotion/styled";
import { TransactionListCardForm } from "../../../entities/transactionListCardForm";
import { observer } from "mobx-react";



const columns = [
    {
        title: 'free_to_sell_amount',
        dataIndex: 'free_to_sell_amount',
        key: 'free_to_sell_amount',
    },
    {
        title: 'item_code',
        dataIndex: 'item_code',
        key: 'item_code',
    },
    {
        title: 'item_name',
        dataIndex: 'item_name',
        key: 'item_name',
    },
    {
        title: 'promised_amount',
        key: 'promised_amount',
        dataIndex: 'promised_amount',
    },
    {
        title: 'reserved_amount',
        key: 'reserved_amount',
        dataIndex: 'reserved_amount',
    },
    {
        title: 'sku',
        key: 'sku',
        dataIndex: 'sku',
    },
    {
        title: 'warehouse_name',
        key: 'warehouse_name',
        dataIndex: 'warehouse_name',
    },
];

const store = new TransactionListCardForm();

export const TransactionListCard = observer(() => {
    return <Card title="Список транзакций (версия 3)">
        <FormWrapper name="transaction list data">

            <Label>
                Количество элементов на странице.
                <NumericInput max={1000} min={100} placeholder='100' value={store.pageSize} onChange={(value) => {
                    store.updatePageSizeField(value);
                }} />
            </Label>

            <Label>
                Номер страницы, возвращаемой в запросе.
                <NumericInput max={1000} min={100} placeholder='100' value={store.page} onChange={(value) => {
                    store.updatePageField(value);
                }} />
            </Label>
            
            <Label>
                Фильтр.
                <br />
                Пока тут пусто
            </Label>

            <ButtonWrapper type='primary' htmlType="submit" onClick={() => {
                console.warn(store.submitWarehousesCardForm());
            }}>
                Получить данные аналитики
            </ButtonWrapper>
        </FormWrapper>

        {/* <Table columns={columns} dataSource={results?.result?.rows} /> */}
    </Card>
});

const FormWrapper = styled(Form)`
    max-width: 550px;
`;

const ButtonWrapper = styled(Button)`
    width: 100%;
`;