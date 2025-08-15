export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{
      email: string;
      firstName?: string;
      lastName?: string;
      birthday?: string; // formato MM/DD
      phone?: string;
    }>(event);

    // Validación mínima
    if (!body?.email) {
      throw createError({ statusCode: 400, statusMessage: "Email requerido" });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const serverPrefix = apiKey?.split("-")[1]; // ej. us21, us6

    if (!apiKey || !audienceId || !serverPrefix) {
      throw createError({
        statusCode: 500,
        statusMessage: "Config de Mailchimp incompleta",
      });
    }

    // Construir merge fields dinámicos
    const mergeFields: Record<string, any> = {};
    if (body.firstName) mergeFields.FNAME = body.firstName;
    if (body.lastName) mergeFields.LNAME = body.lastName;
    if (body.birthday) mergeFields.BIRTHDAY = body.birthday; // formato MM/DD
    if (body.phone) mergeFields.PHONE = body.phone;

    const res = await $fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: {
          email_address: body.email,
          status: "subscribed",
          merge_fields: mergeFields,
        },
      }
    );

    return { success: true, data: res };
  } catch (err: any) {
    // Manejo de error de Mailchimp
    if (err.data?.title) {
      throw createError({
        statusCode: err.statusCode || 400,
        statusMessage: err.data.title,
      });
    }
    throw err;
  }
});
