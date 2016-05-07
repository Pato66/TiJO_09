describe('app', function () {
    'use strict';

    var answer = window.app;
    
    describe('calculateArea', function () {
        it('should return area: 5 and message: Success', function () {
            expect(app.calculateArea(7,2,1,'Success', 'Error')).toEqual({area:5 ,message:"Success"});
        });
        it('should return area: 3 and message: Success', function () {
            expect(app.calculateArea(2,5,1,'Success', 'Error')).toEqual({area:3 ,message:"Success"});
        });
        it('should return area: 1 and message: Success', function () {
            expect(app.calculateArea(2,5,2,'Success', 'Error')).toEqual({area:1 ,message:"Success"});
        });
        it('should return area: -1 and message: Error', function () {
            expect(app.calculateArea(3,5,2,'Success', 'Error')).toEqual({area:-1 ,message:"Error"});
        });
        it('should return area: -4 and message: Error', function () {
            expect(app.calculateArea(6,5,2,'Success', 'Error')).toEqual({area:-4 ,message:"Error"});
        });
        it('should return area: 0 and message: Big null', function () {
            expect(app.calculateArea(10,5,2,'Success', 'Error')).toEqual({area:0 ,message:"Big null"});
        });
        it('should return area: 0 and message: Big null', function () {
            expect(app.calculateArea(3,6,2,'Success', 'Error')).toEqual({area:0 ,message:"Big null"});
        });
    });
});
