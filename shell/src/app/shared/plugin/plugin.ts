import { routes } from "../routing/route";
export let plugins: VHSPlugin[] = [];

export function PluginConfig(config: IPluginConfig): ClassDecorator {
    return function <TFunction extends Function>(target: TFunction): TFunction {
        if (config.placements) {
            let prefix: string = config.prefix ? config.prefix + "-" : "";
            for (let placement of config.placements) {
                if (placement.route) {
                    routes.push({
                        component: placement.component,
                        path: prefix + placement.slot
                    });
                }
            }
        }
        return target;
    }
}

// A class that can be used to configure plugin placements within @Plugin decorations
export class PluginPlacement implements IPluginPlacement {
    public slot: string;
    public priority: number;
    public route: boolean;
    public component: any;

    constructor(options: IPluginPlacement) {
        this.slot = options.slot;
        this.priority = options.priority | 1;
        this.component = options.component;
        this.route = options.route;
    }
}

// This class combines the instantiated plugin information with a placement object. This class is used to inject runtime information into plugin components
/*export class PluginData {
    constructor(plugin, placement) {
        this.plugin = plugin;
        this.placement = placement;
    }
}*/

export interface VHSPlugin {
    prefix?: string;
    placements: PluginPlacement[];
}

export interface IPluginConfig {
    prefix?: string;
    placements?: IPluginPlacement[];
}

export interface IPluginPlacement {
    slot: string;
    priority?: number;
    route?: boolean;
    component: any;
}