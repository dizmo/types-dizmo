import { Bundle } from "@dizmo/types-bundle";
import { Storage } from "@dizmo/types-storage";
import { UUID } from "@dizmo/types-uuid";
export interface Dizmo {
    [key: string]: any;
}
export interface Dizmo {
    identifier: string;
}
export interface Dizmo {
    privateStorage: Storage;
    publicStorage: Storage;
}
export interface Dizmo {
    getAttribute: <T>(path: string, options?: {
        values?: boolean;
        nodes?: boolean;
    }) => T;
    setAttribute: <T>(path: string, value: T) => void;
}
export interface Dizmo {
    subscribeToAttribute: <T>(path: string, callback: (path: string, value: T) => void, subscribedCallback?: Function) => UUID;
    subscribeToAttributeConditional: <T>(path: string, condition: string | boolean | number, callback: (path: string, value: T) => void, subscribedCallback?: Function) => UUID;
    unsubscribeAttribute: <T>(subscriptionId: UUID) => void;
}
export interface Dizmo {
    beginUpdate: (path: string) => void;
    endUpdate: (path: string) => void;
}
export interface Dizmo {
    setPosition: (x: number, y: number) => void;
    getPosition: () => {
        x: number;
        y: number;
    };
}
export interface Dizmo {
    close: () => void;
}
export interface Dizmo {
    addMenuItem: (iconUri: string, text: string, callback: Function) => UUID;
    updateMenuItem: (menuId: UUID, iconUri: string, text: string, callback: Function) => UUID;
    removeMenuItem: (menuId: UUID) => void;
}
export interface Dizmo {
    clone: (attributes?: object, callback?: Function) => void;
}
export interface Dizmo {
    getAttention: (options: {
        type: string;
        duration: number;
    }) => void;
}
export interface Dizmo {
    getDockedDizmos: <T extends Dizmo>() => T[];
    canDock: (flag: boolean | (() => boolean)) => void;
    onDock: (callback: Function, subscribedCallback?: Function) => void;
    onUndock: (callback: Function, subscribedCallback?: Function) => void;
}
export interface Dizmo {
    onShow: (callback: Function, subscribedCallback?: Function) => UUID;
    onHide: (callback: Function, subscribedCallback?: Function) => UUID;
}
export interface Dizmo {
    onMaximized: (callback: Function, subscribedCallback?: Function) => UUID;
    onIconized: (callback: Function, subscribedCallback?: Function) => UUID;
    onClosing: (callback: Function, subscribedCallback?: Function) => UUID;
    onCancelClosing: (callback: Function, subscribedCallback?: Function) => UUID;
    onDragStart: (callback: Function, subscribedCallback?: Function) => UUID;
    onDragEnd: (callback: Function, subscribedCallback?: Function) => UUID;
    onResizeStart: (callback: Function, subscribedCallback?: Function) => UUID;
    onResizeEnd: (callback: Function, subscribedCallback?: Function) => UUID;
    onShowBack: (callback: Function, subscribedCallback?: Function) => UUID;
    onShowFront: (callback: Function, subscribedCallback?: Function) => UUID;
}
export interface Dizmo {
    showBack: () => void;
    showFront: () => void;
}
export interface Dizmo {
    setSize: (width: number, height: number) => void;
    getSize: () => {
        width: number;
        height: number;
    };
}
export interface Dizmo {
    setPositionAndSize: (x: number, y: number, width: number, height: number) => void;
}
export interface Dizmo {
    getHeight: () => number;
    setHeight: (height: number) => void;
    getWidth: () => number;
    setWidth: (width: number) => void;
}
export interface Dizmo {
    focus: () => void;
}
export interface Dizmo {
    getParentDizmo: <T extends Dizmo>() => T;
    setParentDizmo: <T extends Dizmo>(otherDizmo: T) => boolean;
}
export interface Dizmo {
    getChildDizmos: <T extends Dizmo>() => T[];
    getRootDizmo: <T extends Dizmo>() => T;
}
export interface Dizmo {
    getBundle: <T extends Bundle>() => T;
}
export interface Dizmo {
    remoteHostConnected: () => boolean;
    getRemoteHost: () => any;
    onRemoteHostConnected: (callback: Function, subscribedCallback?: Function) => UUID;
    onRemoteHostDisconnected: (callback: Function, subscribedCallback?: Function) => UUID;
    unsubscribeRemoteHost: (subscriptionId: UUID) => void;
}
export interface Dizmo {
    onParentChanged: (callback: Function, subscribedCallback?: Function) => UUID;
    unsubscribeParentChange: (subscriptionId: UUID) => void;
}
export interface Dizmo {
    onChildrenAdded: (callback: Function, subscribedCallback?: Function) => UUID;
    onChildrenRemoved: (callback: Function, subscribedCallback?: Function) => UUID;
    unsubscribeChildren: (subscriptionId: UUID) => void;
}
export interface Dizmo {
    share: (remoteHostId: string, callback?: Function) => void;
    unshare: (remoteHostId: string, callback?: Function) => void;
}
export interface Dizmo {
    clearSetup: () => void;
}
export default Dizmo;
//# sourceMappingURL=index.d.ts.map