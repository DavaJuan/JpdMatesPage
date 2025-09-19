const FAQ = () => {
  return (
    <section className="px-4 py-10 md:px-20 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        PREGUNTAS FRECUENTES
      </h2>

      <div className="space-y-8 text-sm md:text-base">
        <div>
          <h3 className="font-bold underline">
            ¿CUÁLES SON LAS FORMAS DE PAGO?
          </h3>
          <p>
            Los pagos pueden realizarse en efectivo en el momento de la entrega
            del producto, coordinando previamente un punto de encuentro. También
            se acepta transferencia bancaria como medio de pago, la cual debe
            realizarse antes del envío o entrega del pedido.
          </p>
        </div>

        <div>
          <h3 className="font-bold underline">¿HACEN ENVÍOS?</h3>
          <p>¡Sí!</p>
          <p>
            <strong>ENVIOS A TODA ARGENTINA</strong> Podémos cotizarte el valor
            con tu código postal. Contamos con envios mediante CORREO ARGENTINO.
          </p>
        </div>
        <div>
          <h3 className="font-bold underline">¿TODOS LOS MATES SON IGUALES?</h3>
          <p>
            No, los mates de calabaza son piezas únicas, y su tamaño puede
            variar ya que cada uno se elabora sobre un fruto natural. Por eso,
            no existen dos mates exactamente iguales. Sin embargo, podés
            indicarnos tu preferencia de tamaño (chico, mediano o grande) al
            realizar la compra, y haremos lo posible por ofrecerte una opción
            que se ajuste a lo que estás buscando.
          </p>
        </div>
        <div>
          <h3 className="font-bold underline">¿HACEN MATES PERSONALIZADOS?</h3>
          <p>
            Sí, realizamos mates personalizados a pedido. Para encargarlos,
            podés comunicarte con nosotros por WhatsApp, donde coordinaremos
            todos los detalles y nos podés enviar el diseño que querés. Es
            importante tener en cuenta que se requiere una seña previa para
            comenzar con el trabajo.
          </p>
        </div>
        <div>
          <h3 className="font-bold underline">
            ¿LOS MATES VIENEN CON BOMBILLA?
          </h3>
          <p>Sí, todos los mates incluyen una bombilla de regalo.</p>
        </div>
        <div>
          <h3 className="font-bold underline">¿DE QUE ZONA SON?</h3>
          <p>
            Somos de Zona Oeste, Ramos Mejía - Buenos Aires. Se puede retirar
            por Ramos Mejía o coordinar un punto de encuentro en zonas cercanas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
