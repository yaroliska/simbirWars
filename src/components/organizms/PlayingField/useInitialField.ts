import {FieldObject, Row} from "./types";
import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {setSizeOfCell} from "../../../store/sizesSlice";

const getSizeOfCell = (heightAmount: number, navHeight: number): number => (window.innerHeight -navHeight)/heightAmount;

const getInitialObject = (widthAmount: number, heightAmount: number, sizeOfCell: number): FieldObject => {
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
                    x: xPoint + sizeOfCell/2 + j*sizeOfCell,
                    y: yPoint + sizeOfCell/2 + i*sizeOfCell,
                },
            })
        }
        obj.rows.push(row)
    }
    return obj;
};

type InitialFieldProps = {
    initialObject: FieldObject| null;
}

export const useInitialField  = (): InitialFieldProps => {

    const { widthAmount, heightAmount, heightOfTop }  = useSelector((state: RootState) => state.sizes);
    const dispatch = useDispatch();

    const size = useMemo(() => getSizeOfCell(heightAmount, heightOfTop), [heightAmount, heightOfTop]);

    const [initialFieldProps, setInitialFieldProps] = useState<InitialFieldProps>({
        initialObject: null,
    });

    useEffect(()=>{
        setInitialFieldProps({
            ...initialFieldProps,
            initialObject: getInitialObject(widthAmount, heightAmount, size),
        });
    },[widthAmount, heightAmount])

    useEffect(()=>{
        dispatch(setSizeOfCell(size))
    },[size])


    return initialFieldProps;
};