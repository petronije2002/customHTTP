import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var customKPIHTTP9AAB3DB28C684880BE8BFF59E94A3EF0: IVisualPlugin = {
    name: 'customKPIHTTP9AAB3DB28C684880BE8BFF59E94A3EF0',
    displayName: 'custom KPI HTTP',
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
    powerbi.visuals.plugins["customKPIHTTP9AAB3DB28C684880BE8BFF59E94A3EF0"] = customKPIHTTP9AAB3DB28C684880BE8BFF59E94A3EF0;
}

export default customKPIHTTP9AAB3DB28C684880BE8BFF59E94A3EF0;