import {WarriorItem} from "../store/warriorSlice";

export const checkIfExists = (warriors: WarriorItem[], newWarrior: WarriorItem) => {
    if (warriors.find(item => item.idOfWarrior === newWarrior.idOfWarrior || item.idOfCell=== newWarrior.idOfCell )) return true;
};