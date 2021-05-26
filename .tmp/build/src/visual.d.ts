import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import { VisualSettings } from "./settings";
export interface TextProperties {
    text: string;
    fontFamily: string;
    fontSize: string;
}
export declare class Visual implements IVisual {
    visualSettings: VisualSettings;
    private host;
    private svg;
    private container;
    private container2;
    private textValue1;
    private textValue2;
    private customTitle;
    private signal;
    private signal2;
    private box1;
    private box2;
    private svg1;
    private token;
    averageWaitingTime: number;
    constructor(options: VisualConstructorOptions);
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    take_from_api(): void;
    update(options: VisualUpdateOptions): void;
}
