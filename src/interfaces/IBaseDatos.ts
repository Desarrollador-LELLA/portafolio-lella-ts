export interface IRedProps {
   id: number;
   nombre: string;
   link: string;
   imagen: string;
}

export interface IHabilidadesProps {
   id?: number;
   nombre: string;
   imagen: string;
   link: string;
   nivel?: number | any;
   descripcion?: string;
}

export interface IEstadoProps {
   id?: number;
   nombre: string;
   color: string;
}

export interface IImagenProps {
   id?: string | any;
   nombre: string;
   link: string;
}

export interface IPotafolioProps {
   id: string;
   Estado: IEstadoProps;
   Habilidades?: Array<IHabilidadesProps>;
   Imagenes?: Array<IImagenProps>;
   imagen: string;
   titulo: string;
   descripcionCorta: string;
   descripcion?: string;
   linkGitHub: string;
   linkWeb: string;
}

export interface IMetodosProps<A> {
   onLoading: (value: boolean) => void;
   onError: (msg: string) => void;
   onSuccess: (msg: A) => void;
}

export interface IListasPaginas<A> {
   pags: number;
   items: Array<A>;
}

export interface IListaPagActual<B> {
   paga: number;
   listpags: IListasPaginas<B>;
}
