import { IHabilidades } from "./IBaseDatos";

export interface IModalsHabilidades {
    show: boolean;
    handleClose: () => void;
    hablidad: IHabilidades;
}