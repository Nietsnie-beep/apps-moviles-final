import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import ProductCardView from './ProductCardView';
import axios from 'axios'; // Importa Axios
import { API_HOST } from '../utils/api';

const ProductRow: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_HOST}/atracciones/`); // Usa Axios para realizar la llamada a la API
            setProducts(response.data); // Establece los datos de los productos en el estado
            console.log("Product", response.data);
        } catch (error) {
            console.error('Error al obtener los datos de los productos:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <View style={{ marginTop: 15 }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductCardView
                        key={item.id} // Usar una propiedad única del producto como clave
                        title={item.nombre} // Usar la propiedad correcta del producto para el título
                        supplier={item.nombre} // Usar la propiedad correcta del producto para el proveedor
                        id={item.id}
                        price={item.capacidad_maxima.toString()} // Convertir el precio a una cadena de texto y usar la propiedad correcta del producto
                        imageUrl={item.imagen} // Usar la propiedad correcta del producto para la URL de la imagen
                    />
                )}
                horizontal
                contentContainerStyle={{ columnGap: 20 }}
            />
        </View>
    );
}

export default ProductRow;
