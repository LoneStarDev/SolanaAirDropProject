// First we import Connection, PublicKey, clusterApiUrl, Keypair, and LAMPORTS_PER_SOL
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require('@solana/web3.js')

const wallet = new Keypair()

// Credentials set-up 
const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey

// Get a wallet balance
const getWalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet balance is ${walletBalance}`)
    } catch(err) {
        console.log(err)
    }

}
const main = async() => {
    await getWalletBalance()
}

main () 