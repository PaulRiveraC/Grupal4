-- eliminación de tablas
drop table if exists ventas_completas;
drop table if exists productos ;
drop table if exists clientes;

-- creación de tablas

-- tabla clientes
create table clientes (
    id_cliente serial not null,
    nombre varchar(100) not null,
    teléfono varchar(15),
    dirección varchar(200),
    email varchar(100),
    constraint clientes_pk primary key (id_cliente)
);

-- tabla productos
create table productos (
    id_producto serial not null,
    nombre varchar(100) not null,
    categoría varchar(50),
    precio decimal(10, 2) not null,
    stock int not null,
    constraint productos_pk primary key (id_producto)
);

-- tabla detalles ventas
create table ventas_completas (
    id_venta serial,
    id_cliente int,
    fecha_compra date,
    id_producto int,
    cantidad int,
    constraint detallesv_pk primary key (id_venta),
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_producto) references productos(id_producto)
);

-- inserción de datos en la tabla clientes
insert into clientes (nombre, teléfono, dirección, email) values 
('juan pérez', '0987654321', 'av. siempre viva 123', 'juan.perez@example.com'),
('ana garcía', '0987643210', 'calle falsa 456', 'ana.garcia@example.com'),
('luis torres', '0987651234', 'av. principal 789', 'luis.torres@example.com');

-- inserción de datos en la tabla productos
insert into productos (nombre, categoría, precio, stock) values 
('laptop', 'electrónica', 1200.00, 10),
('teléfono', 'electrónica', 800.00, 20),
('mouse', 'accesorios', 25.00, 50);

-- inserción de datos en la tabla ventas_completas
insert into ventas_completas (id_cliente, fecha_compra, id_producto, cantidad)
values
(1, '2024-02-25', 1, 1),  -- id_producto actualizado a los valores reales
(2, '2024-02-24', 2, 2),
(1, '2024-02-20', 3, 1);

-- consultas para verificar las tablas
select * from clientes;
select * from productos;
select * from ventas_completas;
