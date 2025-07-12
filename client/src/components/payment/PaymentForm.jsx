import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLIC_KEY)

const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data: { clientSecret } } = await axios.post('/api/payments/create-payment-intent', { amount })
      
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      })

      if (stripeError) {
        setError(stripeError.message)
        setLoading(false)
        return
      }

      if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent)
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Payment failed')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border rounded-md p-4">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      
      {error && <div className="text-red-500">{error}</div>}
      
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  )
}

const StripePayment = ({ amount, onSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  )
}

export default StripePayment
