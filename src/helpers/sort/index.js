import {SORT_DIRECTION} from '../../constants';

const sortUsersByField = (array = [], fieldName, asc = SORT_DIRECTION.ASC) => {
    const comparator = ({data: userA}, {data: userB}) => {
        switch (fieldName) {
            case 'id':
                if (asc)
                    return Number(userA.id) - Number(userB.id);
                else
                    return userB.id - userA.id;
            case 'firstName':
            case 'lastName':
            case 'email':
            case 'phone':
                if (asc === SORT_DIRECTION.ASC)
                    return String(userA[fieldName]).localeCompare(userB[fieldName]);
                else
                    return String(userB[fieldName]).localeCompare(userA[fieldName]);
            default:
                return 0;
        }
    };

    if (fieldName !== null)
        return array.sort(comparator);
    else return array;
};


export {
    sortUsersByField,
};
