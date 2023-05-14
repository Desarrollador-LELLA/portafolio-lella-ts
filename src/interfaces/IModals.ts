import { IHabilidadesProps } from './IBaseDatos';

export interface IModalsHabilidades {
   show: boolean;
   handleClose: () => void;
   hablidad: IHabilidadesProps;
}
