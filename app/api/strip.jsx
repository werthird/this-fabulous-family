import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if(req.method === 'POST') {
    try {
      const params = {
        shipping_oprtions: [
          { shipping_rate: 'shr_1Nd1rsB075B7BkfD0maWplNC' },
          { shipping_rate: 'shr_1Nd1tqB075B7BkfDkTd9ANWk' }
        ]
      }
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message })
    }
  }
}