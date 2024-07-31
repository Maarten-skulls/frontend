import { Resend } from 'resend';
import {ContactEmail} from "@/app/providers/contact-email-template";
import {render} from "@react-email/render";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: Request) {
    const { Naam, Emailadres, Bericht} = await req.json();
    console.log(`${Naam} <${Emailadres}>`);

    try {
        const { data, error } = await resend.emails.send({
            from: `${Naam} <onboarding@resend.dev>`,
            to: ['jasper.samson@kpnmail.nl'],
            subject: 'Vraag van ' + Naam,
            html: render(ContactEmail({name: Naam, email: Emailadres, message: Bericht})),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
