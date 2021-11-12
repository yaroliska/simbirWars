import {FieldObject, Row} from "./types";
import {useEffect, useState} from "react";

const getSizes = ( heightAmount: number) => {
    return {
      sizeOfField: {
          width: window.innerWidth,
          height: window.innerHeight,
      },
      sizeOfFieldCell: window.innerHeight/heightAmount,
    }
};

const getInitialObject = (widthAmount: number, heightAmount: number): FieldObject => {
    const sizeOfFieldCell = getSizes(heightAmount).sizeOfFieldCell;
    const obj: FieldObject = {
        rows: [],
    };
    let xPoint = 0;
    let yPoint = 0;
    for (let i=0; i<heightAmount; i++) {
        const row: Row = {
            columns: [],
        };

        for (let j=0; j<widthAmount; j++) {
            row.columns.push({
                cellId: `${i}${j}`,
                cellCenter: {
                    x: xPoint + sizeOfFieldCell/2 + j*sizeOfFieldCell,
                    y: yPoint + sizeOfFieldCell/2 + i*sizeOfFieldCell,
                },
            })
        }
        obj.rows.push(row)
    }
    return obj;
};

type useInitialProps = {
    widthAmount: number;
    heightAmount: number;
}
type Sizes = {
    sizeOfField?: {
        width: number;
        height: number;
    }
    sizeOfFieldCell: number;
};

type InitialFieldProps = {
    initialObject: FieldObject| null;
    sizes: Sizes;
}

export const useInitialField  = ({widthAmount, heightAmount}: useInitialProps): InitialFieldProps => {
    const [initialFieldProps, setInitialFieldProps] = useState<InitialFieldProps>({
        initialObject: null,
        sizes: {
            sizeOfFieldCell: 0,
        },
    });

    useEffect(()=>{
        setInitialFieldProps({
            ...initialFieldProps,
            initialObject: getInitialObject(widthAmount, heightAmount),
            sizes: getSizes(heightAmount),
        });
    },[widthAmount, heightAmount, initialFieldProps])

    return initialFieldProps;
};