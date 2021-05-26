import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var customKPIHTTUPDATEDP9AAB3DB28C684880BE8BFF59E94A3EF0: IVisualPlugin = {
    name: 'customKPIHTTUPDATEDP9AAB3DB28C684880BE8BFF59E94A3EF0',
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
    powerbi.visuals.plugins["customKPIHTTUPDATEDP9AAB3DB28C684880BE8BFF59E94A3EF0"] = customKPIHTTUPDATEDP9AAB3DB28C684880BE8BFF59E94A3EF0;
}

export default customKPIHTTUPDATEDP9AAB3DB28C684880BE8BFF59E94A3EF0;