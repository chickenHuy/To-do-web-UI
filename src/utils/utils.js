export const convertDateToISO = (dateString) => {
    const [month, day, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
}

export const checkOverdue = (dateString) => {
    if(dateString === new Date().toLocaleDateString()){
        return false;
    }
    return new Date(convertDateToISO(dateString)) < new Date();
}

export const checkComfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
}