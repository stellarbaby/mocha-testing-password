"use strict";


export function generatePassword(length, strength) {
    const lowChars = 'abcdefghijklmnopqrstuvwxyz';
    const mediumChars = lowChars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const highChars = mediumChars + '0123456789!@#$%^&*()-_+=<>?';

    let characters = '';
    switch (strength.toLowerCase()) {
        case 'low':
            characters = lowChars;
            break;
        case 'medium':
            characters = mediumChars;
            break;
        case 'high':
            characters = highChars;
            break;
        default:
            throw new Error('Invalid strength level');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}