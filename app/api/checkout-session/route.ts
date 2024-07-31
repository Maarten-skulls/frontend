import {NextApiResponse} from "next";
import Stripe from "stripe";
import {NextResponse} from "next/server";
const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_KEY as string)

export async function POST(req: Request, res: NextApiResponse) {
    const {lineItems} = await req.json();
    if (req.method === 'POST') {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'ideal', 'paypal', 'bancontact'],
            line_items: lineItems,
            automatic_tax: { enabled: true },
            billing_address_collection: 'required',
            phone_number_collection: { enabled: true },
            shipping_options: [
                {
                    shipping_rate: process.env.NEXT_STRIPE_SHIPPING_KEY
                }
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_DOMAIN_URL}/winkelwagen/success/`,
            cancel_url: `${process.env.NEXT_DOMAIN_URL}/winkelwagen/`,
        });
        return NextResponse.json({ id: session.id });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}