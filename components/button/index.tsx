import { FC } from "react";
import dynamic from "next/dynamic";
type ButtonProps = {
    type: string,
    onClicEvent: Function,
}

const ButtonTypes: { [key: string]: { color: string, Icon: any }} = {
    "trash": {
        Icon: dynamic(() => import("@heroicons/react/outline/TrashIcon")),
        color: "red"
    },
    "pencil": {
        Icon: dynamic(() => import("@heroicons/react/outline/PencilIcon")),
        color: "blue"
    },
    "plus": {
        Icon: dynamic(() => import("@heroicons/react/outline/PlusCircleIcon")),
        color: "green"
    }
}

const Button: FC<ButtonProps> = ({ type, onClicEvent }) => {
    const { color, Icon } = ButtonTypes[type];
    return (
        <button
            className={`bg-${color}-500 hover:bg-${color}-600 text-white text-center py-2 px-2 rounded-full inline-flex items-center`}
            onClick={() => onClicEvent()}
        >
        <Icon className="h-4 w-4 text-white-600" aria-hidden="true"/>
        </button>

    );
}
export default Button;
