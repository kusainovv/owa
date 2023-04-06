import React from "react";
import { AnalyticsCard } from "./analytics/page";
import { StockWarehouseCard } from "./stock_warehouses/page";
import styled from "@emotion/styled";


export const Reports = () => {
    return <Wrapper>
        <AnalyticsCard />
        <StockWarehouseCard />
    </Wrapper>
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px 0;
`;