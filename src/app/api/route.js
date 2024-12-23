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
    const {nombre, email, mensaje} = body;

    // Validar los datos recibidos
    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({error: 'Faltan datos en la solicitud'}),
        {status: 400, headers: {'Content-Type': 'application/json'}},
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: 'smtp.ethereal.email',
      // port: 587,
      auth: {
        user: 'frankoocarp22@gmail.com',
        pass: 'swam zyyw qmwk duch',
      },
    });

    // Configurar el transportador de Nodemailer
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail', // O el servicio SMTP que uses
    //   auth: {
    //     user: process.env.EMAIL_USER, // Tu correo electrónico
    //     pass: process.env.EMAIL_PASS, // Contraseña o app password
    //   },
    // });

    // Configuración del correo
    const mailOptions = {
      from: `frankoocarp22@gmail.com`, // Tu correo electrónico
      to: `frankoocarp22@gmail.com`, // Correo del destinatario
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Mensaje de ${nombre} (${email}):\n\n${mensaje}`,
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
