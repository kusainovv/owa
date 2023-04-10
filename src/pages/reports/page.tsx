import React from "react";
import { AnalyticsCard } from "./analytics/page";
import { StockWarehouseCard } from "./stock_warehouses/page";
import styled from "@emotion/styled";
import { TransactionListCard } from "./transaction_list/page";


export const Reports = () => {
    return <Wrapper>
        <AnalyticsCard />
        <StockWarehouseCard />
        <TransactionListCard />
    </Wrapper>
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px 0;
    width: 550px;
    margin: 0 auto;
`;