const ifElementExists = require('./index.js');

describe('ifElementExists', () => {
    it('should not throw if no element exists', () => {
        document.body.innerHTML = '<div class=""></div>';
        ifElementExists('.foo', x => x.classList.add('bar'));
    });

    it('should execute the function if element exists', () => {
        document.body.innerHTML = '<div class="foo"></div>';
        ifElementExists('.foo', x => x.classList.add('bar'));
        expect(document.querySelector('.bar')).toBeDefined();
    });
});
