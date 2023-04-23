import styled from '@emotion/styled';
import { Button, Card, Form, Select, Table } from 'antd';
import React, { useState } from 'react';
import { Label } from '../../../shared/styling/Label';
import { NumericInput } from '../../../widgets/table/NumericInput';
import { observer } from 'mobx-react';
import { StockWarehouseCardForm } from '../../../entities/stockWarehousesCardForm';
import { postWarehousesData } from '../../../shared/api/handlers';
import { CSVLinkWrapper } from '../../../widgets/exel/ExportButton';

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



const store = new StockWarehouseCardForm();

export const StockWarehouseCard = observer(() => {
    const [results, showResults] = useState<any>();
    console.warn(results)
    return <>
        <Card title="Отчёт по остаткам и товарам (версия 2)">
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
                    postWarehousesData({
                        offset: store.offset,
                        limit: store.limit,
                        warehouse_type: store.warehouse_type,
                    }).then(r => {
                        showResults(r.data);
                    });
                }}>
                    Получить данные аналитики
                </ButtonWrapper>
            </FormWrapper>
        </Card>

        <Table columns={columns} dataSource={results?.result?.rows} />
    
        {
            results?.result?.rows && <CSVLinkWrapper
            data={results?.result?.rows}
            onClick={() => {
            console.log("clicked") 
            }}
        >
            Скачать
        </CSVLinkWrapper>
        }
    </>
});

const FormWrapper = styled(Form)`
    max-width: 550px;
`;

const ButtonWrapper = styled(Button)`
    width: 100%;
`;
