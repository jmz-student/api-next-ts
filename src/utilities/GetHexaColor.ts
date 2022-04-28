const GetHexaColor = ((): Function => {

    const __getHexaNumber = (max: number, min: number): number => {
        const NUMBER = Math.floor((Math.random() * max) + min);
        return NUMBER;
    };

    const __getHexaColor = (): string => {
        const H: number = (__getHexaNumber(360, 1)) / 60;
        const S: number = __getHexaNumber(100, 1);
        const L: number = 45;

        const HUE: number = (H < 0) ? (6 - (-H % 6)) : (H % 6);
        const SATURATION: number = Math.max(0, Math.min(1, S / 100));
        const LIGHTNESS: number = Math.max(0, Math.min(1, L / 100));

        const C: number = (1 - Math.abs((2 * LIGHTNESS) - 1)) * SATURATION;
        const X: number = C * (1 - Math.abs((HUE % 2) - 1));
        const M: number = LIGHTNESS - C / 2;

        let red: number = 0;
        let green: number = 0;
        let blue: number = 0;

        if (HUE < 1) {
            red = C;
            green = X;
        }
        else if (HUE < 2) {
            red = X;
            green = C;
        }
        else if (HUE < 3) {
            green = C;
            blue = X;
        }
        else if (HUE < 4) {
            green = X;
            blue = C;
        }
        else if (HUE < 5) {
            red = X;
            blue = C;
        }
        else {
            red = C;
            blue = X;
        }
        red = Math.round((red + M) * 255);
        green = Math.round((green + M) * 255);
        blue = Math.round((blue + M) * 255);
        return `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    };

    const init = (): string => __getHexaColor();
    return init;
})();

export default GetHexaColor;
