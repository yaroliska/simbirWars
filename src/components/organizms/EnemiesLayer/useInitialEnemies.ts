import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {AllowedEnemies} from "../../../store/gameSlice";
import {createEnemiesByOne} from "../../../utils/enemies";
import {useEffect} from "react";
import {addEnemiesItem, setInitialEnemiesArray} from "../../../store/enemiesSlice";


const getInitialArray = (heightAmount: number) => {
    const arr =[];
    for (let i=0; i< heightAmount; i++) {
        arr.push([]);
    }
    return arr;
}

export const useInitialEnemies = () => {

    const dispatch = useDispatch();

    const lines = useSelector((state: RootState) => state.enemies.lines);
    const heightAmount = useSelector((state: RootState) => state.sizes.heightAmount);

    // зомби должны появляться так часто, чтобы успевала копиться денежка на них+- чтобы если денежку не поймал то не критично
    useEffect(()=> {
        if (heightAmount) {
            dispatch(setInitialEnemiesArray(getInitialArray(heightAmount)));
            const enemiesByOneArr = createEnemiesByOne(heightAmount, 5, AllowedEnemies.typoInCode, heightAmount, lines);
            const allEnemiesArr = [...enemiesByOneArr];

            allEnemiesArr.forEach(line => {
                line.forEach(enemy => {
                    setTimeout(()=> dispatch(addEnemiesItem(enemy)), enemy.time);
                })
            });
        }
    }, [heightAmount]);
};