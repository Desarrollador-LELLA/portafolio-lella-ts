interface IPagBar {
    p1: number;
    p3: number;
    p4: number;
    p5: number;
    p7: number;
    v2: boolean;
    v3: boolean;
    v4: boolean;
    v5: boolean;
    v6: boolean;
    v7: boolean;
 }
 
 interface IPaginado {
    paginasBar: IPagBar;
 }
 
 export const paginacion = (cantPaginas: number, paginaActual: number): IPagBar => {
    const pagOBar: IPagBar = {
       p1: 1,
       p3: paginaActual > 3 && cantPaginas > 4 ? (paginaActual - 1 > cantPaginas - 3 ? cantPaginas - 3 : paginaActual - 1) : 2,
       p4: paginaActual > 3 && cantPaginas > 4 ? (paginaActual > cantPaginas - 2 ? cantPaginas - 2 : paginaActual) : 3,
       p5: paginaActual > 3 && cantPaginas > 4 ? (paginaActual + 1 > cantPaginas - 1 ? cantPaginas - 1 : paginaActual + 1) : 4,
       p7: cantPaginas,
       v2: paginaActual > 3 && cantPaginas > 5 ? false : true,
       v3: cantPaginas >= 2 ? false : true,
       v4: cantPaginas >= 3 ? false : true,
       v5: cantPaginas >= 4 ? false : true,
       v6: paginaActual < cantPaginas - 2 && cantPaginas > 5 ? false : true,
       v7: cantPaginas >= 5 ? false : true,
    };
 
    return pagOBar;
 };