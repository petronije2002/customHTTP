import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var customKPInpPrev9AAB3DB28C684880BE8BFF59E94A3EF0: IVisualPlugin = {
    name: 'customKPInpPrev9AAB3DB28C684880BE8BFF59E94A3EF0',
    displayName: 'customKPInoPrev',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["customKPInpPrev9AAB3DB28C684880BE8BFF59E94A3EF0"] = customKPInpPrev9AAB3DB28C684880BE8BFF59E94A3EF0;
}

export default customKPInpPrev9AAB3DB28C684880BE8BFF59E94A3EF0;