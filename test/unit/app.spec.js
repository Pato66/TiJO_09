describe('app', function () {
    'use strict';

    var answer = window.app;

    /* WZOR it('should set username to john and password to 12345 when login is call', function () {
        carPortal.login('john', '12345');
        expect(carPortal.credentials).toEqual({username: 'john', password: '12345'});
    }); */

    describe('calculateArea', function () {
        it('should return area: 5 and message: Success', function () {
            expect(app.calculateArea(7,2,1,'Success', 'Error')).toEqual({area:5 ,message:"Success"});
        });
    });
});
