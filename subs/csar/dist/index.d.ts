declare module "src/lib/create-state.types" {
    export type DeepReadonly<T> = T extends Function | Primitive ? T : T extends ReadonlyArray<infer R> ? DeepReadonlyArray<R> : T extends ReadonlyMap<infer K, infer V> ? DeepReadonlyMap<K, V> : T extends ReadonlySet<infer ItemType> ? ReadonlySetDeep<ItemType> : T extends object ? DeepReadonlyObject<T> : T;
    export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
    interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {
    }
    type DeepReadonlyObject<T> = {
        readonly [P in keyof T]: DeepReadonly<T[P]>;
    };
    interface DeepReadonlyMap<K, V> extends ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> {
    }
    interface ReadonlySetDeep<ItemType> extends ReadonlySet<DeepReadonly<ItemType>> {
    }
    export type Dispatch<Actions> = (action: Actions) => Promise<void>;
    export type GetState<State> = () => DeepReadonly<State>;
    export type StateReducer<State, Actions> = (action: Actions, getState: GetState<State>, dispatch: Dispatch<Actions>) => State | DeepReadonly<State> | Promise<State> | Promise<DeepReadonly<State>>;
    export type CreateStateOptions<State, Actions> = {
        /**
         * Initial state
         */
        init: State;
        /**
         * Reducer function
         */
        reducer: StateReducer<State, Actions>;
        /**
         * A function that returns if previous result of a
         * selector is different from its current result
         * @param a previous result of a selector
         * @param b next result of a selector
         */
        notEqual?: (a: unknown, b: unknown) => boolean;
    };
    export type UseSelector<State> = <SelectedValue>(fn: (state: State) => SelectedValue) => SelectedValue;
    export type CreateStateReturn<State, Actions> = [
        dispatch: Dispatch<Actions>,
        useSelector: UseSelector<State>,
        getState: GetState<State>
    ];
}
declare module "src/lib/create-state" {
    import { CreateStateOptions, DeepReadonly } from "src/lib/create-state.types";
    export function createState<State, Actions>({ init, reducer, notEqual, }: CreateStateOptions<State, Actions>): readonly [(action: Actions) => Promise<void>, <SelectedValue>(fn: (state: State) => SelectedValue) => SelectedValue, () => DeepReadonly<State>];
    export default createState;
}
declare module "src/dev/add-devtools.types" {
    import { CreateStateOptions } from "src/lib/create-state.types";
    export type CreateStateOptionsWithDevtools<State, Actions> = CreateStateOptions<State, Actions> & {
        /** **For devtools only** - used as the name for reducer instance */
        name?: string;
        /** **For devtools only** - replacer function for JSON.stringify */
        replacer?: (this: any, key: string, value: any) => any;
        /** **For devtools only** - reviver function for JSON.parse */
        reviver?: (this: any, key: string, value: any) => any;
    };
}
declare module "src/dev/add-devtools" {
    import { CreateStateOptionsWithDevtools } from "src/dev/add-devtools.types";
    import { CreateStateOptions } from "src/lib/create-state.types";
    export function addDevtools<State, Actions>({ init, reducer, name, replacer, reviver, ...rest }: CreateStateOptionsWithDevtools<State, Actions>): CreateStateOptions<State, Actions>;
}
declare module "src/dev/index" {
    export * from "src/dev/add-devtools";
    export * from "src/dev/add-devtools.types";
}
declare module "src/index" {
    export * from "src/lib/create-state";
    export * from "src/lib/create-state.types";
    export * from "src/dev/index";
}
