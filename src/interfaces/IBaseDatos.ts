export interface IRedProps {
   id: number;
   nombre: string;
   link: string;
   imagen: string;
}

export interface IHabilidadesProps {
   id: number;
   nombre: string;
   imagen: string;
   link: string;
   nivel: number;
   descripcion: string;
}

export interface IPotafolioProps {
   id: number;
   imagen: string;
   titulo: string;
   descripcion: string;
   linkGithub?: string;
   linkWeb?: string;
   habilitada: boolean;
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
