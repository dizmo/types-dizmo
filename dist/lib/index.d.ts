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
    getAttribute: <T>(name: string) => T;
    setAttribute: <T>(name: string, value: T) => void;
}
export interface Dizmo {
    subscribeToAttribute: <T>(name: string, callback: (path: string, value: T, old_value?: T) => void, subscribed_callback?: Function) => UUID;
    subscribeToAttributeConditional: <T>(name: string, condition: string | boolean | number, callback: (path: string, value: T, old_value?: T) => void, subscribed_callback?: Function) => UUID;
    unsubscribeAttribute: <T>(subscription_id: UUID) => void;
}
export interface Dizmo {
    beginAttributeUpdate: (path: string) => void;
    endAttributeUpdate: (path: string) => void;
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
    addMenuItem: (icon_uri: string, text: string, callback: Function) => UUID;
    updateMenuItem: (menu_id: UUID, icon_uri: string, text: string, callback: Function) => UUID;
    removeMenuItem: (menu_id: UUID) => void;
}
export interface Dizmo {
    clone: (attributes: Object | undefined, callback?: Function) => void;
}
export interface Dizmo {
    getAttention: (options: string | {
        type: string;
        duration: number;
    }) => void;
}
export interface Dizmo {
    getDockedDizmos: <T extends Dizmo>() => T[];
    canDock: (flag: boolean | (() => boolean) | Dizmo) => void;
    onDock: (callback: Function, subscribed_callback?: Function) => void;
    onUndock: (callback: Function, subscribed_callback?: Function) => void;
}
export interface Dizmo {
    onShow: (callback: Function, subscribed_callback?: Function) => UUID;
    onHide: (callback: Function, subscribed_callback?: Function) => UUID;
}
export interface Dizmo {
    onMaximized: (callback: Function, subscribed_callback?: Function) => UUID;
    onIconized: (callback: Function, subscribed_callback?: Function) => UUID;
    onClosing: (callback: Function, subscribed_callback?: Function) => UUID;
    onCancelClosing: (callback: Function, subscribed_callback?: Function) => UUID;
    onDragStart: (callback: Function, subscribed_callback?: Function) => UUID;
    onDragEnd: (callback: Function, subscribed_callback?: Function) => UUID;
    onResizeStart: (callback: Function, subscribed_callback?: Function) => UUID;
    onResizeEnd: (callback: Function, subscribed_callback?: Function) => UUID;
    onShowBack: (callback: Function, subscribed_callback?: Function) => UUID;
    onShowFront: (callback: Function, subscribed_callback?: Function) => UUID;
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
    setParentDizmo: <T extends Dizmo>(other: T) => boolean;
}
export interface Dizmo {
    getChildDizmos: <T extends Dizmo>() => T[];
    getRootDizmo: <T extends Dizmo>() => T | undefined;
}
export interface Dizmo {
    getBundle: <T extends Bundle>() => T;
}
export interface Dizmo {
    remoteHostConnected: () => boolean;
    getRemoteHost: () => any;
    onRemoteHostConnected: (callback: Function, subscribed_callback?: Function) => UUID;
    onRemoteHostDisconnected: (callback: Function, subscribed_callback?: Function) => UUID;
    unsubscribeRemoteHost: (subscription_id: UUID) => void;
}
export interface Dizmo {
    onParentChanged: (callback: Function, subscribed_callback?: Function) => UUID;
    unsubscribeParentChange: (subscription_id: UUID) => void;
}
export interface Dizmo {
    onChildrenAdded: (callback: Function, subscribed_callback?: Function) => UUID;
    onChildrenRemoved: (callback: Function, subscribed_callback?: Function) => UUID;
    unsubscribeChildren: (subscription_id: UUID) => void;
}
export interface Dizmo {
    share: (remote_host_id: string, callback?: Function) => void;
    unshare: (remote_host_id: string, callback?: Function) => void;
}
export interface Dizmo {
    clearSetup: () => void;
}
export default Dizmo;
//# sourceMappingURL=index.d.ts.map