import nodemailer from 'nodemailer';

export async function GET() {
  console.log('GET request received');
  return new Response(JSON.stringify({message: 'Hello World'}), {
    status: 200,
    headers: {'Content-Type': 'application/json'},
  });
}

export async function POST(req) {
  try {
    // Leer el body de la solicitud
    const body = await req.json();
    const {nombre, email, telefono, mensaje} = body;

    // Validar los datos recibidos
    if (!nombre || !email || !telefono || !mensaje) {
      return new Response(
        JSON.stringify({error: 'Faltan datos en la solicitud'}),
        {status: 400, headers: {'Content-Type': 'application/json'}},
      );
    }

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   // host: 'smtp.ethereal.email',
    //   // port: 587,
    //   auth: {
    //     user: 'contacto.minitrail@gmail.com',
    //     pass: 'yccb qgfb qyly emqi',
    //   },
    // });

    // Configurar el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'angel.rohan@ethereal.email',
        pass: '4xsEGgBhrdCaVgSp5c',
      },
    });

    // Configuración del correo
    const mailOptions = {
      from: `contacto.minitrail@gmail.com`, // Tu correo electrónico
      to: `contacto.minitrail@gmail.com`, // Correo del destinatario
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\n\nCorreo: ${email}\n\nTeléfono: ${telefono}\n\nMensaje: ${mensaje}`,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Responder con éxito
    return new Response(
      JSON.stringify({message: 'Correo enviado exitosamente'}),
      {
        status: 200,
        headers: {'Content-Type': 'application/json'},
      },
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({error: 'Error al enviar el correo'}), {
      status: 500,
      headers: {'Content-Type': 'application/json'},
    });
  }
}
