import { Button, Card, Form } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Label } from "../../../shared/styling/Label";
import { NumericInput } from "../../../widgets/table/NumericInput";
import { TransactionListCardFormStore } from "./model";
import styled from "@emotion/styled";

const store = new TransactionListCardFormStore();

export const TransactionListCard = () => {
    return <Card>
        <Title>Список транзакций (версия 3)</Title>

        <FormWrapper name="analytics data">

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
                
            </Label>

            <ButtonWrapper type='primary' htmlType="submit" onClick={() => {
                store.submitWarehousesCardForm();
            }}>
                Получить данные аналитики
            </ButtonWrapper>
        </FormWrapper>
    </Card>
}

const FormWrapper = styled(Form)`
    width: 500px;
`;

const ButtonWrapper = styled(Button)`
    width: 100%;
`;