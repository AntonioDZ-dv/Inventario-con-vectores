class Producto {
    constructor(codigo, nombreProducto, cantidad, costo) {
        this.codigo = codigo;
        this.nombreProducto = nombreProducto;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info() {
        return "Codigo: " + this.codigo + ", Producto: " + this.nombreProducto + ", Cantidad: " + this.cantidad + ", Costo: " + this.costo;
    }
}

class Inventario {
    constructor() {
        this.datos = [];
    }

    agregar(nuevo) {
        this.datos.push(nuevo);
    }

    buscar(codigo) {
        for (let i = 0; i < this.datos.length; i++) {
            if (this.datos[i].codigo === codigo) {
                return this.datos[i];
            }
        }
        return null; 
    }

    eliminar(codigo) {
        for (let i = 0; i < this.datos.length; i++) {
            if (this.datos[i].codigo === codigo) {
                let eliminado = this.datos[i];

                for (let j = i; j < this.datos.length - 1; j++) {
                    this.datos[j] = this.datos[j + 1];
                }

                this.datos.pop();
                return eliminado;
            }
        }
        return null;
    }

    agregarInicio(nuevo) {
        this.datos.push(nuevo);

        for (let i = this.datos.length - 1; i > 0; i--) {
            this.datos[i] = this.datos[i - 1];
        }

        this.datos[0] = nuevo;
    }

    extraerPrimero() {
        if (this.datos.length === 0) return null;

        let primero = this.datos[0];

        for (let i = 0; i < this.datos.length - 1; i++) {
            this.datos[i] = this.datos[i + 1];
        }

        this.datos.pop();
        return primero;
    }

    listar() {
        let resultado = "";
        for (let i = 0; i < this.datos.length; i++) {
            resultado += this.datos[i].info() + "\n";
        }
        return resultado;
    }
}

let inventario = new Inventario();
let nuevo = new Producto(1, "Lapiz", 100, 10);
inventario.agregar(nuevo);
nuevo = new Producto(2, "Borrador", 200, 20); 
inventario.agregar(nuevo);
nuevo = new Producto(3, "Cuaderno", 300, 30);
inventario.agregar(nuevo);
nuevo = new Producto(4, "Clips", 20, 10); 
inventario.agregarInicio(nuevo);
nuevo = new Producto(5, "Sacapuntas", 500, 50); 
inventario.agregar(nuevo);

console.log(inventario.listar());

inventario.eliminar(3);

console.log(inventario.listar());

let res = inventario.buscar(10);
if (res == null)
    console.log("No existe");
else
    console.log("si existe");

res = inventario.buscar(4);
if (res == null)
    console.log("No existe");
else
    console.log(res.info());

res = inventario.extraerPrimero();
console.log("el primero es");
console.log(res.info());