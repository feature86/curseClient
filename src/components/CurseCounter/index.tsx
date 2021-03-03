import React from 'react';
import styled from 'styled-components';
import { Curse } from '../../types';



export interface CurseCounterProps {
    curseList: Curse[];
    type: String;
}

export enum CurseCounterType {
    DAY = 'DAY',
    MONTH = 'MONTH',
    TOTAL = 'TOTAL'
  }

const CurseCounterWrap = styled.div``;

export const CurseCounter: React.FC<CurseCounterProps> = ({ curseList, type}) => {
  const today = new Date();
  let curses = curseList;
  if (type === CurseCounterType.DAY) {
    curses = curseList.filter((c) => {
      const cDate = new Date(c.date);
      return cDate.getDate() === today.getDate() && cDate.getMonth() === today.getMonth() && cDate.getFullYear() === today.getFullYear()
    })
    
  } else if (type === CurseCounterType.MONTH) {
    curses = curseList.filter((c) => {
      const cDate = new Date(c.date);
      return cDate.getMonth() === today.getMonth() && cDate.getFullYear() === today.getFullYear()
    })
  }

    return (
        <CurseCounterWrap>
            Count: {curses.length}
        </CurseCounterWrap>
    )
}