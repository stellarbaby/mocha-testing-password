

import { expect } from 'chai';
import { generatePassword } from '../generatePassword.js';

describe('generatePassword', function() {

    // 1. Password Length Validation
    it('should generate a password of the correct length', function() {
        const length = 10;
        const password = generatePassword(length, 'low');
        expect(password).to.have.lengthOf(length);
    });

    it('should generate a password of minimum 8 characters', function() {
        const length = 8;
        const password = generatePassword(length, 'medium');
        expect(password).to.have.lengthOf.at.least(8);
    });

    it('should generate a password of maximum 32 characters', function() {
        const length = 32;
        const password = generatePassword(length, 'high');
        expect(password).to.have.lengthOf.at.most(32);
    });

    // 2. Strength Validation
    it('should generate a password with only lowercase letters for low strength', function() {
        const password = generatePassword(10, 'low');
        expect(password).to.match(/^[a-z]+$/);
    });

    it('should generate a password with lowercase and uppercase letters for medium strength', function() {
        const password = generatePassword(10, 'medium');
        expect(password).to.match(/^[a-zA-Z]+$/);
    });

    it('should generate a password with letters, numbers, and symbols for high strength', function() {
        const password = generatePassword(10, 'high');
        expect(password).to.match(/^[a-zA-Z0-9!@#$%^&*()\-_=+<>?]+$/);
    });

    // Edge Cases
    it('should throw an error for invalid strength levels', function() {
        expect(() => generatePassword(10, 'invalid')).to.throw('Invalid strength level');
    });

    it('should generate different passwords on multiple calls', function() {
        const password1 = generatePassword(10, 'high');
        const password2 = generatePassword(10, 'high');
        expect(password1).to.not.equal(password2);
    });
});