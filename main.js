const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const fs = require('fs')
const csv = require('csv-parser')
const { phoneNumberFormatter } = require('./formatnumber')

const client = new Client()

const csvPhoneNumbersPath = './data/target_batch.csv';
const targetPhoneNumbers = [];
const messageToSend = `
Halo, terimakasih sudah mendaftar acara Lotengdev Meetup #3,
berikut ini link Zoom untuk acara nanti pada *Sabtu, 27 Januari,
Pukul 20.30 WITA*.

Join Zoom Meeting
https://telkomsel.zoom.us/j/96378472133?pwd=RCt5RzVWQVI2MnpOVlg1WWkvZzNUZz09

Meeting ID: 963 7847 2133
Passcode: lotengdev

Sampai jumpa di acara 👋.

*[Sent by Wah aBot]*
`;

// loop counter
var counter = 0;


client.on("qr", (qr) => {
    console.log("Scan cepat QR Code ini buat login WA:")
    qrcode.generate(qr, { small: true });
})

client.on("ready", () => {
    console.log("👌 WA Client udah ready bos!")

    // baca file CSV
    fs.createReadStream(csvPhoneNumbersPath)
        .pipe(csv())
        .on('data', (data) => targetPhoneNumbers.push(phoneNumberFormatter(data['No-whatsapp'])))
        .on('end', () => {
            //console.log(targetPhoneNumbers);
            console.log("Total imported phone numbers:", targetPhoneNumbers.length);
            sendBatchMessage(targetPhoneNumbers, messageToSend);

        });
        
    })
    
    function sendBatchMessage(phoneNumbers, message){
        // jalankan fungsi dengan interval 5 detik,
        // buat antisipasi biar tidak kena banned
        setTimeout(() => {
            if(counter < phoneNumbers.length){
                console.log(`Mengirim pesan ke-${counter + 1}...`);
                client.sendMessage(phoneNumbers[counter], message).then(response => {
                    console.log(`✅ Pesan ke-${counter} terkirim`)
                })
                
                // recursive call
                sendBatchMessage(phoneNumbers, message);
                counter++;

                if(counter >= targetPhoneNumbers.length){
                    console.log("🎉 Semua pesan terkirim!")
                }
            }
    }, 5000);

}

client.initialize()