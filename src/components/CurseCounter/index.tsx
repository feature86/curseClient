import React from 'react';
import styled from 'styled-components';
import { Curse } from '../../types';



export interface CurseCounterProps {
    curseList: Curse[];
    type: String;
}

export enum CurseCounterType {
    DAY = 'DAY',
    MOONT = 'MONTH',
    TOTAL = 'TOTAL'
  }

export const CurseCounter: React.FC<CurseCounterProps> = ({ curseList, type}) => {
    return (
        <div>
            {curseList.length}
        </div>
    )
}