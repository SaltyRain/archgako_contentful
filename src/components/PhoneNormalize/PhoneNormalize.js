function PhoneNormalize(phone) {
    let normalizedPhone = phone[0];
    let locale;
    if (phone[1] === '7') {
        normalizedPhone = normalizedPhone + '7' + ' (' + phone.slice(2,5) + ') ' + phone.slice(5,8) + ' ' + phone.slice(8,10) + ' ' + phone.slice(10,12);
        locale = ' RUS';
    }
        
    else if (phone[1] === '3' && phone[2] === '9') {
        normalizedPhone = normalizedPhone + '39' + ' (' + phone.slice(3,6) + ') ' + phone.slice(6,9) + ' ' + phone.slice(9,11) + ' ' + phone.slice(11,13);
        locale = ' EU'
    }

    const result = [normalizedPhone, locale];
    return result;
}

export default PhoneNormalize
