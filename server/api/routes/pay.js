import Stripe from "stripe";
const striper = Stripe('sk_test_51Nm2bhAPurscdt1qyqDwoHxz4kpgNKNC0uGlT8TEZw3TLxAinRwcuLXnMXveb9wXASohmEY45htwwG1Ubxxt7vBO00zS5lDDq9');


export const pay = async (req,res) => {
    let {amount, id} = req.body
    try {
        const payment = await striper.paymentIntents.create({
            amount,
            currency: 'BRL',
            description: 'shop',
            payment_method: id,
            confirm: true
        })

        console.log('payment', payment);
        res.json({
            message: 'pagamento bem-sucedidp',
            succes: true
        })
    } catch (error) {
        console.log('error', error);
        res.json({
            message:'pagamento falhou',
            succes: false
        })
    }
}