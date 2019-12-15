const ifElementExists = (elementOrSelector, func) => {
    if (!elementOrSelector) return;

    const element = typeof elementOrSelector === 'string'
        ? document.querySelector(elementOrSelector)
        : elementOrSelector;

    if (!element) return;
    
    const result = func(element);
    return result;
};

module.exports = ifElementExists;
