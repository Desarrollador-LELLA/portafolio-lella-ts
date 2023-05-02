export interface IRedProps {
    id: number;
    nombre: string;
    link: string;
    imagen: string;
}

export interface IHabilidades {
    id: number;
    nombre: string;
    imagen: string;
    url: string;
    nivel: number;
    descripcion: string;
}

export interface IMetodosProps<A> {
    onLoading: (value: boolean) => void;
    onError: (msg: string) => void;
    onSuccess: (msg: A) => void;
 }