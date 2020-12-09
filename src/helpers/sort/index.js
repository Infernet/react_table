import {SORT_DIRECTION} from '../../constants';

const filterReducer = (accum, currentValue, index, array) => `${accum}(${currentValue})${index !== (array.length - 1) ? '|' : ''}`;

const shieldingString = (str = '') => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');


const sortUsersByField = (array = [], fieldName, asc = SORT_DIRECTION.ASC) => {
    const comparator = ({data: userA}, {data: userB}) => {
        switch (fieldName) {
            case 'id':
                if (asc === SORT_DIRECTION.ASC)
                    return Number(userA.id) - Number(userB.id);
                else
                    return Number(userB.id) - Number(userA.id);
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


const filterUsersBySearchString = (array = [], searchString = null) => {
    if (!searchString) return array;
    let split = shieldingString(searchString.trim()).split(' ');
    if (split.length < 1) return array;
    let regex = new RegExp(split.reduce(filterReducer, ''), 'gi');
    return array.filter(({data}) => {
        let value = '';
        for (let key of Object.keys(data)) {
            switch (typeof data[key]) {
                case 'number':
                case 'bigint':
                    value += `${String(data[key])} `;
                    break;
                case 'string':
                    value += `${data[key]} `;
                    break;
                case 'object':
                    let str = '';
                    for (let subKey of Object.keys(data[key]))
                        str += `${typeof data[key][subKey] !== 'string' ? String(data[key][subKey]) : data[key][subKey]} `;
                    value += `${str.trim()} `;
                    break;
                default:
                    break;
            }
        }
        return value && value.match(regex);
    });
};


export {
    sortUsersByField,
    filterUsersBySearchString,
    filterReducer,
    shieldingString,
};
