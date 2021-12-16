const express = require('express');
const app= express();
const morgan=require('morgan');
const {Pool} = require('pg');
require('dotenv').config();

let pool = new Pool();

const port = 3000;

app.use(morgan('common'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//por lo mientras el html solo mostraria la tabla producto
app.get('/', (req,res)=>{
	res.send(`<!DOCTYPE html>
	<html lang="en">
		<head>
   			<meta charset="UTF-8">
   			<meta name="viewport" content="width=device-width, initial-scale=1.0">
   			<title>AYUDA</title>
   		</head>
   		<body>
			
			<style>
				.form-x {
					padding-left : 30px;
				}
				h4{
					font-size:22px;
					font-family: calibri;
					margin: 30px;

				}
				.form-r{
					width : 80%;
					padding:30px;
					background:#294c6d;
					border-radius : 10px;
					margin:auto;
				}
				.form-r label{
					color:white;
				}

			</style>

			<h4>Tabla</h4>
			<section class = "form-x">
   			<form action="/info/get/ciudad" method="GET">
   				<input  type="submit" value="GET CIUDAD">
   			</form>
   			<form action="/info/get/distrito" method="GET">
   				<input type="submit" value="GET DISTRITO">
   			</form>
   			<form action="/info/get/tienda" method="GET">
   				<input type="submit" value="GET TIENDA">
   			</form>
   			<form action="/info/get/pedido" method="GET">
   				<input type="submit" value="GET PEDIDO">
   			</form>
   			<form action="/info/get/mensajero" method="GET">
   				<input type="submit" value="GET MENSAJERO">
   			</form>
   			<form action="/info/get/dispositivo" method="GET">
   				<input type="submit" value="GET DISPOSITIVO">
   			</form>
   			<form action="/info/get/cliente" method="GET">
   				<input type="submit" value="GET CLIENTE">
   			</form>
   			<form action="/info/get/factura" method="GET">
   				<input type="submit" value="GET FACTURA">
   			</form>
   			<form action="/info/get/met_pago" method="GET">
   				<input type="submit" value="GET METODO DE PAGO">
   			</form>
   			<form action="/info/get/producto" method="GET">
   				<input type="submit" value="GET PRODUCTO">
   			</form>
   			<form action="/info/get/proveedor" method="GET">
   				<input type="submit" value="GET PROVEEDOR">
   			</form>
   			<form action="/info/get/utilidad" method="GET">
   				<input type="submit" value="GET UTILIDAD">
   			</form>
   			<form action="/info/get/stock" method="GET">
   				<input type="submit" value="GET SOTCK">
   			</form>
   			<form action="/info/get/empleado" method="GET">
   				<input type="submit" value="GET EMPLEADO">
   			</form>
			</section>

			<h4>Ingresar Datos</h4>

   			<section class = "form-r">
   			
   			
   			
   			
   			<form action="/info/add" method="POST">
   				
   				
   				
   				<h4>Añadir para 3 datos</h4>
   				<label for="addTabla">Tabla</label>
   				<input class="s" type="text" name="addTabla" id="addTabla">
   				<label for="row1">ROW1</label>
   				<input class="s" type="text" name="row1" id="row1">
   				<label for="row2">ROW2</label>
   				<input class="s" type="text" name="row2" id="row2">
   				<label for="row3">ROW3</label>
   				<input class="s" type="text" name="row3" id="row3">
   				
   				
   				
   				<label for="addId">ADD 1</label>
   				<input type="text" name="addId" id="addId">
   				<label for="addName">ADD 2</label>
   				<input type="text" name="addName" id="addName">
   				<label for="addIng">ADD 3</label>
   				<input type="text" name="addIng" id="addIng">
   				
   				<input type="submit" value="ADD">
   			</form>
   			<h4>Eliminar Dato</h4>
   			<form action="/info/delete" method="POST">
   				<label for="deleteTabla">Tabla</label>
   				<input type="text" name="deleteTabla" id="deleteTabla">
   				<label for="deleterow">ROW</label>
   				<input type="text" name="deleterow" id="deleterow">
   				<label for="delete">DELETE</label>
   				<input type="text" name="delete" id="delete">
   				<input type="submit" value="DELETE">
   			</form>
   			<h4>Update para 3 datos</h4>
   			<form action="/info/update" method="POST">
   				<label for="upTabla">Tabla</label>
   				<input type="text" name="upTabla" id="upTabla">
   				<label for="rowu1">ROWU1</label>
   				<input type="text" name="rowu1" id="rowu1">
   				<label for="newValueName">NEWVALUE 1</label>
   				<input type="text" name="newValueName" id="newValueName">
   				<label for="rowu2">ROWU2</label>
   				<input type="text" name="rowu2" id="rowu2">
   				<label for="newValueIng">NEWVALUE 2</label>
   				<input type="text" name="newValueIng" id="newValueIng">
   				<label for="rowu3">ROWU3</label>
   				<input type="text" name="rowu3" id="rowu3">
   				<label for="idvalue">VALUE</label>
   				<input type="text" name="idvalue" id="idvalue">
   				<input type="submit" value="UPDATE">
   			</form>
   			<h4>Obtener CSV</h4>
   			<form action="/info/csv" method="POST">
   				<label for="csv">OBTENER CSV DE</label>
   				<input type="text" name="csv" id="csv">
   				<label for="ubicacion">Ubicacion</label>
   				<input type="text" name="ubicacion" id="ubicacion">
   				<input type="submit" value="CSV">
   			</form>
   			
			</section>
		
   		</body>
   	</html>
`);
});
//funcion para ver los elementos de la tabla producto.......................................................................................................

app.get('/info/get/ciudad', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM ciudad`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/distrito', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM distrito`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/tienda', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM tienda`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/pedido', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM pedido`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/mensajero', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM mensajero`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/dispositivo', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM dispositivo`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/cliente', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM cliente`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/factura', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM factura`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/met_pago', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM met_pago`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/producto', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM producto`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/proveedor', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM proveedor`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/utilidad', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM utilidad`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/stock', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM stock`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});
app.get('/info/get/empleado', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`SELECT * FROM empleado`);
			release();
			res.json(resp.rows);
		});
	}catch(error){
		console.log(error)
	}
});




//............................................................................................................................................................................................





app.post('/info/add', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`INSERT INTO ${req.body.addTabla} (${req.body.row1},${req.body.row2},${req.body.row3}) VALUES (${req.body.addId},'${req.body.addName}','${req.body.addIng}')`);
			release();
		});
	}catch(error){
		console.log(error)
	}
});









app.post('/info/delete', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`DELETE FROM ${req.body.deleteTabla} WHERE ${req.body.deleterow}='${req.body.delete}'`);
			release();
		});
	}catch(error){
		console.log(error)
	}
});
app.post('/info/update', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`UPDATE ${req.body.upTabla} SET ${req.body.rowu1}= '${req.body.newValueName}', ${req.body.rowu2}='${req.body.newValueIng}' WHERE ${req.body.rowu3}=${req.body.idvalue}`);
			release();
		});
	}catch(error){
		console.log(error)
	}
});

app.post('/info/csv', (req,res)=>{
	try{
		pool.connect(async(error, client, release)=>{
			let resp = await client.query(`COPY ${req.body.csv}  TO '${req.body.ubicacion}' DELIMITER ',' CSV HEADER;`);
			release();
		});
	}catch(error){
		console.log(error)
	}
});


//FInal producto........................................................................................................

app.listen(port,(
	console.log(`server started on port ${port}`)
));

