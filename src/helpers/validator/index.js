import {EMAIL_REGEX, PHONE_REGE} from '../../constants';

const isEmail = (value = '') => {
    if (!value || typeof value !== 'string') return false;
    return Boolean(value.match(EMAIL_REGEX));
};

const isPhone = (value = '') => {
    if (!value || typeof value !== 'string') return false;
    return Boolean(value.match(PHONE_REGE));
};

export {
    isEmail,
    isPhone,
};
