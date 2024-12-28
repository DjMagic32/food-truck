import {products} from '@/data/productData';
import {ProductDetail} from '@/components/Landing/ProductDetail';

// Generar rutas estáticas dinámicas
export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}

// Componente del producto
const ProductoDetalle = async ({params}) => {
  const {slug} = await params;
  //const product = products.find(product => product?.slug === params?.slug);

  const product = products.find(product => product?.slug === slug);

  if (!product) {
    return <div>Producto no encontrado</div>; // Manejo de error simple
  }

  const {title, description, features, images} = product;

  return (
    <div style={{padding: '20px'}}>
      <ProductDetail
        title={title}
        description={description}
        features={features}
        images={images}
      />
    </div>
  );
};

export default ProductoDetalle;
