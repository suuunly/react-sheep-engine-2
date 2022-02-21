import { Fragment, PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { useGameLoop } from "../loop";
import { GameComponent, GameComponentInstanceDefinition } from "./GameComponent";
import { GameObject } from "./GameObject";
import { useTransform } from "./transform/useTransform";

export type ReactGameObjectProps = {
    active: boolean;
    name?: string;
    components: typeof GameComponent[]
};

export function ReactGameObject(props: PropsWithChildren<ReactGameObjectProps>) {
    const loop = useGameLoop();

    const [name, setName] = useState(props?.name || "GameObject");
    const [active, setActive] = useState(props.active);
    const transform = useTransform();

    const [components, setComponents] = useState<GameComponent[]>([]);

    // TODO: Turn into a memo
    const gameObject: GameObject = {
        name,
        setName,
        active,
        setActive,
        transform,
        components: components,
        getComponent: <TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>): TComponent | null => {
            const found = components.find(comp => comp instanceof type);
            return found ? found as TComponent : null;
        },
        addComponent: <TComponent extends GameComponent>(type: GameComponentInstanceDefinition<TComponent>, enabled: boolean = true): TComponent => {
            const newComp = new type(enabled, gameObject, transform);
            setComponents(components => {
                components.push(newComp);
                return components;
            });
            return newComp;
        },
    };

    useLayoutEffect(() => {
        props.components.forEach(comp => gameObject.addComponent(comp, true));
    }, []);

    useEffect(() => {
        loop.registerObject(gameObject);
    }, []);


    return <Fragment>
        {gameObject.components.map((comp, i) => <Fragment key={i}>{comp.Render()}</Fragment>)}
        {props.children}
    </Fragment>
}